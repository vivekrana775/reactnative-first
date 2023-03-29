import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
import { useDispatch } from "react-redux";
import { isAuthorized } from "../store/action";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AccountScreen = () => {
  const dispatch = useDispatch();

  const storeIsAuthorized = async () => {
    try {
      await AsyncStorage.setItem(
        "isAuthorized",
        JSON.stringify({ isAuthorized: false })
      );
      dispatch(isAuthorized(false));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/background1.jpg")}
      style={styles.container}
    >
      <View style={styles.btn}>
        <Button title="LogOut" onPress={() => storeIsAuthorized()}></Button>
      </View>
    </ImageBackground>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    height: "40%",
    top: 100,
    alignItems: "center",
  },
});
