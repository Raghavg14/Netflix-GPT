import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import GPTSearchSlice from "./GPTSearchSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
    GPTSearch: GPTSearchSlice,
  },
});
