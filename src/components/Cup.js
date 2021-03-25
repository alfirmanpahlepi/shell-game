import React from "react";

export const Cup = ({ box, position, jackpot }) => {
  return (
    <div className={`${box} flex box1 absolute ${position}  leading-10 h-10 w-10 bg-gray-100 text-gray-700 `}>
      <div className={jackpot ? jackpot : null}></div>
    </div>
  );
};
