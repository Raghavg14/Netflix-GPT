import { useDispatch } from "react-redux";
import { API_options, GEMINIAI_KEY } from "../utils/constant";
import {
  AddGPTMoviesSuggestions,
  SetLoadingMovieSuggestions,
} from "../utils/GPTSearchSlice";

const useGPTSuggestionMovies = () => {
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_options
    );
    const json = await data.json();

    return json.results[0];
  };

  const handleGPTSearch = async (SearchText) => {
    if (!GEMINIAI_KEY) {
      console.error("Gemini API key is missing");
      return;
    }

    dispatch(SetLoadingMovieSuggestions());

    const gptQuery = `Act as a movie recommendation system and suggest some movies for the query: 
      ${SearchText}. 
      Only give me the names of 5 to 10 movies, comma-separated. Example: HulChul, Chup Chup Ke, Sholay, Gadar, Golmaal, `;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINIAI_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: gptQuery }] }],
          }),
        }
      );

      if (!response.ok) {
        console.error(
          "API Request Failed:",
          response.status,
          response.statusText
        );
        return;
      }

      const data = await response.json();

      const movieList = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (movieList) {
        const movies = movieList.split(",").map((movie) => movie.trim());

        const promiseArray = movies.map((movie) => searchMovieTMDB(movie));

        const TMDBResults = await Promise.all(promiseArray);

        dispatch(AddGPTMoviesSuggestions(TMDBResults));
        dispatch(SetLoadingMovieSuggestions());
      } else {
        console.error("Unexpected response format:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return handleGPTSearch;
};

export default useGPTSuggestionMovies;
