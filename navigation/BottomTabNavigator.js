import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./../app/screen/HomeScreen";
import PostScreen from "./../app/screen/PostScreen";
import ViewImageScreen from "./../app/screen/ViewImageScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="PostScreen" component={PostScreen} />
      <Tab.Screen name="ViewImageScreen" component={ViewImageScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
