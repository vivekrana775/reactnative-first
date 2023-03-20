import React, { useEffect, useState } from "react";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import Card from "./app/components/Card";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import ListingDetailsScreen from "./app/screen/ListingDetailsScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import MessageScreen from "./app/screen/MessageScreen";
import AppTextInput from "./app/components/AppTextInput";
import LoginScreen from "./app/screen/LoginScreen";
import RegisterScreen from "./app/screen/RegisterScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AsyncStorage } from "@react-native-async-storage/async-storage";

function App(props) {
  const Stack = createNativeStackNavigator();

  // const findUser = async () => {
  //   const result = await AsyncStorage.getItem("user");
  //   console.log(result);
  // };

  // useEffect(() => {
  //   findUser();
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
