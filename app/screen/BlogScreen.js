import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Screen from "../components/Screen";

const BlogScreen = ({ route }) => {
  const Blog = route.params.selectedBlog;
  return (
    <Screen style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>{Blog.title}</Text>
        </View>
        <View style={styles.image_container}>
          <Image
            source={{ uri: Blog.image }}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
        <View style={styles.content_container}>
          <Text style={styles.content}>{Blog.content}</Text>
        </View>
      </View>
    </Screen>
  );
};

export default BlogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-around",
  },
  title_container: {
    height: "20%",
    width: "100%",
    backgroundColor: "gold",
    padding: 20,
  },
  image_container: {
    height: "40%",
    width: "100%",

    backgroundColor: "yellow",
    // bottom: "9%",
  },
  content_container: {
    height: "20%",
    width: "100%",

    backgroundColor: "brown",
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
  },
});
