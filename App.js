import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";

import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  return (
    <View
      style={{
        // backgroundColor: "dodgerblue",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Image
        style={{ flex: 1, height: "100%", width: "100%", alignItems: "center" }}
        source={require("./assets/background.jpg")}
      ></Image>
      <Image
        style={{
          position: "absolute",
          top: 20,
          height: "30%",
          width: "30%",
          resizeMode: "contain",
        }}
        source={require("./assets/logo-red.png")}
      ></Image>
      <Text
        style={{
          position: "absolute",
          top: 200,
        }}
      >
        Sell what you don't need
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          height: "10%",
          position: "absolute",
          backgroundColor: "#fc5c65",
          top: 650,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          height: "10%",
          position: "absolute",
          backgroundColor: "#4ECDC4",
          top: 720,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
