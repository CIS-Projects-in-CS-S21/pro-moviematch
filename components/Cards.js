import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import { Tile } from 'react-native-elements'
import Layout from '../constants/Layout'

const BOTTOM_BAR_HEIGHT = !Platform.isPad ? 29 : 49 // found from https://stackoverflow.com/a/50318831/6141587

export const Card = ({ pic, title, caption }) => (
  <Tile
    imageSrc={pic}
    imageContainerStyle={styles.imageContainer}
    activeOpacity={0.9}
    title={title}
    titleStyle={styles.title}
    caption={caption}
    captionStyle={styles.caption}
    containerStyle={styles.container}
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
    height: Layout.window.height - BOTTOM_BAR_HEIGHT * 6,
    borderRadius: 20,
    overflow: 'hidden', // this does magic
  },
  title: {
    justifyContent: 'flex-start',
    position: 'absolute',
    left: 10,
    bottom: '30%',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    padding: '3%',
    borderRadius: 9,
    overflow: 'hidden',
  },
  caption: {
    justifyContent: 'flex-end',
    position: 'absolute',
    left: 10,
    bottom: 10,
    fontSize: 12,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    padding: '3%',
    borderRadius: 9,
    overflow: 'hidden',
  },
})