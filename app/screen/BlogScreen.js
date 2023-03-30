import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import { ScrollView } from "react-native-gesture-handler";

import { StackActions } from "@react-navigation/native";

const popAction = StackActions.pop(1);
const BlogScreen = ({ route, navigation }) => {
  const Blog = route.params.selectedBlog;

  return (
    <Screen style={styles.container}>
      <View style={styles.view_container}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(popAction)}
          style={styles.back_button}
        >
          <Image
            source={require("../../assets/arrow-left.png")}
            style={{ height: "100%", width: "100%", resizeMode: "contain" }}
          />
        </TouchableOpacity>
        <View style={styles.user_details}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "800",
              textTransform: "capitalize",
            }}
          >
            {" "}
            {Blog.name}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "300" }}>Post Author</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("AccountScreen")}
          style={styles.user_details_button}
        >
          <Image
            source={require("../../assets/man.png")}
            style={styles.back_btn_image}
          />
        </TouchableOpacity>
      </View>
      <ScrollView bounces style={{ flex: 1 }}>
        <Text style={styles.title}>{Blog.title}</Text>

        <View style={styles.image_container}>
          <Image source={{ uri: Blog.image }} style={styles.back_btn_image} />
        </View>

        <Text style={styles.content}>{Blog.content}</Text>
      </ScrollView>
    </Screen>
  );
};

export default BlogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  image_container: {
    height: 300,
    width: "100%",

    // top: "4%",
  },

  title: {
    fontSize: 30,

    margin: 20,
    fontWeight: "500",
    letterSpacing: 1,
  },
  content: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 40,
    padding: 20,
    letterSpacing: 2,
  },
  user_details: {
    left: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  view_container: {
    width: "100%",
    height: "7%",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginBottom: 0,
  },
  back_button: {
    height: 40,
    width: 40,
    borderRadius: 20,

    left: 10,
  },
  user_details_button: {
    height: 50,
    width: 50,
    right: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  back_btn_image: { height: "100%", width: "100%", resizeMode: "contain" },
});
