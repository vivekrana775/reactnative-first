import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";

import { ImageBackground } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AppButton from "../components/AppButton";

import { SET_BLOGS } from "../store/action";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SET_EMPTY_BLOGS } from "./../store/action";

const { width, height } = Dimensions.get("window");
const ITEM_SIZE = width * 0.72;

const onBlogTouched = (item, navigation) => {
  navigation.navigate("BlogScreen", { selectedBlog: item });
};

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const scrollX = useRef(new Animated.Value(0)).current;
  const allBlogs = useSelector((state) => state.blogs);
  const username = useSelector((state) => state.username);
  let userBlogs = allBlogs[username];

  if (userBlogs == undefined) {
    const insert_user = {};
    insert_user[username] = [];
    console.log(userBlogs);

    dispatch(SET_EMPTY_BLOGS(insert_user));
    return;
  }

  // console.log(allBlogs);

  const SPACER_ITEM_SIZE = 50;
  // let userBlogs = allBlogs[username];
  if (Object.keys(allBlogs).length == 0 || userBlogs.length == 0) {
    return (
      <ImageBackground
        source={require("../../assets/background1.jpg")}
        style={styles.container}
      >
        <AppButton title="Please Write Some BLogs" style={styles.btn_style} />
      </ImageBackground>
    );
  }

  userBlogs = [{ id: "left-spacer" }, ...userBlogs, { id: "right_spacer" }];
  const onDeleteBlog = (item) => {
    userBlogs = userBlogs.slice(1, userBlogs.length - 1);

    allBlogs[username] = userBlogs.filter((x) => x["id"] != item["id"]);
    dispatch(SET_BLOGS(allBlogs));
  };
  const onEditBlog = (item) => {
    // console.log(allBlogs);
  };

  return (
    <View style={styles.container}>
      {/* <Backdrop userBlogs={userBlogs} scrollX={scrollX} /> */}
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={userBlogs.reverse()}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={{ alignItems: "center" }}
        snapToInterval={ITEM_SIZE}
        decelerationRate={Platform.OS === "ios" ? 0 : 0.9}
        renderToHardwareTextureAndroid
        snapToAlignment="start"
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          if (!item.image && !item.title) {
            return <View style={{ width: SPACER_ITEM_SIZE }} />;
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
            extrapolate: "clamp",
          });
          return (
            <TouchableOpacity
              onPress={() => onBlogTouched(item, navigation)}
              style={{
                width: ITEM_SIZE,
              }}
            >
              <Animated.View
                style={{
                  marginHorizontal: 10,
                  // padding: 5,
                  alignItems: "center",
                  transform: [{ translateY }],
                  // backgroundColor: "white",
                  borderRadius: 34,
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.posterImage}
                />
                <Text
                  style={{ fontSize: 24, fontStyle: "italic" }}
                  numberOfLines={1}
                >
                  {item.title}
                </Text>
                <Text
                  style={{ fontSize: 15, margin: 10, padding: 2 }}
                  numberOfLines={2}
                >
                  {item.content}
                </Text>
                <View style={styles.delete_edit_container}>
                  <TouchableOpacity
                    style={styles.delete_button}
                    onPress={() => onDeleteBlog(item)}
                  >
                    <MaterialCommunityIcons name="delete" size={32} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => onEditBlog(item)}
                    style={styles.edit_button}
                  >
                    <MaterialCommunityIcons name="pencil" size={32} />
                  </TouchableOpacity>
                </View>
              </Animated.View>
            </TouchableOpacity>
          );
        }}
      ></Animated.FlatList>
    </View>
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
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  posterImage: {
    width: "100%",
    height: ITEM_SIZE * 1.4,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 20,
  },
  delete_button: {
    flexDirection: "row",
    height: 50,
    width: 50,

    alignContent: "flex-start",
    margin: 10,
    marginBottom: 0,
    left: 25,
  },
  edit_button: {
    flexDirection: "row",
    height: 50,
    width: 50,

    alignContent: "flex-end",
    margin: 10,
    marginBottom: 0,
    right: 25,
  },
  delete_edit_container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
