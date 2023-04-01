import {
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SET_BLOGS, SET_IMAGE_URI } from "../store/action";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useSelector, useDispatch } from "react-redux";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import AppTextInput from "../components/AppTextInput";
import AppButton from "./../components/AppButton";

const PostScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  const name = useSelector((state) => state.name);
  const imageUri = useSelector((state) => state.imageUri);

  //states for blog - image, title and blog

  const [blogTitle, setBlogTitle] = useState("");
  const [blogText, setBlogText] = useState("");
  // const [imageUri, setImageUri] = useState("");

  // function for pressing the publish button

  const allBlogs = useSelector((state) => state.blogs);

  let is_edit = false;
  let item = {};
  let index = undefined;

  if (route.params != undefined) {
    // This is when we are coming from edit button
    is_edit = route.params.is_edit;

    item = route.params.item;
    index = route.params.index;
  }

  if (allBlogs[username] == undefined) {
    // Is that user is not in the blogs object
    allBlogs[username] = [];
  }

  useEffect(() => {
    setBlogTitle(item.title);
    setBlogText(item.content); // setting the content on publish page when coming from edit button when is_edit changes
  }, [is_edit]);

  // This function is called when we press the Publish button and it store the
  // blog in allBlogs using useState and persist helps and also redux is helping here

  const onPublish = (username) => {
    if (is_edit === true) {
      // This is_edit is working when is_edit is true when we click on edit button the is edit will be true
      item["image"] = imageUri; // changing values in object and replacing it with index
      item["content"] = blogText;
      item["title"] = blogTitle;
      allBlogs[username][index] = item;
    } else {
      allBlogs[username].unshift({
        name: name,
        title: blogTitle, // Pushing from front so that we get newest blog on front
        content: blogText,
        image: imageUri,
        id: Math.random().toString(),
        likes: {},
        comments: {},
        email: username,
      });
    }

    dispatch(SET_BLOGS(allBlogs));
    navigation.navigate("HomeScreen");
    route.params = undefined; // because when we publish the params will stay the same so we have to convert it into undefined
    setBlogTitle("");
    setBlogText("");
  };

  //for requesting permissions

  const requestPermission = async () => {
    // const result = await Permissions.askAsync(Permissions.CAMERA,Permissions.CONTACTS);
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!granted) {
      alert("You need to enable Permission");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  // selecting image using IMage picker which runs async and

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        dispatch(SET_IMAGE_URI(result.uri));
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <KeyboardAwareScrollView>
      <ImageBackground
        style={styles.container}
        source={require("../../assets/postScreen1.jpg")}
      >
        <AppButton
          onPress={() => onPublish(username)}
          title={"PUBLISH"}
          style={styles.publish_btn}
        />
        <TouchableOpacity
          style={styles.image_btn}
          title="SelectImage"
          onPress={() => selectImage()}
        >
          <MaterialCommunityIcons name="image-edit" size={35} />
          <Text style={{ color: "black" }}>Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_container}
          onPress={() => navigation.navigate("ViewImageScreen")}
        >
          <Image source={{ uri: imageUri }} style={styles.img} />
        </TouchableOpacity>

        <AppTextInput
          icon={"pencil"}
          placeholder={"Title for Your Blog                "}
          numberOfLines={2}
          title_style={styles.title}
          onChangeText={(text) => setBlogTitle(text)}
          autocorrect={true}
          value={blogTitle}
          style={{
            width: "90%",
            fontSize: 18,
            color: "#0c0c0c",

            left: -30,
          }}
        />

        <AppTextInput
          icon={"pencil"}
          placeholder={"Write Your Blog                 "}
          numberOfLines={7}
          multiline
          details_style={styles.details_title}
          onChangeText={(text) => setBlogText(text)}
          autocorrect={true}
          value={blogText}
          style={{
            height: "95%",
            width: "90%",
            fontSize: 18,
            color: "#0c0c0c",

            left: -30,
          }}
        />
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  image_btn: {
    position: "absolute",
    height: 50,
    width: 50,
    // backgroundColor: "black",
    top: 200,
    left: 50,
  },
  publish_btn: {
    width: 150,
    height: 40,
    // position: "absolute",
    left: "28%",
    top: "85%",
    backgroundColor: "#abdbc7",
  },
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height + 40,
  },
  img: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  image_container: {
    height: 150,
    width: 150,
    // borderRadius: 75,
    position: "absolute",
    top: 170,
    right: 30,
  },
  title: {
    position: "absolute",
    top: 150,
    height: "10%",
    width: "85%",
    left: 30,
  },
  details_title: {
    position: "absolute",
    top: 240,
    height: "23%",
    width: "85%",
    left: 30,
  },
});
