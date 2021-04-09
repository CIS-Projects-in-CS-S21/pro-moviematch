import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, Image, TextInput, Button, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Swiper from 'react-native-deck-swiper';
import { Card } from '../components/Cards.js';

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

export default function HomeScreen({ route, navigation }, page) {
    const {contentType, contentGenre} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(1);
    const [genres, setGenres] = useState(encodeURIComponent(genreToArr(contentGenre).join('|')));

    console.log(contentGenre);

    /*var genreArr = genreToArr(contentGenre);
    var genreStr = encodeURIComponent(genreArr.join('|'));*/
    
    useEffect(() => getData(), []);

    const getData = () => {
      console.log('getData');
      setLoading(true);
      //Service to get the data from the server to render
      fetch("https://api.themoviedb.org/3/discover/movie?api_key=156f6cfa04dae615351cd9878f39b732&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false"
        + "&page=" + offset + "&with_genres=" + genres)
        //Sending the currect offset with get request
        .then((response) => response.json())
        .then((responseJson) => {
          //Successful response
          setOffset(offset + 1);
          console.log(offset);

          setGenres(encodeURIComponent(genreToArr(contentGenre).join('|')));
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
// Turns content genre array into an array of TMDB genre ids for queries
  function genreToArr(contentGenre) {
    var arr = [];
    
    // Action
    if (contentGenre[0]) {
      arr.push(28);
    }

    // Adventure
    if (contentGenre[1]) {
      arr.push(12);
    }

    // Animation
    if (contentGenre[2]) {
      arr.push(16);
    }

    // Comedy
    if (contentGenre[3]) {
      arr.push(35);
    }

    // Crime
    if (contentGenre[4]) {
      arr.push(80);
    }

    // Documentary
    if (contentGenre[5]) {
      arr.push(99);
    }

    // Drama
    if(contentGenre[6]) {
      arr.push(18);
    }

    // Family
    if(contentGenre[7]) {
      arr.push(10751);
    }

    // Fantasy
    if(contentGenre[8]) {
      arr.push(14);
    }

    // History
    if(contentGenre[9]) {
      arr.push(36);
    }

    // Horror
    if(contentGenre[10]) {
      arr.push(27);
    }

    // Music
    if(contentGenre[11]) {
      arr.push(10402);
    }

    // Mystery
    if(contentGenre[12]) {
      arr.push(9648);
    }

    // Romance
    if(contentGenre[13]) {
      arr.push(10749);
    }

    // Science Fiction
    if(contentGenre[14]) {
      arr.push(878);
    }

    // TV Movie
    if(contentGenre[15]) {
      arr.push(10770);
    }

    // Thriller
    if(contentGenre[16]) {
      arr.push(53);
    }

    // War
    if(contentGenre[17]) {
      arr.push(10752);
    }

    // Western
    if(contentGenre[18]) {
      arr.push(37);
    }

    return arr;
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