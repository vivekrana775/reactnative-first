import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const onhandleSubmit = async (values, navigation) => {
  await AsyncStorage.setItem(Math.random().toString(), JSON.stringify(values))
    .then(() => {
      navigation.navigate("LoginScreen");
      console.log(`${JSON.stringify(values)} was saved successfully`);
    })
    .catch(() => {
      console.log("Some error occured");
    });
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  name: Yup.string().required().label("Name"),
});

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
          initialValues={{ email: "", password: "", name: "" }}
          onSubmit={(values) => onhandleSubmit(values, navigation)}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Name                                        "
                icon="fish"
                keyboardType="default"
                textContentType="password"
                onChangeText={handleChange("name")}
                onBlur={() => setFieldTouched("name")}
              />
              {touched.name && (
                <Text style={styles.text}>
                  {errors.name == null ? null : errors.name}
                </Text>
              )}
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Username                                         "
                icon="email"
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
              />
              {touched.email && (
                <Text style={styles.text}>
                  {errors.email == null ? null : errors.email}
                </Text>
              )}
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                secureTextEntry={true}
                placeholder="Password                                      "
                icon="lock"
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
              />
              {touched.password && (
                <Text style={styles.text}>
                  {errors.password == null ? null : errors.password}
                </Text>
              )}
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
    top: 570,
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
