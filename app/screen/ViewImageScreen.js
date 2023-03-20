import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { colors } from "../../app/config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={30} color="white" />
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={35}
            color="white"
          />
        </View>
      </View>
      <Image
        style={styles.imageContainer}
        source={require("../../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: "black",
    flex: 1,
    resizeMode: "contain",
  },
  closeIcon: {
    positon: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    positon: "absolute",
    top: -35,
    right: -300,
  },
});

export default ViewImageScreen;
