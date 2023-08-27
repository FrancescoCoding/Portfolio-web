// slices/audioSlice.js

import { createSlice } from "@reduxjs/toolkit";

let audio;

const initialState = {
  volume: 0,
  isPlaying: false,
  isMuted: false,
  lastVolume: 0,
  songs: [
    {
      title: "Empty mind by Lofi_hour",
      filePath: "../assets/Sounds/lofi-emptymind.mp3",
    },
    { title: "Random Raggae", filePath: "../assets/Sounds/raggae.mp3" },
  ],
  currentSongIndex: 0, // Index of the currently playing song
};

const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    setVolume(state, action) {
      state.volume = action.payload;
      if (audio) {
        audio.volume = state.volume;
      }
    },
    togglePlay(state) {
      state.isPlaying = !state.isPlaying;
      if (audio) {
        state.isPlaying ? audio.play() : audio.pause();
      }
    },
    toggleMute(state) {
      if (!state.isMuted) {
        state.lastVolume = state.volume;
        state.volume = 0;
      } else {
        state.volume = state.lastVolume;
      }
      state.isMuted = !state.isMuted;
      if (audio) {
        audio.volume = state.volume;
      }
    },
    setLastVolume(state, action) {
      state.lastVolume = action.payload;
    },
    setSongTitle(state, action) {
      state.songTitle = action.payload;
    },
  },
});

// Defer the audio loading and initialization
setTimeout(() => {
  audio = new Audio(require("../assets/Sounds/lofi-emptymind.mp3"));
  audio.loop = true;
  initialState.songTitle =
    initialState.songs[initialState.currentSongIndex].title;
}, 0);

export default audioSlice;
