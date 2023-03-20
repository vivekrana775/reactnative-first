import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function ListItem({ title, image, subTitle }) {
  console.log("<<<<<<<<<<<<<<<<<<<< title >>>>>>>>>>>>>>>>>>", title);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.detailsContainer}>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
        <Text>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    flexDirection: "row",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  detailsContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ListItem;
