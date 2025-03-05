import React, { useRef } from "react";
import { API_options, GEMINIAI_KEY } from "../utils/constant";
import { useDispatch } from "react-redux";
import { AddGPTMoviesSuggestions } from "../utils/GPTSearchSlice";
import useGPTSuggestionMovies from "../Hooks/useGPTSuggestionMovies";

const GPTSearchBar = () => {
  const searchTextRef = useRef(null);

  const handleGPTSearch = useGPTSuggestionMovies();

  return (
    <div className="pt-[40%] md:pt-[15%] flex justify-center">
      <form
        className="bg-black bg-opacity-70 rounded-md w-screen md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchTextRef}
          className="p-4 m-4 col-span-9 rounded-md"
          type="text"
          placeholder="What would you like to watch?"
        />
        <button
          type="button"
          className="col-span-3 m-4 ml-0 py-2 px-4 bg-[rgb(229,9,20)] text-white hover:bg-opacity-80 rounded-md"
          onClick={() =>
            searchTextRef.current.value.length > 0 &&
            handleGPTSearch(searchTextRef.current.value)
          }
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
