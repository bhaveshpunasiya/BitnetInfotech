import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screen/LoginScreen';
import ForgotPassword from '../Screen/ForgotPassword';
import CreateAccount from '../Screen/CreateAccount';
import HomeScreen from '../Screen/HomeScreen';
import AboutYourSelfScreen from '../Screen/AboutYourSelfScreen';
import BottomNavigation from './BottomNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CommanActivityIndicator from '../Component/CommanActivityIndicator';
import ListScreen from '../Screen/ListScreen';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator<any>();

const MainNavigation = () => {
  // const [login, setLogin] = useState<string | null>(null); 
  const login = useSelector((state:any)=>state.auth.isLoggedIn)

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={login  ? 'BottomNavigation':'LoginScreen' }
        // initialRouteName={'BottomNavigation' }
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="AboutYourSelfScreen" component={AboutYourSelfScreen} />
        <Stack.Screen name='ListScreen' component={ListScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
