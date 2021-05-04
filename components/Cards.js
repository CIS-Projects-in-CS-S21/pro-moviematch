import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { Tile } from 'react-native-elements'
import Layout from '../constants/Layout'
import { useNavigation } from '@react-navigation/native';
import InfoScreen from '../screens/InfoPage';

const BOTTOM_BAR_HEIGHT = !Platform.isPad ? 29 : 49 // found from https://stackoverflow.com/a/50318831/6141587

export const Card = ({ id, pic, title, caption }) => (
  <Tile
    id={id}
    idStyle={styles.id}
    imageSrc={pic}
    imageContainerStyle={styles.imageContainer}
    activeOpacity={0.9}
    title={title}
    titleStyle={styles.title}
    caption={caption}
    captionStyle={styles.caption}
    containerStyle={styles.container}
    onPress={() => console.log("Press from card with ID of " + id)}
    featured
  />
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  imageContainer: {
    width: Layout.window.width - 30,
    height: Layout.window.height - BOTTOM_BAR_HEIGHT * 6 - 30,
    borderRadius: 20,
    overflow: 'hidden', // this does magic
  },
  title: {
    justifyContent: 'flex-start',
    position: 'absolute',
    left: 10,
    bottom: 70,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    padding: '3%',
    borderRadius: 9,
    overflow: 'hidden',
  },
  caption: {
    justifyContent: 'flex-end',
    position: 'absolute',
    left: 10,
    bottom: 5,
    fontSize: 12,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    padding: '3%',
    borderRadius: 9,
    overflow: 'hidden',
  },
  id: {
    
  }
})