import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./navigation/AuthNavigator";

import { Provider } from "react-redux";
import { store, persistor } from "./app/store/store";
import { PersistGate } from "redux-persist/integration/react";

function App(props) {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AuthNavigator></AuthNavigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
