import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuthorized } from "../store/action";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Screen from "../components/Screen";

const AccountScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  const name = useSelector((state) => state.name);

  const IsAuthorized = async () => {
    try {
      await AsyncStorage.setItem(
        "isAuthorized",
        JSON.stringify({ isAuthorized: false })
      );
      dispatch(isAuthorized(false));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Screen style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.view_container}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PublicBlogsScreen")}
            style={styles.back_button}
          >
            <Image
              source={require("../../assets/arrow-left.png")}
              style={{ height: "100%", width: "100%", resizeMode: "contain" }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "700", top: 10 }}>
            My Profile
          </Text>

          <TouchableOpacity style={styles.user_details_button}>
            <Image
              source={require("../../assets/dots.png")}
              style={styles.back_btn_image}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.user_details}>
          <Image
            source={require("../../assets/man.png")}
            style={styles.man_image}
          />
          <View>
            <Text style={styles.name_text}>{name}</Text>
            <Text style={styles.username_text}>{username}</Text>
          </View>
        </View>

        <View style={styles.mid_section}>
          <TouchableOpacity
            style={styles.yourBlogs}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Image
              source={require("../../assets/blogging1.png")}
              style={styles.yourBlog_image}
            />
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Your Blogs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.yourBlogs}
            onPress={() => navigation.navigate("PublicBlogsScreen")}
          >
            <Image
              source={require("../../assets/feedback.png")}
              style={styles.yourBlog_image}
            />
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              Public Blogs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.yourBlogs}
            onPress={() =>
              alert("There are many things to fear on the road of success")
            }
          >
            <Image
              source={require("../../assets/privacy.png")}
              style={styles.yourBlog_image}
            />
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Privacy</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity style={styles.btn} onPress={() => IsAuthorized()}>
            <Text style={styles.logout_text}>LogOut</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-evenly",
    // alignItems: "center",
  },
  btn: {
    height: 50,
    width: 130,
    borderRadius: 40,
    backgroundColor: "#4ecdc4",
    alignItems: "center",
    justifyContent: "center",
  },
  logout_text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  user_details: {
    height: 200,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
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

  man_image: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
  name_text: {
    fontSize: 26,
    fontWeight: "600",
    letterSpacing: 1,
  },
  username_text: {
    fontSize: 20,
    fontWeight: "300",
    letterSpacing: 1,
  },
  mid_section: {
    height: "45%",
    width: "100%",
    // backgroundColor: "gold",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    left: 10,
    marginBottom: 10,
  },

  yourBlogs: {
    //all 3 data in same styles
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    left: 20,
  },
  yourBlog_image: {
    height: 75,
    width: 100,
    resizeMode: "contain",
    right: 10,
  },
});
