import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Card } from '../components/Cards.js';
import { contentMovieOrTV, genreToArr } from '../components/Filters'

/**
 * HomeScreen visual component that contains the content queue. This is where the user will swipe through content
 * @param {boolean, Array[boolean]} route Contains filter information that will be used to modify the queue
 * @returns Visual home screen component
 */
export default function HomeScreen({ route }) {
    const {contentType, contentGenre} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(1);

    useEffect(() => getData(), []);

    const getData = () => {
      console.log('getData');
      i = 0;
      setLoading(true);
      
      fetch(contentMovieOrTV(contentType, offset, encodeURIComponent(genreToArr(contentGenre, contentType).join('|'))))
        
        .then((response) => response.json())
        .then((responseJson) => {
          
          setOffset(offset + 1);
          console.log(offset);

          
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
              onSwipedRight={() => console.log(data[i - 1])}  // (data[i - 1] is the movie card)
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
/**
 * Function to parse through the content and return the values we will be using in the cards
 * @param {Array} movieArray An array of movie objects to be parsed
 * @param {string} contentType Type of content that will be parsed (movie or tv show)
 * @returns {Array} Parsed array of movies containing the fields we are utilizing in the cards
 */
function parseMovies(movieArray, contentType) {
  var parsedMovies = [];
  var i;
  var imgurl= "https://image.tmdb.org/t/p/original";
  if(contentType == false) {
    for (i = 0; i < movieArray.length; i++) {
      parsedMovies[i] =
      {
        pic: {uri: imgurl.concat(movieArray[i].poster_path)},
        title: movieArray[i].title,
        caption: "Rating: " + movieArray[i].vote_average,
      }
    }
  }
  else {
    for (i = 0; i < movieArray.length; i++) {
      parsedMovies[i] =
      {
        pic: {uri: imgurl.concat(movieArray[i].poster_path)},
        title: movieArray[i].name,
        caption: "Rating: " + movieArray[i].vote_average,
      }
    }
  }
  return parsedMovies
}

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