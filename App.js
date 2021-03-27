import React, { useState , useEffect } from 'react';
import { Text, View, SafeAreaView, Image, TextInput, Button, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './forms/login.js';
import RegisterScreen from './forms/register.js';
import HomeScreen from './screens/HomeScreen.js';
import Ionicons from 'react-native-vector-icons/Ionicons';


function LogoTitle() {
  return (
    <Image
      style={{ width: 100, height: 100 }}
      source={require('./resources/MovieMatchLogo.png')}
    />
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Queue') {
            iconName = focused
              ? 'albums'
              : 'albums-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'ios-settings-outline';
          } else if (route.name === 'Group') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'View Content') {
            iconName = focused ? 'film' : 'film-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FF1493',
        inactiveTintColor: 'gray',
    }}
    >
      {/* COMMENTED OUT UNTIL I MERGE DAVID'S BRANCH IN!!  */}
      {/* SEPERATE GROUP SETTINGS AND QUEUE INTO SEPERATE FILES */}
      {/*  */}
      {/* <Tab.Screen name="Queue" component={QueueScreen} /> */}
      <Tab.Screen name="View Content" component={HomeScreen} />
      {/* <Tab.Screen name="Group" component={GroupScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        ></Stack.Screen>
        <Stack.Screen
            name="HomeTabs"
            component={HomeTabs}
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