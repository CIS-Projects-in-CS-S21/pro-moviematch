import React from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import Layout from '../constants/Layout'

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

export const LikedList = () => {
  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Avatar 
        size="large"
        source={item.pic} 
      />
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
        <ListItem.Subtitle>{item.caption}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <SafeAreaView style={StyleSheet.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        //keyExtractor={item}
      />
    </SafeAreaView>
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