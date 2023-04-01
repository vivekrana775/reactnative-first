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

import { useSelector, useDispatch } from "react-redux";

import { SET_EMPTY_BLOGS } from "./../store/action";

const { width, height } = Dimensions.get("window");
const ITEM_SIZE = width * 0.72;

const onBlogTouched = (item, navigation, userBlogs, index) => {
  navigation.navigate("BlogScreen", {
    selectedBlog: item,
    userBlogs: userBlogs,
    index: index,
  });
};

const HomeScreenComponent = ({ navigation, userBlogs }) => {
  const dispatch = useDispatch();
  const scrollX = useRef(new Animated.Value(0)).current;
  const allBlogs = useSelector((state) => state.blogs);
  const username = useSelector((state) => state.username);
  // let userBlogs = allBlogs[username];

  if (userBlogs == undefined) {
    const insert_user = {};
    insert_user[username] = [];

    dispatch(SET_EMPTY_BLOGS(insert_user));
    return;
  }

  // console.log(allBlogs);

  const SPACER_ITEM_SIZE = 50;
  // let userBlogs = allBlogs[username];

  userBlogs = [{ id: "left-spacer" }, ...userBlogs, { id: "right_spacer" }];

  return (
    <View style={styles.container}>
      {/* <Backdrop userBlogs={userBlogs} scrollX={scrollX} /> */}
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={userBlogs}
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
          { useNativeDriver: true }
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
              onPress={() => onBlogTouched(item, navigation, userBlogs)}
              style={{
                width: ITEM_SIZE,

                bottom: 40,
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
              </Animated.View>
            </TouchableOpacity>
          );
        }}
      ></Animated.FlatList>
    </View>
  );
};

export default HomeScreenComponent;

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
    height: ITEM_SIZE * 1.3,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 20,
  },
});
