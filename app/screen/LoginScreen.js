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

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = ({ navigation }) => {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/background3.jpg")}
    >
      <Screen>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-red.png")}
        ></Image>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
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
                placeholder="Username                                         "
                icon="email"
                keyboardType="email-address"
                textContentType="emailAddress"
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
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
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
              />
              {touched.password && (
                <Text style={styles.text}>
                  {errors.password == null ? null : errors.password}
                </Text>
              )}
              <AppButton
                title="LOGIN"
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

export default LoginScreen;

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
    top: 430,
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
