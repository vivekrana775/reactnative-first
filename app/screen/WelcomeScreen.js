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
import AppButton from "../components/AppButton";
export default function WelcomeScreen({ navigation }) {
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
        source={require("../../assets/background.jpg")}
      ></Image>
      <Image
        style={{
          position: "absolute",
          top: 20,
          height: "30%",
          width: "30%",
          resizeMode: "contain",
        }}
        source={require("../../assets/logo-red.png")}
      ></Image>
      <Text
        style={{
          position: "absolute",
          top: 200,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Your Personal Blog App
      </Text>
      <AppButton
        title={"LOGIN"}
        onPress={() => navigation.navigate("LoginScreen")}
      />
      <AppButton
        title={"REGISTER"}
        onPress={() => navigation.navigate("RegisterScreen")}
      />
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
