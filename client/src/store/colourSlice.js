import { createSlice } from "@reduxjs/toolkit";

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

export default colourSlice;
