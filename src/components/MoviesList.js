import React from "react";
import MoviesCard from "./MoviesCard";
import { useSelector } from "react-redux";
import MovieDetailsModal from "./MovieDetailsModal";

const MoviesList = ({ title, movies }) => {
  const movieDetailsModal = useSelector(
    (store) => store.movies.movieDetailsModal
  );

  if (!movies) return;

  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {movies.map((movie) => (
            <MoviesCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      {movieDetailsModal && <MovieDetailsModal />}
    </div>
  );
};

export default MoviesList;
