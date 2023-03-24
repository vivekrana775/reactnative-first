import { ACTION_TYPES } from "./action-types";

const initialState = {
  authorized: false,
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.IS_AUTHORIZED:
      return { ...state, authorized: state.authorized == false ? true : false };

    default:
      return state;
  }
};
