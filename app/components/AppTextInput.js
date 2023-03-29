import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";

const AppTextInput = ({ icon, title_style, details_style, ...otherProps }) => {
  return (
    <View style={[styles.container, title_style, details_style]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={"#46454a"}
          style={styles.icon}
        />
      )}

      <TextInput style={styles.textInput} {...otherProps}></TextInput>
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    // flex: 1,
    flexDirection: "row",
    width: "90%",
    padding: 15,
    marginTop: 200,
    borderRadius: 20,
    marginBottom: -190,
    alignItems: "center",
    left: 20,
  },
  textInput: {
    fontSize: 18,
    color: "#0c0c0c",
  },
  icon: {
    marginRight: 40,
  },
});
