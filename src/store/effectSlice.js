// effectSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentEffect: "noise", // initial effect
};

const effectSlice = createSlice({
  name: "effects",
  initialState,
  reducers: {
    setRetroEffect(state) {
      state.currentEffect = "retro";
    },
    setNoiseEffect(state) {
      state.currentEffect = "noise";
    },
  },
});

export default effectSlice;
