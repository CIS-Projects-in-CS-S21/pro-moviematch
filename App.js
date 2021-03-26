import React, { useState , useEffect } from 'react';
import { Text, View, SafeAreaView, Image, TextInput, Button, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './forms/login.js';
import RegisterScreen from './forms/register.js';
import Swiper from 'react-native-deck-swiper';
import { Card } from './components/Cards.js';
import HomeScreen from './screens/HomeScreen.js';

function LogoTitle() {
  return (
    <Image
      style={{ width: 100, height: 100 }}
      source={require('./resources/MovieMatchLogo.png')}
    />
  );
}

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