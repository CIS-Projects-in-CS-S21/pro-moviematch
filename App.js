import React, { useState } from 'react';
import { Text, View, SafeAreaView, Image, TextInput, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './forms/login.js';
import RegisterScreen from './forms/register.js';
import Swiper from 'react-native-deck-swiper'
import { Card } from './components/Cards.js'
import { SwipeableMovies } from './constants/Movies.js'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChangePasswordScreen from './forms/passwordChange.js';
import {ButtonGroup} from 'react-native-elements';
import {CheckBox} from 'react-native-elements';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
          cards={SwipeableMovies}
          renderCard={Card}
          infinite // keep looping cards infinitely
          verticalSwipe={false} //disables vertical swipe
          backgroundColor="white"
          cardHorizontalMargin={0}
          stackSize={2} // number of cards shown in background
          />
    </SafeAreaView>        
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'ios-settings-outline';
          } else if (route.name === 'Accounts') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FF1493',
        inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Accounts" component={AccountsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function AccountsScreen({navigation}) {
  //Mock data for now
  var userEmail = "demo1test@gmail.com";
  var userFirstName = "John";
  var userLastName = "Doe";
  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{flexDirection:"row"}}>
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
      
      <TouchableOpacity style={styles.logout_button} onPress={() =>
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


function SettingsScreen({navigation}) {
  const [checked, toggleChecked] = useState(false);
  const [checked2, toggleChecked2] = useState(false);
  const [checked3, toggleChecked3] = useState(false);
  const [checked4, toggleChecked4] = useState(false);
  return (
    //Checkbox currently not working.  Need change
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
const Tab = createBottomTabNavigator();

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