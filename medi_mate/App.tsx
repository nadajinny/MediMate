// React Native application scaffold based on the provided presentation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import FullbodyScreen from './screens/FullbodyScreen';
import DetailScreen from './screens/DetailScreen';
import PainLevelScreen from './screens/PainLevelScreen';

import 'react-native-gesture-handler';

// import MainTabs from './screens/MainTabs';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name = "Splash" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Fullbody" component={FullbodyScreen}/>
        <Stack.Screen name="Detail" component={DetailScreen}/> 
        <Stack.Screen name="PainLevel" component={PainLevelScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
