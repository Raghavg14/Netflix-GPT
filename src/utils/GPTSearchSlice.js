import { createSlice } from "@reduxjs/toolkit";

const GPTSearchSlice = createSlice({
  name: "GPTSearch",
  initialState: {
    GPTSearchView: false,
    GPTMoviesSuggestions: null,
    LoadingMovieSuggestions: false,
  },
  reducers: {
    ToggleGPTSearchView: (state) => {
      state.GPTSearchView = !state.GPTSearchView;
    },
    AddGPTMoviesSuggestions: (state, action) => {
      state.GPTMoviesSuggestions = action.payload;
    },
    ResetGPTMoviesSuggestions: (state) => {
      state.GPTMoviesSuggestions = null;
    },
    SetLoadingMovieSuggestions: (state) => {
      state.LoadingMovieSuggestions = !state.LoadingMovieSuggestions;
    },
  },
});

export default GPTSearchSlice.reducer;
export const {
  ToggleGPTSearchView,
  AddGPTMoviesSuggestions,
  ResetGPTMoviesSuggestions,
  SetLoadingMovieSuggestions,
} = GPTSearchSlice.actions;
