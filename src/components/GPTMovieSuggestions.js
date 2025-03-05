import React from "react";
import { useSelector } from "react-redux";
import ShimmerUIMovieSuggestions from "./ShimmerUIMovieSuggestions";
import { IMG_CDN_URL } from "../utils/constant";

const GPTMovieSuggestions = () => {
  const suggestedMovies = useSelector(
    (store) => store.GPTSearch?.GPTMoviesSuggestions
  );
  const loading = useSelector(
    (store) => store.GPTSearch?.LoadingMovieSuggestions
  );

  if (loading) return <ShimmerUIMovieSuggestions />;

  if (!loading && (!suggestedMovies || suggestedMovies.length === 0)) {
    return (
      <h1 className="text-white bg-black bg-opacity-70 w-screen md:w-1/2 md:mx-auto flex flex-col p-4 rounded-b-md ">
        No Movies Suggestion found, Please Search.
      </h1>
    );
  }

  return (
    <div className="text-white bg-black bg-opacity-70 w-screen md:w-1/2 md:mx-auto flex flex-col p-4 rounded-b-md ">
      {suggestedMovies.map(
        (movie) =>
          movie &&
          movie.poster_path && (
            <div
              className="grid grid-cols-12 mb-6 transition-all duration-300 hover:scale-105"
              key={movie.id}
            >
              <div className="col-span-3">
                <div className="relative w-36 md:w-[220px] md:h-[210px] pr-4">
                  <img
                    className="cursor-pointer w-full h-full object-fill rounded-md "
                    src={`${IMG_CDN_URL}${movie.poster_path}`}
                    alt="Movie Image"
                  />
                </div>
              </div>
              <div className="col-span-9 md:ml-4 ml-12">
                <h1 className="text-xl md:text-2xl font-semibold">
                  {movie.title}
                </h1>
                <p>{movie.overview.slice(0, 350) + "..."}</p>
                <p>Release Date - {movie.release_date}</p>
                <p>
                  Rating - {movie.vote_average} ⭐ ({movie.vote_count} votes)
                </p>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default GPTMovieSuggestions;
