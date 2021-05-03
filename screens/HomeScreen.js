import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Card } from '../components/Cards.js';
import { contentMovieOrTV, genreToArr } from '../components/Filters'
import { genreToString } from "../components/ContentGenreToString"
import {tunnelURL} from './../common/global'
import { InfoScreen } from './InfoPage.js';


/**
 * HomeScreen visual component that contains the content queue. This is where the user will swipe through content
 * @param {boolean, Array[boolean]} route Contains filter information that will be used to modify the queue
 * @returns Visual home screen component
 */
 export default function HomeScreen({ route, navigation }) {
  const {contentType, contentGenre} = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(1);
  var i = 0;

  useEffect(() => getData(), []);

  const getData = () => {
    i = 0;
    setLoading(true);
    
    fetch(contentMovieOrTV(contentType, offset, encodeURIComponent(genreToArr(contentGenre, contentType).join('|'))))
      
      .then((response) => response.json())
      .then((responseJson) => {
        
        setOffset(offset + 1);
        setData([...parseMovies(responseJson.results, contentType)]);

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <Swiper
            cards={data}
            renderCard={Card}
            onSwiped={() => i++}
            onSwipedAll={getData}
            onSwipedRight={() => getvalues(data[i - 1].id)}  // (data[i - 1] is the movie card)
            onTapCard={() => navigation.navigate('Info')}
            verticalSwipe={false}
            backgroundColor="#white"
            cardVerticalMargin={20}
            cardHorizontalMargin={0}
            stackSize={2} // number of cards shown in background
            overlayLabelStyle=
            {
              {
                fontSize: 25,
                fontWeight: 'bold',
                borderRadius: 10,
                padding: 10,
                overflow: 'hidden'
              }
            }
            overlayLabels={{
              left: {
                title: 'Not Interested',
                style: {
                  label: {
                    backgroundColor: '#99ccff',
                    borderColor: '#99ccff',
                    color: 'white',
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: -30
                  }
                }
              },
              right: {
                title: 'Interested',
                style: {
                  label: {
                    backgroundColor: '#FF1493',
                    borderColor: '#FF1493',
                    color: 'white',
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: 30
                  }
                }
              }
            }}
            />
      )}
    </SafeAreaView>    
  );
}

  function parseMovies(movieArray, contentType) {
    var parsedMovies = [];
    var i;
    var imgurl= "https://image.tmdb.org/t/p/original";
    if(contentType == false) {
      for (i = 0; i < movieArray.length; i++) {
        parsedMovies[i] =
        {
          id: movieArray[i].id,
          pic: {uri: imgurl.concat(movieArray[i].poster_path)},
          title: movieArray[i].title,
          caption: "Rating: " + movieArray[i].vote_average + "\n" + genreToString(movieArray[i].genre_ids),
        }
        //console.log(genreToString(movieArray[i].genre_ids));
      }
    }
  else {
    for (i = 0; i < movieArray.length; i++) {
      parsedMovies[i] =
      {
        id: movieArray[i].id,
        pic: {uri: imgurl.concat(movieArray[i].poster_path)},
        title: movieArray[i].name,
        caption: "Rating: " + movieArray[i].vote_average + "\n" + genreToString(movieArray[i].genre_ids),
      }
      //console.log(genreToString(movieArray[i].genre_ids));
    }
  }
  return parsedMovies
}

function getvalues(id){
return fetch(tunnelURL + "/api/users/" + global.userID + "/like", {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }, 
  body: JSON.stringify({
    movie_id: id,
  })
})
.then((response) => response.json())

.then((responseData) => {
  alert(JSON.stringify(responseData));
  return responseData;
})
.catch(error => alert('Error'));
}

const getUserID = async () =>{
try{
  let response = await fetch(tunnelURL + "/api/users/" + global.globEmail + "/Name");
  let jsonResponse = await response.json();
  let userID = jsonResponse._id;
  global.userID = userID;
}
catch(error){
  alert(error);
}
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: "center",
  },
  logout_button: {
    width: "80%",
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "#99ccff",
    marginTop: 100,
    padding: 10,
  },
})

module.exports = HomeScreen;