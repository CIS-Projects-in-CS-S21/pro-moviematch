import sampleGroups from '../constants/Groups';
import { SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';
import React from 'react';
import { ListItem } from 'react-native-elements'

const DATA = [
    {
        title: "Family", 
        members: "David Doe, Brandon Doe, Kyle Doe, Amanda Doe, Jacob Doe, X'Zavier Doe"
    },
    {
        title: "Friends", 
        members: "John Smith, Gavin Oko, Kyle McCarthy, Tom Brown, Alice Devine, Alana Teek"
    },
    {
        title: "Co-Workers", 
        members: "Brad Johnson, Blake Anderson, Timmy Turner, Matisse Thybulle, Tito Ortiz, John Cena"
    },
    {
        title: "College Buddies", 
        members: "John Anderson, Alex Smith, Timmy Turner, Matisse Thybulle, Tito Ortiz, John Cena"
    },
    {
        title: "Significant Other", 
        members: ""
    },
];


const Item = ({ title, caption}) => (
    <View style={StyleSheet.item}>
      <Text style={StyleSheet.title}>{title}</Text>
      <Text style={StyleSheet.caption}>{caption}</Text>
    </View>
  )
  
export const GroupList = () => {
    const renderItem = ({ item }) => (
        <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.members}</ListItem.Subtitle>
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