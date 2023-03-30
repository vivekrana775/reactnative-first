// import {
//   Button,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ImageBackground,
//   Text,
//   Dimensions,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { SET_BLOGS, SET_IMAGE_URI } from "../store/action";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// import { useSelector, useDispatch } from "react-redux";

// import * as ImagePicker from "expo-image-picker";
// import AppTextInput from "../components/AppTextInput";
// import AppButton from "./../components/AppButton";
// import { StackActions } from "@react-navigation/native";

// const popAction = StackActions.pop(1);

// const EditScreen = ({ route, navigation }) => {
//   const dispatch = useDispatch();
//   const username = useSelector((state) => state.username);
//   const imageUri = useSelector((state) => state.imageUri);
//   const name = useSelector((state) => state.name);
//   const [blogTitle, setBlogTitle] = useState("");
//   const [blogText, setBlogText] = useState("");
//   const allBlogs = useSelector((state) => state.blogs);

//   const item = route.params.item;
//   const index = route.params.index;

//   const imageUri = item.image;

// function for pressing the publish button

// This function is called when we press the Publish button and it store the blog in allBlogs using useState and persist helps and also redux is helping here

//   const onPublish = () => {
//     item["image"] = imageUri;
//     item["content"] = blogText;
//     item["title"] = blogTitle;
//     allBlogs[username][index] = item;
//     dispatch(SET_BLOGS(allBlogs));
//     // dispatch(SET_IMAGE_URI(""));

//     navigation.dispatch(popAction);
//     setBlogTitle("");
//     setBlogText("");
//   };

// selecting image using IMage picker which runs async and

//   const selectImage = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync();
//       if (!result.canceled) {
//         dispatch(SET_IMAGE_URI(result.uri));
//       }
//     } catch (error) {
//       alert(error);
//     }
//   };

//   return (
//     <KeyboardAwareScrollView>
//       <ImageBackground
//         style={styles.container}
//         source={require("../../assets/postScreen1.jpg")}
//       >
//         <AppButton
//           onPress={() => onPublish()}
//           title={"PUBLISH"}
//           style={styles.publish_btn}
//         />
//         <TouchableOpacity
//           style={styles.image_btn}
//           title="SelectImage"
//           onPress={() => selectImage()}
//         >
//           <MaterialCommunityIcons name="image-edit" size={35} />
//           <Text style={{ color: "black" }}>Image</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.image_container}
//           onPress={() => navigation.navigate("ViewImageScreen")}
//         >
//           {imageUri == "" ? (
//             <Image style={styles.img} />
//           ) : (
//             <Image source={{ uri: imageUri }} style={styles.img} />
//           )}
//         </TouchableOpacity>

//         <AppTextInput
//           icon={"pencil"}
//           placeholder={"Title for Your Blog                "}
//           numberOfLines={2}
//           // maxLength={28}
//           title_style={styles.title}
//           onChangeText={(text) => setBlogTitle(text)}
//           autocorrect={true}
//           value={blogTitle}
//           style={{
//             width: "90%",
//             fontSize: 18,
//             color: "#0c0c0c",

//             left: -30,
//           }}
//         />

//         <AppTextInput
//           icon={"pencil"}
//           placeholder={"Write Your Blog                 "}
//           numberOfLines={7}
//           multiline
//           details_style={styles.details_title}
//           onChangeText={(text) => setBlogText(text)}
//           autocorrect={true}
//           value={blogText}
//           style={{
//             height: "95%",
//             width: "90%",
//             fontSize: 18,
//             color: "#0c0c0c",

//             left: -30,
//           }}
//         />
//       </ImageBackground>
//     </KeyboardAwareScrollView>
//   );
// };

// export default EditScreen;

// const styles = StyleSheet.create({
//   image_btn: {
//     position: "absolute",
//     height: 50,
//     width: 50,
//     // backgroundColor: "black",
//     top: 200,
//     left: 50,
//   },
//   publish_btn: {
//     width: 150,
//     height: 40,
//     // position: "absolute",
//     left: "28%",
//     top: "85%",
//     backgroundColor: "#abdbc7",
//   },
//   container: {
//     flex: 1,
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height + 40,
//   },
//   img: {
//     height: "100%",
//     width: "100%",
//     borderRadius: 10,
//   },
//   image_container: {
//     height: 150,
//     width: 150,
//     // borderRadius: 75,
//     position: "absolute",
//     top: 170,
//     right: 30,
//   },
//   title: {
//     position: "absolute",
//     top: 150,
//     height: "10%",
//     width: "85%",
//     left: 30,
//   },
//   details_title: {
//     position: "absolute",
//     top: 240,
//     height: "23%",
//     width: "85%",
//     left: 30,
//   },
// });
