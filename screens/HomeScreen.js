import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, Image, TextInput, Button, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Swiper from 'react-native-deck-swiper';
import { Card } from '../components/Cards.js';

export default function HomeScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const filterContent = 0;
    
    var genreArrMovies = [28, 12, 16, 35, 99, 18, 10751, 14, 36, 27, 9648, 878, 53];
    var genreArrayTV = [10759, 16, 35, 80, 99, 18, 10751, 10762, 9648, 10763, 10764, 10765, 10766, 10767, 10768, 37];

    var genreStrMovies = encodeURIComponent(genreArrMovies.join('|'));
    var genreStrTV = encodeURIComponent(genreArrayTV.join('|'));

    var switchContent = 1;
    var fetchThis;
    
    if (switchContent == 0 && filterContent == 0) { fetchThis = 'https://api.themoviedb.org/3/movie/popular?api_key=156f6cfa04dae615351cd9878f39b732&language=en-US&page=1' }

    if (switchContent == 1 && filterContent == 0) { fetchThis = 'https://api.themoviedb.org/3/tv/popular?api_key=156f6cfa04dae615351cd9878f39b732&language=en-US&page=1' }

    if(switchContent == 0 && filterContent != 0) {fetchThis = "https://api.themoviedb.org/3/discover/movie?api_key=156f6cfa04dae615351cd9878f39b732&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false"  
                                                  + "&page=" + offset + "&with_genres=" + genreStrMovies }

    if(switchContent == 1 && filterContent != 0) {fetchThis = "https://api.themoviedb.org/3/discover/tv?api_key=156f6cfa04dae615351cd9878f39b732&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false"  
                                                  + "&page=" + offset + "&with_genres=" + genreStrTV }

  
    useEffect(() => {
      fetch(fetchThis)
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
              infinite // keep looping cards infinitely
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

 