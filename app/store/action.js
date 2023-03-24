import { ACTION_TYPES } from "./action-types";

export const isAuthorized = (authorized) => {
  return {
    type: ACTION_TYPES.IS_AUTHORIZED,
    payload: authorized,
  };
};
