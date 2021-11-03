import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { colour: "canary", hex: "#FFCC66" };

const colourSlice = createSlice({
  name: "colours",
  initialState,
  reducers: {
    colourMagenta(state) {
      state.colour = "magenta";
      state.hex = "#ED4797";
    },
    colourLeaf(state) {
      state.colour = "leaf";
      state.hex = "#4AA75F";
    },
    colourOcean(state) {
      state.colour = "ocean";
      state.hex = "#578AC8";
    },
    colourCanary(state) {
      state.colour = "canary";
      state.hex = "#FFCC66";
    },
  },
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, colourSlice.reducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const colourActions = colourSlice.actions;
export default store;
