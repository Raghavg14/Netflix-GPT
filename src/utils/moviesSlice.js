import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,
    trailerVideo: null,
    movieDetailsModal: false,
    selectedMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addpopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addupcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addtopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    toggleMovieDetailsModal: (state, action) => {
      state.movieDetailsModal = !state.movieDetailsModal;
      state.selectedMovie = action.payload || null;
    },
  },
});

export default moviesSlice.reducer;
export const {
  addNowPlayingMovies,
  addpopularMovies,
  addupcomingMovies,
  addtopRatedMovies,
  addTrailerVideo,
  toggleMovieDetailsModal,
} = moviesSlice.actions;
