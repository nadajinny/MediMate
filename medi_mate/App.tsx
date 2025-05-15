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
import SettingScreen from './screens/SettingScreen'; 
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
        <Drawer.Navigator  initialRouteName="Home"  screenOptions={{ headerShown: false }}>
        {/* ✅ 홈화면은 드로어 메뉴에 안 보이도록 숨김 */}
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ drawerItemStyle: { display: 'none' } }}
        />
        {/* ✅ 설정만 드로어에 노출 */}
        <Drawer.Screen
          name="설정"
          component={SettingScreen}
        />
      </Drawer.Navigator>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
