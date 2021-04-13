import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, ActivityIndicator } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import Layout from '../constants/Layout'
import axios from 'axios';

const tunnelURL = "https://curly-rattlesnake-63.loca.lt";
const movieidarray = [550, 20, 30];

const DATA = [
  {
    pic: require('../assets/movieposters/ironman.jpg'),
    title: 'Iron Man',
    caption: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
  },
  {
    pic: require('../assets/movieposters/avatar.jpg'),
    title: 'Avatar',
    caption: 'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
  },
  {
    pic: require('../assets/movieposters/joker.jpg'),
    title: 'Joker',
    caption: 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
  },
  {
    pic: require('../assets/movieposters/matrix.jpg'),
    title: 'The Matrix',
    caption: 'Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.',
  },
  {
    pic: require('../assets/movieposters/diehard.jpg'),
    title: 'Die Hard',
    caption: 'YPD cop John McClanes plan to reconcile with his estranged wife is thrown for a serious loop when, minutes after he arrives at her office, the entire building is overtaken by a group of terrorists. Wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down.',
  },
  {
    pic: require('../assets/movieposters/toystory.jpg'),
    title: 'Toy Story',
    caption: 'Led by Woody, Andy`s toys live happily in his room until Andy`s birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy`s heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.',
  },
  {
    pic: require('../assets/movieposters/moneyball.jpg'),
    title: 'Moneyball',
    caption: 'The story of Oakland Athletics general manager Billy Beane`s successful attempt to put together a baseball team on a budget, by employing computer-generated analysis to draft his players.',
  },
  {
    pic: require('../assets/movieposters/superbad.jpg'),
    title: 'Superbad',
    caption: 'Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.',
  },
];

const Item = ({ title, caption}) => (
  <View style={StyleSheet.item}>
    <Text style={StyleSheet.title}>{title}</Text>
    <Text style={StyleSheet.caption}>{caption}</Text>
  </View>
)

async function axiosTest() {
  try {
    const {data:response} = await axios.get(tunnelURL + '/api/users/60502bf7f9ef9c6104fa0a96/like') //use data destructuring to get data from the promise object
    console.log(response);
    return response
  }

  catch (error) {
    console.log(error);
  }
}

axiosTest();

export default function LikedList({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [datas, setData] = useState([]);
  var movieidarray = [550, 100];
  var newArr = [];
  //fetch("https://api.themoviedb.org/3/movie/" + movieidarray[0] + "?api_key=156f6cfa04dae615351cd9878f39b732")

  useEffect(() => getData(), []);

  const getData = () => {
    for (i = 0; i < movieidarray.length; i++) {
        setLoading(true);
        fetch("https://api.themoviedb.org/3/movie/" + movieidarray[i] + "?api_key=156f6cfa04dae615351cd9878f39b732")
        .then((response) => response.json())
        .then((responseJson) => {
          //Successful response
          //Increasing the offset for the next API call
          setData([responseJson]);
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