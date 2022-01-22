import { createSlice } from "@reduxjs/toolkit";

const initialState = { language: "EN" };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    italian(state) {
      state.language = "IT";
    },
    english(state) {
      state.language = "EN";
    },
  },
});

export default languageSlice;
