import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { SET_BLOGS, SET_IMAGE_URI } from "../store/action";

import { StackActions } from "@react-navigation/native";
import MainComment from "../../MainComment";

const popAction = StackActions.pop(1);

const BlogScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const allBlogs = useSelector((state) => state.blogs);
  const Blog = route.params.selectedBlog;
  // let userBlogs = route.params.userBlogs;
  const username = useSelector((state) => state.username);
  let userBlogs = allBlogs[username];
  const user_whose_blog_pressed = Blog.email;

  // for all likes we have to go in that user blogs and filter the blog which is
  // selected from all of them and go into likes and give length of that object .

  // console.log(Blog.likes);

  let index = route.params.index;

  const onDeleteBlog = (item, allBlogs) => {
    allBlogs[username] = userBlogs.filter((x) => x["id"] != item["id"]);

    dispatch(SET_BLOGS(allBlogs));
    navigation.dispatch(popAction);
  };

  const handleLike = (Blog, index) => {
    if (Blog["likes"][username] == undefined) {
      Blog["likes"][username] = 1;
    } else {
      delete Blog["likes"][username];
    }

    allBlogs[user_whose_blog_pressed][index] = Blog;
    dispatch(SET_BLOGS(allBlogs));
  };

  const onEditBlog = (item, index, navigation) => {
    // navigation.navigate("EditScreen", { item: item, index: index });
    dispatch(SET_IMAGE_URI(item.image));

    if (username != user_whose_blog_pressed) {
      alert("You Don't have Access");
    } else {
      navigation.navigate("PostScreen", {
        item: item,
        is_edit: true,
        index: index,
      });
    }
  };
  // Stoping someone else to go to user profile

  const handleNavigationToAccountScreen = () => {
    if (username != user_whose_blog_pressed) {
      alert("Something is Fishy");
    } else {
      navigation.navigate("AccountScreen");
    }
  };

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
            {Blog.name}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "300" }}>Post Author</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleNavigationToAccountScreen()}
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
        <View style={styles.delete_edit_container}>
          <TouchableOpacity
            style={styles.delete_button}
            onPress={() => onDeleteBlog(Blog, allBlogs)}
          >
            <Image
              source={require("../../assets/trash.png")}
              style={{ height: "100%", width: "100%" }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleLike(Blog, index - 1)}
            style={styles.edit_button}
          >
            {Blog["likes"][username] === undefined ? (
              <Image
                source={require("../../assets/heart.png")}
                style={{ height: "100%", width: "100%" }}
              />
            ) : (
              <Image
                source={require("../../assets/heart-red.png")}
                style={{ height: "110%", width: "110%" }}
              />
            )}

            <Text style={styles.likes_number}>
              {Object.keys(Blog.likes).length}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onEditBlog(Blog, index - 1, navigation)}
            style={styles.edit_button}
          >
            <Image
              source={require("../../assets/edit.png")}
              style={{ height: "100%", width: "100%" }}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.content}>{Blog.content}</Text>

        <Text style={styles.comments_text}>Comments</Text>
        <MainComment />
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
    marginBottom: 10,
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
  delete_button: {
    flexDirection: "row",
    height: 40,
    width: 40,
    alignContent: "flex-start",
    margin: 10,
    marginBottom: 0,
    // left: 20,
  },
  edit_button: {
    flexDirection: "row",
    height: 40,
    width: 40,

    alignContent: "flex-end",
    margin: 10,
    marginBottom: 0,
    // right: 20,
  },
  delete_edit_container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 0,
  },
  comments_text: {
    fontSize: 28,
    margin: 20,
    fontWeight: "500",
    letterSpacing: 1,
  },
  likes_number: {
    fontSize: 16,
    fontWeight: "600",
    top: 7,
    left: 5,
  },
});
