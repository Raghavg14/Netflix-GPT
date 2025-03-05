import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { Netflix_Background_IMG } from "../utils/constant";

const GPTSearchPage = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img
          src={Netflix_Background_IMG}
          alt="Netflix_Background_IMG"
          className="fixed h-screen w-screen object-cover "
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </>
  );
};

export default GPTSearchPage;
