import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import LoginScreen from "../app/screen/LoginScreen";
import WelcomeScreen from "../app/screen/WelcomeScreen";
import RegisterScreen from "../app/screen/RegisterScreen";
import BottomTabNavigator from "./BottomTabNavigator";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "react-redux";
import ViewImageScreen from "./../app/screen/ViewImageScreen";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { isAuthorized } from "./../app/store/action";
import BlogScreen from "./../app/screen/BlogScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const authorized = useSelector((state) => state.authorized);
  // const authorized = false;
  const dispatch = useDispatch();

  // console.log(authorized);

  const getAuthorized = async () => {
    try {
      let result = await AsyncStorage.getItem("isAuthorized");
      result = JSON.parse(result);

      dispatch(isAuthorized(result["isAuthorized"]));
    } catch (error) {
      alert(error);
    }
  };
  getAuthorized();

  useEffect(() => {}, [authorized]);

  if (authorized === true) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
        <Stack.Screen name="ViewImageScreen" component={ViewImageScreen} />
        <Stack.Screen name="BlogScreen" component={BlogScreen} />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
