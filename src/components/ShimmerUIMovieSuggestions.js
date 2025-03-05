import React from "react";

const ShimmerUIMovieSuggestions = () => {
  return (
    <div className="z-20 text-white bg-black bg-opacity-70 w-screen md:w-1/2 md:mx-auto flex flex-col p-4 rounded-b-md">
      {Array(3)
        .fill("")
        .map((_, index) => (
          <div key={index} className="grid grid-cols-12 mb-6 animate-pulse">
            <div className="col-span-3 bg-gray-700 md:h-[210px] md:w-[220px] rounded-md mr-4"></div>

            <div className="col-span-9 md:ml-7 ml-30">
              <div className="h-6 bg-gray-700 rounded-md w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-600 rounded-md w-5/6 mb-2"></div>
              <div className="h-4 bg-gray-600 rounded-md w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-600 rounded-md w-1/3"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerUIMovieSuggestions;
