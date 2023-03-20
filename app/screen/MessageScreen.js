import React from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import ListItem from "../components/ListItem";

const messages = [
  {
    id: "1",
    title: "T1",
    description: "D1",
    image: require("../../assets/mosh.jpg"),
  },
  {
    id: "2",
    title: "T2",
    description: "D2",
    image: require("../../assets/mosh.jpg"),
  },
];
function MessageScreen(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => {
          return (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
            />
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 30,
    left: 80,
  },
});
export default MessageScreen;
