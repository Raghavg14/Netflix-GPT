import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUserDetails, removeUserDetails } from "../utils/userSlice";
import { Netflix_Logo } from "../utils/constant";
import {
  ResetGPTMoviesSuggestions,
  ToggleGPTSearchView,
} from "../utils/GPTSearchSlice";

const Header = () => {
  const userDetails = useSelector((store) => store.user);
  const GPTSearchToggle = useSelector((store) => store.GPTSearch.GPTSearchView);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUserDetails({
            uid,
            email,
            displayName,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUserDetails());
        navigate("/");
      }
    });
    return () => {
      //unsubscribe when component unmounts
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTSearch = () => {
    dispatch(ToggleGPTSearchView());
    dispatch(ResetGPTMoviesSuggestions());
  };

  return (
    <div className="absolute w-screen z-10 px-10 py-4 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between">
      <img
        onClick={() => dispatch(ToggleGPTSearchView())}
        className="w-40 mx-auto mb-4 md:mb-0 md:mx-0 hover:cursor-pointer"
        src={Netflix_Logo}
        alt="logo"
      />
      {userDetails && (
        <div className="flex justify-evenly">
          <p className="text-center p-2 font-semibold text-xl rounded-md mr-3 text-white">
            Welcome{" "}
            <span className="underline">{userDetails?.displayName}</span>
          </p>
          <button
            className="bg-purple-700 text-white px-2 hover:bg-opacity-80 rounded-md mr-3 "
            onClick={handleGPTSearch}
          >
            {GPTSearchToggle ? "Home" : "GPT Search"}
          </button>
          <button
            className="bg-[rgb(229,9,20)] text-white px-2 hover:bg-opacity-80 rounded-md"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
