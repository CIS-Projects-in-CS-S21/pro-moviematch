import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, Image, TextInput, Button, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Swiper from 'react-native-deck-swiper';
import { Card } from '../components/Cards.js';


export default function HomeScreen({ navigation }, page) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    //var page = 1;

    useEffect(() => {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=156f6cfa04dae615351cd9878f39b732&language=en-US&page=1')
        .then((response) => response.json())
        .then((json) => setData(parseMovies(json.results)))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
    console.log(data);

    return (
      <SafeAreaView style={styles.container}>
        {isLoading ? <ActivityIndicator/> : (
          <Swiper
              cards={data}
              renderCard={Card}
              // infinite // keep looping cards infinitely
              verticalSwipe={false}
              backgroundColor="white"
              cardHorizontalMargin={0}
              stackSize={2} // number of cards shown in background
              /*onSwipedAll = {
                setData(getData(page + 1))
                }*/ // Can't use hooks, trying to find alternative way to fill data variable
              />
        )}
      </SafeAreaView>    
    );
}

  // Pass page num and fetch data on page
  function getData(page) {
    const [data, setData] = useState([]);

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=156f6cfa04dae615351cd9878f39b732&language=en-US&page=' + page)
      .then((response) => response.json())
      .then((json) => setData(parseMovies(json.results)))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    
    console.log(data);
    
    return data;
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