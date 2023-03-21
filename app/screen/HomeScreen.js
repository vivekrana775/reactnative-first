import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { ImageBackground } from "react-native";

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/background1.jpg")}
      style={styles.container}
    ></ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
