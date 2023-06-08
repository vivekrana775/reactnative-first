import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./../app/screen/HomeScreen";
import PostScreen from "./../app/screen/PostScreen";
import AccountScreen from "./../app/screen/AccountScreen";
import PublicBlogsScreen from "../app/screen/PublicBlogsScreen";

import { SET_IMAGE_URI } from "../app/store/action";

import { useDispatch } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const dispatch = useDispatch();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          let colorr;

          if (route.name === "HomeScreen") {
            iconName = "home-account";
            focused ? (colorr = "blue") : "#d6d2d2";
          }
          if (route.name === "PublicBlogsScreen") {
            iconName = "earth";
            focused ? (colorr = "blue") : "#d6d2d2";
          }

          if (route.name === "PostScreen") {
            iconName = "pencil";
            focused ? (colorr = "blue") : "#d6d2d2";
          }
          if (route.name === "AccountScreen") {
            iconName = "account";
            focused ? (colorr = "blue") : "#d6d2d2";
          }

          return (
            <MaterialCommunityIcons name={iconName} color={colorr} size={32} />
          );
        },
        tabBarStyle: styles.tabBarStyle,
        tabBarLabel: () => {
          return null;
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "blue",
      })}
    >
      <Tab.Screen name="PublicBlogsScreen" component={PublicBlogsScreen} />
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen
        name="PostScreen"
        component={PostScreen}
        listeners={{
          tabPress: (e) => {
            e.preventDefault;
            dispatch(SET_IMAGE_URI(""));
          },
        }}
      />
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
