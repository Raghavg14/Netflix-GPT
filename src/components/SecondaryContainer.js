import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="w-screen bg-black">
        <div className="-mt-0 md:-mt-64 md:pl-16 relative z-20">
          <MoviesList title="Now Playing" movies={movies?.nowPlayingMovies} />
          <MoviesList title="Top-Rated" movies={movies?.topRatedMovies} />
          <MoviesList title="Upcoming" movies={movies?.upcomingMovies} />
          <MoviesList title="Popular" movies={movies?.popularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
