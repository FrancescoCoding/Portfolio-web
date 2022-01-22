import { createSlice } from "@reduxjs/toolkit";

const initialState = { language: "EN" };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    switchToItalian(state) {
      state.language = "IT";
    },
    switchToEnglish(state) {
      state.language = "EN";
    },
  },
});

export default languageSlice;
