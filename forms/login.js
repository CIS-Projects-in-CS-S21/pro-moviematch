import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, TextInput, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import authTest from '../Auth/Auth.js'
import { Value } from 'react-native-reanimated';


export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const checkEmailInput= () => {
      if (email != '')
        return true
      return false
    };

    const checkPasswordInput= () => {
      if (password != '')
        return true
      return false
    };

    //Mock User credentials for demo 1
    const checkEmailValid= () => {
      if (email.toLowerCase() === 'demo2test@gmail.com')
        return true
      //changed for easier testing for now  
      return false
    }
    const checkPasswordValid= () => {
      if (password === 'moviematch')
        return true
      //changed for easier testing for now 
      return false
    }

    const buttonClickListener = (navigation) => {
      //var authStatus = authTest.getAuth();
    if(checkEmailInput() == true && checkPasswordInput() == true){
      //mock test for user credentials
      if(checkEmailValid() == true && checkPasswordValid() == true){
        navigation.reset({ 
          index: 0,
          routes: [
            {
                name: 'HomeTabs',
                params: { someParam: 'Param1'},
            },
          ],
        })
      }else{
        alert('Email or password incorrect');
      }
    }
      else if (checkEmailInput() == true && checkPasswordInput() == false){
        alert('Invalid Response: Please enter password field');
      }
      else if (checkEmailInput() == false && checkPasswordInput() == true){
        alert('Invalid Response: Please enter in email field');
      } else {
        alert('Invalid Response: Please enter email and password fields');
      }
    };
      
  
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../resources/MovieMatchLogo.png')} />
   
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
   
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
   
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() =>
            buttonClickListener(navigation)
          }>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.register_button} onPress={() =>
          navigation.navigate('Register')}>
          <Text style={styles.loginText}>REGISTER </Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 40,
    },
   
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "80%",
      height: 45,
      marginBottom: 20,
   
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 10,
    },

    register_button: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#99ccff",
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#FF1493",
    },
  });