import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import HomeScreenComponent from "./HomeScreenComponent";
import Screen from "../components/Screen";
import { ScrollView } from "react-native-gesture-handler";

const PublicBlogsScreen = ({ navigation }) => {
  const allBlogs = useSelector((state) => state.blogs);
  const keys = Object.keys(allBlogs);

  return (
    <Screen>
      <View style={styles.view_container}>
        <TouchableOpacity
          //   onPress={() => navigation.dispatch(popAction)}
          style={styles.back_button}
        >
          <Image
            source={require("../../assets/dots.png")}
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
          ></Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Public Blogs</Text>
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
      <ScrollView bounces>
        {keys.map((item) => (
          <HomeScreenComponent
            userBlogs={allBlogs[item]}
            navigation={navigation}
            key={item}
          />
        ))}
      </ScrollView>
      <View
        style={{ width: "100%", height: 50, backgroundColor: "transparent" }}
      ></View>
    </Screen>
  );
};

export default PublicBlogsScreen;

const styles = StyleSheet.create({
  view_container: {
    width: "100%",
    height: "6%",
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
