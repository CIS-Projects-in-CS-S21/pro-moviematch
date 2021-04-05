import React, { useState , useEffect } from 'react';
import { Text, View, SafeAreaView, Image, TextInput, Button, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './forms/login.js';
import RegisterScreen from './forms/register.js';

import HomeScreen from './screens/HomeScreen.js';
import SettingsScreen from './screens/SettingsScreen.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChangePasswordScreen from './forms/passwordChange.js';
import {ButtonGroup} from 'react-native-elements';
import {CheckBox} from 'react-native-elements';
import {LikedList} from './components/LikedList.js'

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
      <Tab.Screen name="Queue" component={HomeScreen} />
      <Tab.Screen name="View Content" component={ViewContentScreen} />
      <Tab.Screen name="Group" component={GroupScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function ViewContentScreen({navigation}) {
  return (

    <View style={{ }}>
      <View>
        <LikedList/>
      </View>
    </View>
  );
}

function GroupScreen({navigation}) {
  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text>Group Content will go here</Text>
      </View>
    </View>
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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
    marginTop: 10,
    padding: 10,
  },
})

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        ></Stack.Screen>
        <Stack.Screen
            name="Queue"
            component={HomeTabs}
            options={{ headerTitle: props => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="Change Password"
          component={ChangePasswordScreen}
        ></Stack.Screen>
      </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;