import React from "react";
import { IMG_CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { toggleMovieDetailsModal } from "../utils/moviesSlice";

const MoviesCard = ({ movie }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleMovieDetailsModal(movie));
  };
  const { poster_path } = movie;

  if (!poster_path) return null;

  return (
    <div className="relative w-36 md:w-[220px] md:h-[210px] pr-4">
      <img
        className="cursor-pointer w-full h-full object-fill rounded-md transition-all duration-300 hover:scale-110"
        src={`${IMG_CDN_URL}${poster_path}`}
        alt="Movie Image"
        onClick={handleClick}
      />
    </div>
  );
};

export default MoviesCard;
