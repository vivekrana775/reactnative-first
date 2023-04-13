import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import Comments from "./Comment";
import CommentHeader from "./app/components/CommentHeader";

// const comments = {
//   id: "1",
//   items: [
//     {
//       id: "dsohfoisd",
//       body: "first comment",
//       items: [{ id: "dfkpd", body: "child of first comment", items: [] }],
//     },
//     {
//       id: "sdss",
//       body: "dffsd",
//       items: [],
//     },
//   ],
// };

const MainComment = () => {
  const comments = useSelector((state) => state.comments);
  const [commentsData, setCommentsData] = useState(comments);
  return (
    <View>
      <CommentHeader />
      <Comments key={commentsData.id} comments={commentsData} />
    </View>
  );
};

export default MainComment;

const styles = StyleSheet.create({});
