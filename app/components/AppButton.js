import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

function AppButton({ title, onPress, style }) {
  return (
    <TouchableOpacity
      style={[
        title === "LOGIN" ? styles.loginContainer : styles.registerContainer,
        style,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    height: "6%",
    borderRadius: 25,
    position: "absolute",
    backgroundColor: "#fc5c65",
    top: 650,

    padding: 5,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  registerContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    height: "6%",
    borderRadius: 25,
    position: "absolute",
    backgroundColor: "#4ecdc4",
    top: 700,
    padding: 5,
    margin: 5,
  },
});

export default AppButton;
