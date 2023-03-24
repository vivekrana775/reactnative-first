import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import Card from "./app/components/Card";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import ListingDetailsScreen from "./app/screen/ListingDetailsScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import MessageScreen from "./app/screen/MessageScreen";
import AppTextInput from "./app/components/AppTextInput";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./navigation/AuthNavigator";

import { Provider } from "react-redux";
import { store } from "./app/store/store";

function App(props) {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNavigator></AuthNavigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
