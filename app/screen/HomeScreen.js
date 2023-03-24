import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/background1.jpg")}
      style={styles.container}
    >
      <View style={styles.btn}>
        <Button title="LogOut"></Button>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

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
