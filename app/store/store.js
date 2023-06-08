import { createStore } from "redux";

import { mainReducer } from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, mainReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);
export { store, persistor };
