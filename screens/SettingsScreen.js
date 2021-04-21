import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, ScrollView, Dimensions, Switch, Image, TextInput, Button, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {CheckBox} from 'react-native-elements';

const screenWidth = Dimensions.get('window').width;

export default function SettingsScreen({ navigation }, page) {
  //Chechbox for Streaming services
  const [checkedNetflix, toggleCheckedNetflix] = useState(true);
  const [checkedAmazon, toggleCheckedAmazon] = useState(true);
  const [checkedDisney, toggleCheckedDisney] = useState(true);
  const [checkedHBO, toggleCheckedHBO] = useState(true);
  
  // Movie Content checkboxes
  const [checked1, toggleChecked1] = useState(false);
  const [checked2, toggleChecked2] = useState(false);
  const [checked3, toggleChecked3] = useState(false);
  const [checked4, toggleChecked4] = useState(false);
  const [checked5, toggleChecked5] = useState(false);
  const [checked6, toggleChecked6] = useState(false);
  const [checked7, toggleChecked7] = useState(false);
  const [checked8, toggleChecked8] = useState(false);
  const [checked9, toggleChecked9] = useState(false);
  const [checked10, toggleChecked10] = useState(false);
  const [checked11, toggleChecked11] = useState(false);
  const [checked12, toggleChecked12] = useState(false);
  const [checked13, toggleChecked13] = useState(false);
  const [checked14, toggleChecked14] = useState(false);
  const [checked15, toggleChecked15] = useState(false);
  const [checked16, toggleChecked16] = useState(false);
  const [checked17, toggleChecked17] = useState(false);
  const [checked18, toggleChecked18] = useState(false);
  const [checked19, toggleChecked19] = useState(false);

  // TV Content checkboxes
  const [checked20, toggleChecked20] = useState(false);
  const [checked21, toggleChecked21] = useState(false);
  const [checked22, toggleChecked22] = useState(false);
  const [checked23, toggleChecked23] = useState(false);
  const [checked24, toggleChecked24] = useState(false);
  const [checked25, toggleChecked25] = useState(false);
  const [checked26, toggleChecked26] = useState(false);
  const [checked27, toggleChecked27] = useState(false);
  const [checked28, toggleChecked28] = useState(false);
  const [checked29, toggleChecked29] = useState(false);
  const [checked30, toggleChecked30] = useState(false);
  const [checked31, toggleChecked31] = useState(false);
  const [checked32, toggleChecked32] = useState(false);
  const [checked33, toggleChecked33] = useState(false);
  const [checked34, toggleChecked34] = useState(false);
  const [checked35, toggleChecked35] = useState(false);
  //For Content type switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwtich = () => setIsEnabled(previousState => !previousState);
 

  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
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
          <Text>{global.globEmail}</Text>
          <Text>{global.firstName}</Text>
          <Text>{global.lastName}</Text>
        </View>
      </View>

      {/* Streaming services checkbox*/}
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Content Type</Text>
      </View>
      <View style={{flexDirection:"row", backgroundColor: '#d3d3d3', borderRadius:10, borderWith:1, padding:10, marginLeft:10, marginRight:10}}>
        <View style={{flex:1, alignItems: 'center'}}>
          <Text style={{fontSize: 15}}> Movies</Text>
        </View>
        <Switch
          //trackColor={{ false: "#767577", true: "#81b0ff"}}
          //thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwtich}
          value={isEnabled}
        />       
        <View style={{flex:1}}>
          <Text style={{fontSize: 15}}> TV Shows</Text>
        </View>
      </View>

      {/* Streaming services checkbox*/}
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Streaming services</Text>
      </View>
      <View style={{backgroundColor: '#d3d3d3', borderRadius:10, borderWith:1, padding:10, marginLeft:10, marginRight:10}}>
        <View style={{alignItems: 'left'}}>
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checkedNetflix}
            onPress={() => toggleCheckedNetflix(!checkedNetflix)}
            size={30}
            textStyle={{}}
            title="Netflix"
            titleProps={{}}
            uncheckedColor="#F00"
           
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checkedAmazon}
            onPress={() => toggleCheckedAmazon(!checkedAmazon)}
            size={30}
            textStyle={{}}
            title="Amazon Prime"
            titleProps={{}}
            uncheckedColor="#F00"
           
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checkedDisney}
            onPress={() => toggleCheckedDisney(!checkedDisney)}
            size={30}
            textStyle={{}}
            title="Disney+"
            titleProps={{}}
            uncheckedColor="#F00"
           
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checkedHBO}
            onPress={() => toggleCheckedHBO(!checkedHBO)}
            size={30}
            textStyle={{}}
            title="HBO Max"
            titleProps={{}}
            uncheckedColor="#F00"
           
          />
        </View>
      </View>
      
      {/* Movie Content Genre checkbox*/}
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Movie Genres</Text>
      </View>
      <View style={{backgroundColor: '#d3d3d3', borderRadius:10, borderWith:1, padding:10, marginLeft:10, marginRight:10}}>
        <View style={{alignItems: 'left'}}>
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked1}
            onPress={() => toggleChecked1(!checked1)}
            size={30}
            textStyle={{}}
            title="Action"
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
            title="Adventure"
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
            title="Animation"
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
            title="Comedy"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked5}
            onPress={() => toggleChecked5(!checked5)}
            size={30}
            textStyle={{}}
            title="Crime"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked6}
            onPress={() => toggleChecked6(!checked6)}
            size={30}
            textStyle={{}}
            title="Documentary"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked7}
            onPress={() => toggleChecked7(!checked7)}
            size={30}
            textStyle={{}}
            title="Drama"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked8}
            onPress={() => toggleChecked8(!checked8)}
            size={30}
            textStyle={{}}
            title="Family"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked9}
            onPress={() => toggleChecked9(!checked9)}
            size={30}
            textStyle={{}}
            title="Fantasy"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked10}
            onPress={() => toggleChecked10(!checked10)}
            size={30}
            textStyle={{}}
            title="History"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked11}
            onPress={() => toggleChecked11(!checked11)}
            size={30}
            textStyle={{}}
            title="Horror"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked12}
            onPress={() => toggleChecked12(!checked12)}
            size={30}
            textStyle={{}}
            title="Music"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked13}
            onPress={() => toggleChecked13(!checked12)}
            size={30}
            textStyle={{}}
            title="Mystery"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked14}
            onPress={() => toggleChecked14(!checked14)}
            size={30}
            textStyle={{}}
            title="Romance"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked15}
            onPress={() => toggleChecked15(!checked15)}
            size={30}
            textStyle={{}}
            title="Sci Fi"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked16}
            onPress={() => toggleChecked16(!checked16)}
            size={30}
            textStyle={{}}
            title="TV Movie"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked17}
            onPress={() => toggleChecked17(!checked17)}
            size={30}
            textStyle={{}}
            title="Thriller"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked18}
            onPress={() => toggleChecked18(!checked18)}
            size={30}
            textStyle={{}}
            title="War"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked19}
            onPress={() => toggleChecked19(!checked19)}
            size={30}
            textStyle={{}}
            title="Western"
            titleProps={{}}
            uncheckedColor="#F00"
          />
        </View>
      </View>

        {/* TV Content Genre checkbox*/}
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>TV Genres</Text>
      </View>
      <View style={{backgroundColor: '#d3d3d3', borderRadius:10, borderWith:1, padding:10, marginLeft:10, marginRight:10}}>
        <View style={{alignItems: 'left'}}>
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked20}
            onPress={() => toggleChecked20(!checked20)}
            size={30}
            textStyle={{}}
            title="Action & Adventure"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked21}
            onPress={() => toggleChecked21(!checked21)}
            size={30}
            textStyle={{}}
            title="Animation"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked22}
            onPress={() => toggleChecked22(!checked22)}
            size={30}
            textStyle={{}}
            title="Comedy"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked23}
            onPress={() => toggleChecked23(!checked23)}
            size={30}
            textStyle={{}}
            title="Crime"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked24}
            onPress={() => toggleChecked24(!checked24)}
            size={30}
            textStyle={{}}
            title="Documentary"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked25}
            onPress={() => toggleChecked25(!checked25)}
            size={30}
            textStyle={{}}
            title="Drama"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked26}
            onPress={() => toggleChecked26(!checked26)}
            size={30}
            textStyle={{}}
            title="Family"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked27}
            onPress={() => toggleChecked27(!checked27)}
            size={30}
            textStyle={{}}
            title="Kids"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked28}
            onPress={() => toggleChecked28(!checked28)}
            size={30}
            textStyle={{}}
            title="Mystery"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked29}
            onPress={() => toggleChecked29(!checked29)}
            size={30}
            textStyle={{}}
            title="News"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked30}
            onPress={() => toggleChecked30(!checked30)}
            size={30}
            textStyle={{}}
            title="Reality"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked31}
            onPress={() => toggleChecked31(!checked31)}
            size={30}
            textStyle={{}}
            title="Sci-Fi & Fantasy"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked32}
            onPress={() => toggleChecked32(!checked32)}
            size={30}
            textStyle={{}}
            title="Soap"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked33}
            onPress={() => toggleChecked33(!checked33)}
            size={30}
            textStyle={{}}
            title="Talk"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked34}
            onPress={() => toggleChecked34(!checked34)}
            size={30}
            textStyle={{}}
            title="War & Politics"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          <CheckBox
            checkedColor="#0F0"
            containerStyle={{}}
            checked={checked35}
            onPress={() => toggleChecked35(!checked35)}
            size={30}
            textStyle={{}}
            title="Western"
            titleProps={{}}
            uncheckedColor="#F00"
          />
          
        </View>
      </View>

      <TouchableOpacity style={styles.change_password_button} onPress={() =>
        navigation.navigate('Queue',{
          streamingServices: [checkedNetflix, checkedAmazon, checkedDisney, checkedHBO],
          contentType: isEnabled,
          contentGenre: [checked1, checked2, checked3, checked4, checked5, checked6, checked7,
                          checked8, checked9, checked10, checked11, checked12, checked13, checked14,
                          checked15, checked16, checked17, checked18, checked19, checked20, checked21, checked22
                          , checked23, checked24, checked25, checked26, checked27, checked28, checked29, checked30
                          , checked31, checked32, checked33, checked34, checked35]
      })}>
        
        <Text style={styles.loginText}>Save Changes</Text>
      </TouchableOpacity>
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
      </ScrollView>
    </SafeAreaView>
  );
} 
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor for testing
      //backgroundColor: '#000000',
      backgroundColor: '#fff',
      //justifyContent: 'center',
      alignItems: "center",
      alignContent: "center",
    },
    scrollView: {
      //backgroundColor for testing
      //backgroundColor: '#e9967a',
      backgroundColor: '#fff',
      width: screenWidth-20,
    },
    logout_button: {
      width: "80%",
      borderRadius: 25,
      alignItems: "center",
      //alignContent: "center",
      backgroundColor: "#99ccff",
      marginTop: 10,
      padding: 10,
    },
    change_password_button: {
      width: "80%",
      borderRadius: 25,
      alignItems: "center",
      backgroundColor: "#99ccff",
      marginTop: 10,
      padding: 10,
    },
  })