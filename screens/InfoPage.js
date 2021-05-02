import { response } from 'express';
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { SafeAreaView, StyleSheet, ActivityIndicator} from 'react-native';

export default function InfoScreen() {
    /*const id = 399566;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    useEffect(() => getData(), []);

    const getData = () => {
        setLoading(true);
        fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=156f6cfa04dae615351cd9878f39b732")
        .then((response2) => response2.json())
        .then((responseJson) => {
          setData(data => [...data, responseJson]);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }*/

    // Test

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Info Screen</Text>
    </View>
    )
}