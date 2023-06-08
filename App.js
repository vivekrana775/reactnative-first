import React from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigator";

import { Provider } from "react-redux";
import { store, persistor } from "./app/store/store";
import { PersistGate } from "redux-persist/integration/react";

const App = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AuthNavigator></AuthNavigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
