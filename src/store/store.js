import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import { createSlice, configureStore } from "@reduxjs/toolkit";

import colourSlice from "./colourSlice";
import languageSlice from "./languageSlice";

const persistConfig = {
  key: "colour",
  storage,
};
const persistLanguageConfig = {
  key: "language",
  storage,
};

const persistedReducer = persistReducer(persistConfig, colourSlice.reducer);
const persistedLanguageReducer = persistReducer(
  persistLanguageConfig,
  languageSlice.reducer
);

const store = configureStore({
  reducer: { colours: persistedReducer, language: persistedLanguageReducer },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const colourActions = colourSlice.actions;
export default store;
