import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AppButton from "../components/AppButton";

import HomeScreenComponent from "./HomeScreenComponent";
import Screen from "../components/Screen";

const HomeScreen = ({ navigation }) => {
  const allBlogs = useSelector((state) => state.blogs);
  const username = useSelector((state) => state.username);

  let userBlogs = [allBlogs[username]];

  const handleLoading = () => {
    navigation.navigate("PostScreen");
  };

  if (userBlogs == undefined || userBlogs[0]?.length == 0) {
    return (
      <>
        <AppButton
          onPress={() => handleLoading()}
          title="Write Some Blogs "
          style={styles.btn_style}
        />
      </>
    );
  }

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
          <Text style={{ fontSize: 20, fontWeight: "700", top: 10 }}>
            Your Blogs
          </Text>
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
      {userBlogs.map((item) => (
        <HomeScreenComponent
          key={item}
          userBlogs={item}
          navigation={navigation}
        />
      ))}
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn_style: {
    flex: 1,
    position: "absolute",
    top: "50%",
    left: "6%",
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
