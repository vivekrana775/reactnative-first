import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import {
  isAuthorized,
  SET_NAME,
  SET_USERNAME,
  SET_BLOGS,
} from "./../store/action";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  // const username = useSelector((state) => state.username);
  // const allBlogs = useSelector((state) => state.blogs);

  // this function is called when formik submit the values and the values are password and username
  // this goes into first i am storing the values in async storage using a a random key then i
  // am getting all keys using getAllKeys and all item of async storage using those keys using multget

  handleLoginPage = (values) => {
    displayData = async () => {
      try {
        let keys = await AsyncStorage.getAllKeys(); // clear ,ethod to clear all details of user
        const result = await AsyncStorage.multiGet(keys);

        // dispatch(SET_BLOGS({})); //used to clear the user details i.e clear the redux persist storage

        setData({ ...data, result });

        return result;
      } catch (error) {
        alert(error);
      }
    };
    displayData();
    const users = data["result"];

    // getting the DATA into users and converting some values from JSON format to check authentication of user

    const users1 = [];
    let x = users?.length;

    for (let i = 0; i < x; i++) {
      users1.push(JSON.parse(users[i][1]));
    }

    let n = users1?.length;

    for (let i = 0; i < n; i++) {
      if (
        users1[i]["email"] === values["email"] &&
        users1[i]["confirmPassword"] === values["password"]
      ) {
        const storeIsAuthorized = async () => {
          try {
            await AsyncStorage.setItem(
              "isAuthorized",
              JSON.stringify({ isAuthorized: true })
            );
          } catch (error) {
            alert(error);
          }
        };
        storeIsAuthorized();

        // storing data in redux persist so that we can reuse it later but i did that using alsync storage so some things are going
        // woring in async storage and some things are using redux persist

        dispatch(isAuthorized(true));
        dispatch(SET_USERNAME(users1[i]["email"]));
        dispatch(SET_NAME(users1[i]["name"]));

        return;
      }
    }
    alert("Please Register First");
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
                onPress={() => handleSubmit()}
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
