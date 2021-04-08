import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, Image, TextInput, Button, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Swiper from 'react-native-deck-swiper';
import { Card } from '../components/Cards.js';
import {thisValue} from  './SettingsScreen.js';
/*
  TMDB Movie Genre IDs:
    Action          28
    Adventure       12
    Animation       16
    Comedy          35
    Crime           80
    Documentary     99
    Drama           18
    Family          10751
    Fantasy         14
    History         36
    Horror          27
    Music           10402
    Mystery         9648
    Romance         10749
    Science Fiction 878
    TV Movie        10770
    Thriller        53
    War             10752
    Western         37
*/

export default function HomeScreen({ navigation }, page) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(1);

    var genreArr = [28, 12, 16, 35, 99, 18, 10751, 14, 36, 27, 9648, 878, 53];
    var genreStr = encodeURIComponent(genreArr.join('|'));
    var modeStr = SettingsScreen.mode
    useEffect(() => getData(), []);

    const getData = () => {
      console.log('getData');
      setLoading(true);

      if (thisValue == 1) {console.log('1')}
      //Service to get the data from the server to render
      fetch("https://api.themoviedb.org/3/discover/movie?api_key=156f6cfa04dae615351cd9878f39b732&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false"
        + "&page=" + offset + "&with_genres=" + genreStr)
        //Sending the currect offset with get request
        .then((response) => response.json())
        .then((responseJson) => {
          //Successful response
          setOffset(offset + 1);
          console.log(offset);
          //Increasing the offset for the next API call
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
              // infinite // keep looping cards infinitely
              onSwipedAll={getData}
              verticalSwipe={false}
              backgroundColor="white"
              cardHorizontalMargin={0}
              stackSize={2} // number of cards shown in background
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