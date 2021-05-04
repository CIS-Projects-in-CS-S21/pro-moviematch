import sampleGroups from '../constants/Groups';
import { SafeAreaView, View, FlatList, StyleSheet, Text} from 'react-native';
import React from 'react';
import { ListItem } from 'react-native-elements'

const DATA = [
    {
        title: "Best Buddies", 
        members: "Brandon Lokey, Kyle Skelly",
        contentLike: "Godzilla vs. Kong"
    },
    {
        title: "Family", 
        members: "David Doe, Brandon Doe, Kyle Doe, Amanda Doe, Jacob Doe, X'Zavier Doe",
        contentLike: "The Office"
    },
    {
        title: "Friends", 
        members: "John Smith, Gavin Oko, Kyle McCarthy, Tom Brown, Alice Devine, Alana Teek",
        contentLike: "Godzilla vs. Kong"
    },
    {
        title: "Co-Workers", 
        members: "Brad Johnson, Blake Anderson, Timmy Turner, Matisse Thybulle, Tito Ortiz, John Cena",
        contentLike: "Kill Bill"
    },
    {
        title: "College Buddies", 
        members: "John Anderson, Alex Smith, Timmy Turner, Matisse Thybulle, Tito Ortiz, John Cena",
        contentLike: "Breaking Bad"
    },
    {
        title: "Significant Other", 
        members: "Lady Friend",
        contentLike: "The Sopranos"
    },
    {
        title: "Soccer Team",
        members: "Dave Stevenson, Mike Bunzson, Cristiano Smith, Alan Greene, Mike Williams",
        contentLike: "Kicking & Screaming"
    },
    {
        title: "Math Club",
        members: "Sean Carter, Billy Mays, Hank Greenwood, Mark Clattenburg, Bear Anderson",
        contentLike: "Hidden Figures"
    },
    {
        title: "After School Band",
        members: "Dave Grohl, Phil Collins, Jimi Hendrix",
        contentLike: "School of Rock"
    }
];


const Item = ({ title, caption, contentLike}) => (
    <View style={StyleSheet.item}>
      <Text style={StyleSheet.title}>{title}</Text>
      <Text style={StyleSheet.caption}>{caption}</Text>
      <Text style={StyleSheet.contentLike}>{contentLike}</Text>
    </View>
  )
  
export const GroupList = () => {
    const renderItem = ({ item }) => (
        <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.members}</ListItem.Subtitle>
                <ListItem.Subtitle>{"Most commonly liked content: " + item.contentLike}</ListItem.Subtitle>
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
    fontSize: 40,
},
caption: {
    fontSize: 20,
},
contentLike: {
    fontSize: 20,
}

})