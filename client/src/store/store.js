import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";

import colourSlice from "./colourSlice";
import languageSlice from "./languageSlice";

const persistColourConfig = {
  key: "colour",
  storage,
};
const persistLanguageConfig = {
  key: "language",
  storage,
};

const persistedColourReducer = persistReducer(
  persistColourConfig,
  colourSlice.reducer
);
const persistedLanguageReducer = persistReducer(
  persistLanguageConfig,
  languageSlice.reducer
);

const store = configureStore({
  reducer: {
    colours: persistedColourReducer,
    languages: persistedLanguageReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const colourActions = colourSlice.actions;
export const languageActions = languageSlice.actions;
export default store;
