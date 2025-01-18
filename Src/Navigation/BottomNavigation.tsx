import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import { images } from '../utils/Images';
import colors from '../utils/Colors';
import NotificationScreen from '../Screen/NotificationScreen';
import ArchiveListScreen from '../Screen/ArchiveListScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: () => null,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.Home}
              style={[
                styles.icon,
                { tintColor: focused ?  colors.CommanBlue: colors.grayBottomTab},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.Notification}
              style={[
                styles.icon,
                { tintColor: focused ? colors.CommanBlue : colors.grayBottomTab },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ArchiveListScreen"
        component={ArchiveListScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.Receipt}
              style={[
                styles.icon,
                { tintColor: focused ? colors.CommanBlue : colors.grayBottomTab },
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.Profile}
              style={[
                styles.icon,
                { tintColor: focused ? colors.CommanBlue : colors.grayBottomTab },
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  icon: {
    width: 24, // Set your preferred icon size
    height: 24,
    resizeMode: 'contain',
  },
});
