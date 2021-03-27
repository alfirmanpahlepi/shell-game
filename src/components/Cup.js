import React from "react";

export const Cup = ({ handleResult, box, level, position, jackpot }) => {
  return (
    <div
      onClick={handleResult}
      className={`${box} ${level} ${position} bottom-14 cursor-pointer flex box1 absolute leading-10 h-10 w-10 bg-gray-100 text-gray-700 `}
    >
      <div className={jackpot ? jackpot : null}></div>
    </div>
  );
};