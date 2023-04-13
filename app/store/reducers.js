import { ACTION_TYPES } from "./action-types";

const initialState = {
  authorized: false,
  imageUri: null,
  username: "",
  userid: "",
  name: "",
  blogs: {},
  comments: {
    id: "1",
    items: [
      {
        id: "dsohfoisd",
        body: "first comment",
        items: [{ id: "dfkpd", body: "child of first comment", items: [] }],
      },
      {
        id: "sdss",
        body: "dffsd",
        items: [],
      },
    ],
  },
};

export const mainReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.IS_AUTHORIZED:
      return { ...state, authorized: payload };

    case "SET_IMAGE_URI":
      return { ...state, imageUri: payload };

    case "SET_USERNAME":
      return { ...state, username: payload };

    case "SET_NAME":
      return { ...state, name: payload };

    case "SET_USER_ID":
      return { ...state, userid: payload };

    case "SET_BLOGS":
      return {
        ...state,
        blogs: { ...payload },
      };
    case "SET_EMPTY_BLOG":
      return {
        ...state,
        blogs: { ...state.blogs, ...payload },
      };

    default:
      return state;
  }
};
