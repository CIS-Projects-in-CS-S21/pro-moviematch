import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>IDE setup Test!</Text>
      <Text>Add a line of text to confirm your IDE setup</Text>
      <Text>David Lee: Hello!</Text>
      <Text>Amanda Benzkofer: I have successfully set up my IDE with our project!</Text>
      <Text>Brandon Lokey: I got it working!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
