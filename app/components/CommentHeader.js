import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const CommentHeader = () => {
  const [inputComment, setInputComment] = useState("");

  handleAddComment = () => {
    // handleInsertNode(comments.id, inputComment);
    setInputComment("");
  };
  return (
    <View style={{ paddingTop: 50 }}>
      <TextInput
        onChangeText={(e) => setInputComment(e)}
        value={inputComment}
        placeholder="type"
      ></TextInput>
      <TouchableOpacity
        style={{ backgroundColor: "green" }}
        title={"Submit"}
        onPress={() => handleAddComment()}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommentHeader;

const styles = StyleSheet.create({});
