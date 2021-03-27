import React from "react";

export const Button = ({ isPlay, isShuffle, handleClick }) => {
  let name = "";
  if (!isPlay) {
    name = "Shuffle";
  } else {
    if (isShuffle) {
      name = "Shuffling...";
    } else {
      name = "find the ball !";
    }
  }

  return (
    <div className="button w-full text-center">
      <button
        onClick={!isPlay ? handleClick : null}
        className={` ${
          !isPlay ? null : "cursor-not-allowed"
        }  focus:outline-none tracking-widest py-1 px-4 lg:py-2 lg:px-7 lg:rounded-3xl lg:text-2xl font-bold rounded-2xl shadow-lg bg-gray-50 hover:bg-gray-200 text-gray-600 hover:text-gray-700`}
      >
        {name}
      </button>
    </div>
  );
};
