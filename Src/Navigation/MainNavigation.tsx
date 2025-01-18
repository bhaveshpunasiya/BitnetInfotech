import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screen/LoginScreen';
import ForgotPassword from '../Screen/ForgotPassword';
import CreateAccount from '../Screen/CreateAccount';
import HomeScreen from '../Screen/HomeScreen';
import AboutYourSelfScreen from '../Screen/AboutYourSelfScreen';

const Stack = createStackNavigator<any>();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="LoginScreen"
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="AboutYourSelfScreen" component={AboutYourSelfScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
