import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import React, { useState, useEffect } from "react";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";

import AsyncStorage from "@react-native-async-storage/async-storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = ({ navigation }) => {
  // useEffect(() => {
  //   displayData();
  // }, []);

  const [data, setData] = useState({});

  handleLoginPage = (values) => {
    displayData = async () => {
      try {
        let keys = await AsyncStorage.getAllKeys();
        const result = await AsyncStorage.multiGet(keys);

        setData({ ...data, result });

        return result;
      } catch (error) {
        alert(error);
      }
    };
    displayData();
    const users = data["result"];

    const users1 = users.map((item) => item.map((item1) => JSON.parse(item1)));
    let n = users1.length;

    for (let i = 0; i < n; i++) {
      if (users1[i][1]["email"] === values["email"]) {
        return navigation.navigate("HomeScreen");
      }
    }
    alert("Please Register First");
    console.log(users1);
  };

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
          onSubmit={(values) => handleLoginPage(values)}
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
