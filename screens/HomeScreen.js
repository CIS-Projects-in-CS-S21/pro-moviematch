import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, Image, TextInput, Button, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Swiper from 'react-native-deck-swiper';
import { Card } from '../components/Cards.js';
import { contentMovieOrTV, genreToArr } from '../components/Filters'


export default function HomeScreen({ route, navigation }, page) {
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

          
          setData([...parseMovies(responseJson.results)]);
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

  function parseMovies(movieArray) {
    var parsedMovies = [];
    var i;
    var imgurl= "https://image.tmdb.org/t/p/original";
    for (i = 0; i < movieArray.length; i++) {
      parsedMovies[i] =
      {
          pic: {uri: imgurl.concat(movieArray[i].poster_path)},
          title: movieArray[i].title,
          caption: "Rating: " + movieArray[i].vote_average,
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