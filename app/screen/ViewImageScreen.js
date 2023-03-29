import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { SET_IMAGE_URI } from "../store/action";

function ViewImageScreen({ navigation }) {
  const imageUri = useSelector((state) => state.imageUri);

  const dispatch = useDispatch();

  const deleteImage = () => {
    dispatch(SET_IMAGE_URI(null));
    navigation.navigate("PostScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={30} color="white" />
        <TouchableOpacity
          style={styles.deleteIcon}
          onPress={() => deleteImage()}
        >
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={35}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <Image style={styles.imageContainer} source={{ uri: imageUri }} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: "black",
    flex: 1,
    resizeMode: "contain",
  },
  closeIcon: {
    positon: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    positon: "absolute",
    top: -35,
    left: 270,
  },
});

export default ViewImageScreen;
