import React, { useState , useEffect } from 'react';
import { Text, View, SafeAreaView, Image, TextInput, Button, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './forms/login.js';
import RegisterScreen from './forms/register.js';

import HomeScreen from './screens/HomeScreen.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChangePasswordScreen from './forms/passwordChange.js';
import {ButtonGroup} from 'react-native-elements';
import {CheckBox} from 'react-native-elements';

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

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text>View Content Here</Text>
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


function SettingsScreen({navigation}) {
  const [checked, toggleChecked] = useState(false);
  const [checked2, toggleChecked2] = useState(false);
  const [checked3, toggleChecked3] = useState(false);
  const [checked4, toggleChecked4] = useState(false);
  var userEmail = "demo1test@gmail.com";
  var userFirstName = "John";
  var userLastName = "Doe";
  return (
    //Checkbox currently not working.  Need change
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>User Info</Text>
      </View>
      <View style={{flexDirection:"row", backgroundColor: '#d3d3d3', borderRadius:10, borderWith:1, padding:10, marginLeft:10, marginRight:10}}>
        <View style={{flex:1, alignItems: 'center'}}>
          <Text>User Email :</Text>
          <Text>First Name :</Text>
          <Text>Last Name :</Text>
        </View>
        <View style={{flex:1}}>
          <Text>{userEmail}</Text>
          <Text>{userFirstName}</Text>
          <Text>{userLastName}</Text>
        </View>
      </View>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Streaming services</Text>
      </View>
      <View style={{backgroundColor: '#d3d3d3', borderRadius:10, borderWith:1, padding:10, marginLeft:10, marginRight:10}}>
        <View style={{alignItems: 'left'}}>
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked}
            onPress={() => toggleChecked(!checked)}
            size={30}
            textStyle={{}}
            title="Netflix"
            titleProps={{}}
            uncheckedColor="#F00"
           
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked2}
            onPress={() => toggleChecked2(!checked2)}
            size={30}
            textStyle={{}}
            title="Amazon Prime"
            titleProps={{}}
            uncheckedColor="#F00"
           
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked3}
            onPress={() => toggleChecked3(!checked3)}
            size={30}
            textStyle={{}}
            title="Disney+"
            titleProps={{}}
            uncheckedColor="#F00"
           
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked4}
            onPress={() => toggleChecked4(!checked4)}
            size={30}
            textStyle={{}}
            title="HBO Max"
            titleProps={{}}
            uncheckedColor="#F00"
           
          />
        </View>
      </View>
      <TouchableOpacity style={styles.change_password_button} onPress={() =>
        navigation.navigate('Change Password')}>
        <Text style={styles.loginText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logout_button} onPress={() =>
        navigation.reset({
          index: 0,
          routes: [
           {
            name: 'Login',
            params: { someParam: 'Param1'},
           },
          ],
        })
      }>
        <Text style={styles.loginText}>Logout</Text>
      </TouchableOpacity>
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
  change_password_button: {
    width: "80%",
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "#99ccff",
    marginTop: 100,
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
            name="HomeTabs"
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