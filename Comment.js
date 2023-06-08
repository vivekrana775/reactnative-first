import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Comments = ({ comments }) => {
  const [inputComment, setInputComment] = useState("");

  handleAddComment = () => {
    // handleInsertNode(comments.id, inputComment);
    setInputComment("");
  };

  return (
    <View style={{ padding: 10 }}>
      <Text>{comments.body}</Text>
      <TouchableOpacity>
        <Text>Reply</Text>
      </TouchableOpacity>
      <View style={{ paddingLeft: 25 }}>
        {comments?.items?.map((comment) => (
          <Comments key={comment.id} comments={comment} />
        ))}
      </View>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({});
