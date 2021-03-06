import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {tunnelURL} from './../common/global';


export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    global.globEmail = email;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");



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

    function getvalues(){
      return fetch(tunnelURL + "/api/users/login", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
          email: email,
          password: password,
        })
      })
      .then((response) => response.json())

      .then((responseData) => {
        //alert(JSON.stringify(responseData));
        return responseData;
      })
      .catch(error => alert('Error'));
    }

    const getUserID = async () =>{
      try{
        let response = await fetch(tunnelURL + "/api/users/" + global.globEmail + "/userId");
        let jsonResponse = await response.json();
        let userID = jsonResponse.userId;
        global.userID = userID;
      }
      catch(error){
        alert(error);
      }
    };

    getUserID();

    const navigateLoggedInUser = (response) => {
      if(response.hasOwnProperty('success')){
        let hasLoggedIn = 1;
        global.hasLoggedIn = hasLoggedIn;
        navigation.reset({
          index: 0,
          routes: [
            {
                name: 'Queue', //MOV108 had 'Home'
                params: { someParam: 'Param1'},
            },
          ],
        })
      }
      else{
        alert('Error logging into account with given credentials');
      } 
    }

    const getName = async () =>{
      try{
        let response = await fetch(tunnelURL + "/api/users/" + global.globEmail + "/Name");
        let jsonResponse = await response.json();
        let firstName = jsonResponse.firstName;
        let lastName = jsonResponse.lastName;
        global.firstName = firstName;
        global.lastName = lastName;
      }
      catch(error){
        alert(error);
      }
    };
    getName();

    const buttonClickListener = (navigation) => {
      
    if(checkEmailInput() == true && checkPasswordInput() == true){
      getvalues().then(response => navigateLoggedInUser(response));
      
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

      <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={70}
      style={styles.container1}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Image style={styles.image} source={require('../resources/MovieMatchLogo1.png')} />
      
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
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    container1: {
      flex: 1,
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
