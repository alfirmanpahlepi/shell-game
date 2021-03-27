import React from "react";

export const Cup = ({
  box,
  position,
  jackpot,
  isShuffle,
  isPlay,
  level,
  score,
  highscore,
  setPlay,
  setScore,
  setHighscore,
}) => {

  const easy = "duration-700";
  const medium = "duration-500";
  const hard = "duration-300";

  function result() {
    if (isPlay) {
      if (!isShuffle) {
        setPlay(false);
        if (jackpot) {
          alert("You win !");
          switch (level) {
            case easy:
              setScore(score + 10);
              break;
            case medium:
              setScore(score + 20);
              break;
            case hard:
              setScore(score + 50);
              break;
            default:
              break;
          }
        } else {
          alert("You lose !");
          if (score > highscore) {
            setHighscore(score);
            setScore(0);
          } else {
            setHighscore(highscore);
            setScore(0);
          }
        }
      }
    }
  }

  return (
    <div
      onClick={() => result()}
      className={`${box} ${level} ${position} bottom-14 cursor-pointer flex box1 absolute leading-10 h-10 w-10 bg-gray-100 text-gray-700 `}
    >
      <div className={jackpot ? jackpot : null}></div>
    </div>
  );
};
