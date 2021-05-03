import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';
import {tunnelURL} from './../common/global'


export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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

    const checkFirstNameInput= () => {
      if (firstName != '')
        return true
      return false
    };

    const checkLastNameInput= () => {
      if (lastName != '')
        return true
      return false
    };

    const checkInput = (fieldName) => {
      if(fieldName.length == 0){
        return false;
      }
      return true;

    }

 
   
    function getvals(){
      return fetch(tunnelURL + "/api/users/register", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
          email: email,
          password: password,
          first_name: firstName,
          last_name: lastName
        })
      })
      .then((response) => response.json())
      .then((responseData) => {
        //alert(JSON.stringify(responseData));
        return responseData;
      })
      .catch(error => alert('Error'));
    }

    const navigateAccreditedUser = (response) => {
      //alert(response);
      if(response.hasOwnProperty('password')){
        navigation.reset({
          index: 0,
          routes: [
            {
                name: 'Login',
                params: { someParam: 'Param1'},
            },
          ],
        })
      }
      else{
        alert('Error registering account with given credentials');
      } 
    }
  
    const buttonClickListener = (navigation) => {
      if (checkEmailInput() == true && checkPasswordInput() == true && checkFirstNameInput()== true && checkLastNameInput()==true){

      getvals().then(response => navigateAccreditedUser(response));
      
      }
      //Not the most convenient but it works for now
      else if (checkEmailInput()==false && checkPasswordInput()==true && checkFirstNameInput()==true && checkLastNameInput()==true){
        alert('Invalid Response: Please enter email field');
      }
      else if (checkEmailInput()==false && checkPasswordInput()==false && checkFirstNameInput()==true && checkLastNameInput()==true){
        alert('Invalid Response: Please enter email and password field');
      }
      else if (checkEmailInput()==false && checkPasswordInput()==false && checkFirstNameInput()==false && checkLastNameInput()==true){
        alert('Invalid Response: Please enter email, password, and first name field');
      }
      else if (checkEmailInput()==false && checkPasswordInput()==false && checkFirstNameInput()==true && checkLastNameInput()==false){
        alert('Invalid Response: Please enter email, password, and last name field');
      }
      else if (checkEmailInput()==false && checkPasswordInput()==false && checkFirstNameInput()==false && checkLastNameInput()==false){
        alert('Invalid Response: Please enter all fields');
      }
      else if (checkEmailInput()==true && checkPasswordInput()==false && checkFirstNameInput()==false && checkLastNameInput()==false){
        alert('Invalid Response: Please enter password, first name, and last name fields'); 
      }
      else if (checkEmailInput()==true && checkPasswordInput()==true && checkFirstNameInput()==false && checkLastNameInput()==false){
        alert('Invalid Response: Please enter first name and last name field');
      }
      else if (checkEmailInput()==true && checkPasswordInput()==true && checkFirstNameInput()==true && checkLastNameInput()==false){
        alert('Invalid Response: Please enter last name field');
      }
      else {
        alert('Invalid Response');
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

            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="First Name"
                placeholderTextColor="#003f5c"
                onChangeText={(firstName) => setFirstName(firstName)}
              />
            </View>
      
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Last Name"
                placeholderTextColor="#003f5c"
                onChangeText={(lastName) => setLastName(lastName)}
              />
            </View>

            <TouchableOpacity style={styles.register_button} onPress={() =>
                  buttonClickListener(navigation)}>
              <Text style={styles.loginText}>REGISTER</Text>
            
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

    register_button: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#99ccff",
    },
  });