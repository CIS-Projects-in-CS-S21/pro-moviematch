import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image, TextInput, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const tunnelURL = 'https://heavy-cougar-95.loca.lt';

export default function ChangePasswordScreen({ navigation }) {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    
    const checkCurrentPasswordInput= () => {
      if (currentPassword != '')
        return true
      return false
    };

    const checkNewPasswordInput= () => {
      if (newPassword != '')
        return true
      return false
    };

    const checkInput = (fieldName) => {
      if(fieldName.length == 0){
        return false;
      }
      return true;

    }

    function changePassword(){
      return fetch(tunnelURL + "/api/users/" + global.globEmail+ "/changePassword", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
          password: currentPassword,
          newPassword: newPassword,
        })
      })
      .then((response) => response.json())

      .then((responseData) => {
        //alert(JSON.stringify(responseData));
        return responseData;
      })
      .catch(error => alert('Error'));
    }

    const navigateChangedPasswordUser = (response) => {
      if(response.hasOwnProperty('success')){
        alert('Password successfully changed!');
        navigation.reset({
          index: 0,
          routes: [
            {
                name: 'Queue',
                params: { someParam: 'Param1'},
            },
          ],
        })
      }
      else{
        alert('Error changing password');
      } 
    }

    const buttonClickListener = (navigation) => {
      if (checkCurrentPasswordInput() == true && checkNewPasswordInput()){
        if (currentPassword == newPassword){
          alert('Error. New password must be different than current password.');
        } else {
        changePassword().then(response => navigateChangedPasswordUser(response));
        }
      }
      else if (checkNewPasswordInput()==false && checkCurrentPasswordInput()==true){
        alert('Invalid Response: Please enter a new password');
      }
      else if (checkNewPasswordInput()==true && checkCurrentPasswordInput()==false){
        alert('Invalid Response: Please enter your current password');
      }
      else {
        alert('Invalid Response');
      }
    };
  
    return (
        <View style={styles.container}>
          <Image style={styles.image} source={require('../resources/MovieMatchLogo.png')} />
     
          <StatusBar style="auto" />
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Current Password"
              placeholderTextColor="#003f5c"
              onChangeText={(currentPassword) => setCurrentPassword(currentPassword)}
            />
          </View>
     
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="New Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(newPassword) => setNewPassword(newPassword)}
            />
          </View>

          <TouchableOpacity style={styles.register_button} onPress={() =>
                buttonClickListener(navigation)}>
            <Text style={styles.loginText}>Change Password</Text>
          
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