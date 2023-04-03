import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MotiView } from "moti";
import { useEffect } from "react";

const LoadingAnimation = ({ navigation, route }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("HomeScreen");
    }, 2500);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <MotiView
        from={{
          width: 100,
          height: 100,
          borderRadius: 50,
        }}
        animate={{
          width: 120,
          height: 120,
          borderRadius: 60,
        }}
        transition={{
          type: "timing",
          duration: 1000,
          repeat: 10,
        }}
        style={styles.circle}
      ></MotiView>
      <View style={{ widht: 100, height: 50, margin: 10 }}>
        <Text style={styles.loading_text}>{route.params.text}</Text>
      </View>
    </View>
  );
};

export default LoadingAnimation;

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 15,
    borderColor: "#41faa7",
  },
  loading_text: {
    color: "#0d0c0c",
    fontSize: 24,
    fontWeight: "900",
    padding: 10,
    paddingLeft: 25,
    letterSpacing: 2,
  },
});
