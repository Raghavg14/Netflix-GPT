import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[35%] md:pt-[22%] px-12 md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-lg md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg md:w-1/4">
        {overview.slice(0, 200) + "..."}
      </p>
      <div className="mt-2 md:mt-0">
        <button className="bg-white text-black p-2 px-4 md:p-4 md:px-12 md:text-xl rounded-md hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-md mx-2 hover:bg-opacity-80">
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
