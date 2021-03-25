import React, { useState , useEffect } from 'react';
import { Text, View, SafeAreaView, Image, TextInput, Button, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './forms/login.js';
import RegisterScreen from './forms/register.js';
import Swiper from 'react-native-deck-swiper';
import { Card } from './components/Cards.js';

function HomeScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=156f6cfa04dae615351cd9878f39b732&language=en-US&page=1')
      .then((response) => response.json())
      .then((json) => setData(parseMovies(json.results)))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <Swiper
            cards={data}
            renderCard={Card}
            infinite // keep looping cards infinitely
            verticalSwipe={false}
            backgroundColor="white"
            cardHorizontalMargin={0}
            stackSize={2} // number of cards shown in background
            />
      )}
    </SafeAreaView>    
  );
}

function parseMovies(movieArray) {
  var parsedMovies = [];
  var i;
  var imgurl= "https://image.tmdb.org/t/p/original";
  for (i = 0; i < movieArray.length; i++) {
    parsedMovies[i] =
    {
        pic: {uri: imgurl.concat(movieArray[i].poster_path)},
        title: movieArray[i].title,
        caption: movieArray[i].overview,
    }
  }
  return parsedMovies
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
          component={HomeScreen}
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