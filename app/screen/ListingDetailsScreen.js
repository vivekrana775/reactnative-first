import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import ListItem from "../components/ListItem";
function ListingDetailsScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/jacket.jpg")}
      ></Image>
      <View style={styles.detailsContainer}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Red jacket for Sale
        </Text>
        <Text>100$</Text>
        <View style={styles.ListItemContainer}>
          <ListItem
            image={require("../../assets/mosh.jpg")}
            title={"Mosh Hamedani"}
            subTitle={"5 Listings"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: -1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginTop: 20,
  },
  ListItemContainer: {
    padding: 20,
  },
});

export default ListingDetailsScreen;
