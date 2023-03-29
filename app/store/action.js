import { ACTION_TYPES } from "./action-types";

export const isAuthorized = (authorized) => {
  return {
    type: ACTION_TYPES.IS_AUTHORIZED,
    payload: authorized,
  };
};

export const SET_IMAGE_URI = (imageUri) => {
  return {
    type: "SET_IMAGE_URI",
    payload: imageUri,
  };
};

export const SET_USERNAME = (username) => {
  return {
    type: "SET_USERNAME",
    payload: username,
  };
};
export const SET_NAME = (name) => {
  return {
    type: "SET_NAME",
    payload: name,
  };
};

export const SET_USER_ID = (id) => {
  return {
    type: "SET_USER_ID",
    payload: id,
  };
};
export const SET_BLOGS = (blog) => {
  return {
    type: "SET_BLOGS",
    payload: blog,
  };
};

export const SET_EMPTY_BLOGS = (user) => {
  return {
    type: "SET_EMPTY_BLOG",
    payload: user,
  };
};
