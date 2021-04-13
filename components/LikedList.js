import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, ActivityIndicator } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import Layout from '../constants/Layout'
import axios from 'axios';

const tunnelURL = "https://nervous-lion-41.loca.lt";

var movieidarray = [];

const Item = ({ title, caption}) => (
  <View style={StyleSheet.item}>
    <Text style={StyleSheet.title}>{title}</Text>
    <Text style={StyleSheet.caption}>{caption}</Text>
  </View>
)

const getUserID = async () =>{
  try{
    let response = await fetch(tunnelURL + "/api/users/" + global.globEmail + "/userId");
    let jsonResponse = await response.json();
    let userID = jsonResponse.userId;
    global.userID = userID;
  }
  catch(error){
    alert(error);
  }
};


async function axiosTest() {
  try {
    const {data:response} = await axios.get(tunnelURL + '/api/users/60502bf7f9ef9c6104fa0a96/like') //use data destructuring to get data from the promise object
    console.log(response);
    for (i = 0; i < response.length; i++) {
      movieidarray.push(response[i]);
    }
    return parseMovies(response)
  }

  catch (error) {
    console.log(error);
  }
}

function parseMovies(movieArray) {
  var parsedMovies = [];
  var i;
  var imgurl = "https://image.tmdb.org/t/p/original";
  for (i = 0; i < movieArray.length; i++) {
    parsedMovies[i] =
    {
        id: movieArray[i].id,
        pic: {uri: imgurl.concat(movieArray[i].poster_path)},
        title: movieArray[i].title,
        caption: "Rating: " + movieArray[i].vote_average,
    }
  }
  return parsedMovies
}

axiosTest();
export default function LikedList({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [datas, setData] = useState([]);
  var newArr = [];
  //fetch("https://api.themoviedb.org/3/movie/" + movieidarray[0] + "?api_key=156f6cfa04dae615351cd9878f39b732")

  console.log(global.userID);
  useEffect(() => getData(), []);

  const getData = () => {
    for (i = 0; i < movieidarray.length; i++) {
        setLoading(true);
        fetch("https://api.themoviedb.org/3/movie/" + movieidarray[i] + "?api_key=156f6cfa04dae615351cd9878f39b732")
        .then((response) => response.json())
        .then((responseJson) => {
          //Successful response
          //Increasing the offset for the next API call
          setData(datas => [...datas, responseJson]);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
      };
  }
  

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Avatar 
        //size="large"
        source={item.pic} 
        width={100}
        height={150}
        imageProps={{resizeMode: 'contain'}}
      />
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
        <ListItem.Subtitle>{item.overview}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <SafeAreaView style={StyleSheet.container}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={datas}
          renderItem={renderItem}
          //keyExtractor={item}
        />
      )}
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  item: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  caption: {
    fontSize: 20,
  },

})