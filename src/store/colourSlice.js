import { createSlice } from "@reduxjs/toolkit";

const initialState = { colour: "canary", hex: "#FFCC66" };

const colourSlice = createSlice({
  name: "colours",
  initialState,
  reducers: {
    colourMagenta(state) {
      state.colour = "magenta";
      state.hex = "#ED4797";
      state.hexLighter = "#FF66B0";
      state.hexDarker = "#BF4D84";
    },
    colourLeaf(state) {
      state.colour = "leaf";
      state.hex = "#4AA75F";
      state.hexLighter = "#A3D9B1";
      state.hexDarker = "#2E7E3E";
    },
    colourOcean(state) {
      state.colour = "ocean";
      state.hex = "#578AC8";
      state.hexLighter = "#A3C9E1";
      state.hexDarker = "#2E5A8E";
    },
    colourCanary(state) {
      state.colour = "canary";
      state.hex = "#FFCC66";
      state.hexLighter = "#FFE6B3";
      state.hexDarker = "#e6b34d";
    },
  },
});

export default colourSlice;
