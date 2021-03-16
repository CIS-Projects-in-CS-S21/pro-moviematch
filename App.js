import React, { useState } from 'react';
import { Text, View, SafeAreaView, Image, TextInput, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './forms/login.js';
import RegisterScreen from './forms/register.js';
import Swiper from 'react-native-deck-swiper'
import { Card } from './components/Cards.js'
import { SwipeableMovies } from './constants/Movies.js'

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
          cards={SwipeableMovies}
          renderCard={Card}
          infinite // keep looping cards infinitely
          verticalSwipe={false}
          backgroundColor="white"
          cardHorizontalMargin={0}
          stackSize={2} // number of cards shown in background
          />
    </SafeAreaView>        
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 100, height: 100 }}
      source={require('./resources/MovieMatchLogo.png')}
    />
  );
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

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      ></Stack.Screen>
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: props => <LogoTitle {...props} /> }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
      ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;