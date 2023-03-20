import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.cardImage}></Image>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 15,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontWeight: "bold",
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: "30%",
    width: "90%",
    marginTop: 70,
    marginLeft: 20,
    borderRadius: 20,
    marginBottom: -50,
  },
  cardImage: {
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: "100%",
    height: "80%",
    borderRadius: 20,
    // flex: 1,
    // top: -27,
  },
});
export default Card;
