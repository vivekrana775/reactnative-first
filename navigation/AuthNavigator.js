import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import LoginScreen from "../app/screen/LoginScreen";
import WelcomeScreen from "../app/screen/WelcomeScreen";
import RegisterScreen from "../app/screen/RegisterScreen";
import HomeScreen from "../app/screen/HomeScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import ListingDetailsScreen from "../app/screen/ListingDetailsScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const authorized = useSelector((state) => state.authorized);

  if (authorized === true)
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={BottomTabNavigator} />
      </Stack.Navigator>
    );
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen
        name="HomeScreen"
        component={BottomTabNavigator}
      ></Stack.Screen>
      <Stack.Screen
        name="ListingDetailsScreen"
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
