import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";

import AsyncStorage from "@react-native-async-storage/async-storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const onhandleSubmit = async (values) => {
  const result = await AsyncStorage.setItem("user", JSON.stringify(values));
  console.log(result);
};

const RegisterScreen = ({ navigation }) => {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/background1.jpg")}
    >
      <Screen>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-red.png")}
        ></Image>
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          onSubmit={(values) => onhandleSubmit(values)}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, errors }) => (
            <>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Username                                         "
                icon="email"
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
              />
              <Text style={styles.text}>{errors.email}</Text>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                secureTextEntry={true}
                placeholder="Password                                      "
                icon="lock"
                onChangeText={handleChange("password")}
              />
              <Text style={styles.text}>{errors.password}</Text>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                secureTextEntry={true}
                placeholder="Confirm Password                                     "
                icon="lock-alert"
                onChangeText={handleChange("confirmPassword")}
              />
              <Text style={styles.text}>{errors.confirmPassword}</Text>
              <AppButton
                title="REGISTER"
                onPress={handleSubmit}
                style={styles.buttonContainer}
              ></AppButton>
            </>
          )}
        </Formik>
      </Screen>
    </ImageBackground>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 100,

    marginBottom: -150,
  },
  buttonContainer: {
    position: "absolute",
    padding: 10,
    left: 28,
    top: 530,
    height: 50,
  },
  text: {
    position: "relative",
    top: 190,
    left: 20,
    color: "red",
  },
  background: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height + 40,
  },
});
