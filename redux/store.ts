"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistReducer } from "redux-persist";
import storage from "./customStorage";
import counterReducer from "./slice/counterSlice";
import themeReducer from "./slice/themeSlice";

const themePersistConfig = {
  key: "theme",
  storage: storage,
  whitelist: ["value"],
};

const rootReducer = combineReducers({
  theme: persistReducer(themePersistConfig, themeReducer),
  counter: counterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
