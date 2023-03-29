import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./../app/screen/HomeScreen";
import PostScreen from "./../app/screen/PostScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AccountScreen from "./../app/screen/AccountScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          let colorr;
          if (route.name === "HomeScreen") {
            if (focused === true) {
              iconName = "home-account";
            } else {
              iconName = "home-edit";
            }
            focused ? (colorr = "black") : "white";
          }
          if (route.name === "PostScreen") {
            iconName = "pencil";
            focused ? (colorr = "white") : "black";
          }
          if (route.name === "AccountScreen") {
            iconName = "account";
            focused ? (colorr = "white") : "black";
          }
          color = "black";
          return (
            <MaterialCommunityIcons name={iconName} color={colorr} size={32} />
          );
        },
        tabBarStyle: styles.tabBarStyle,
        tabBarLabel: () => {
          return null;
        },
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="PostScreen" component={PostScreen} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    borderTopWidth: 0,
    bottom: 5,
    backgroundColor: "transparent",
    elevation: 0,
  },
});
