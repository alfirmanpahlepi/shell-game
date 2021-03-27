import React, { useState } from "react";
import { Button } from "../components/Button";
import { Cup } from "../components/Cup";
import "./Shell.css";

const Shell = () => {
  const easy = "duration-700";
  const medium = "duration-500";
  const hard = "duration-300";

  const [box1, setBox1] = useState("");
  const [box2, setBox2] = useState("");
  const [box3, setBox3] = useState("");
  const [level, setLevel] = useState(easy);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [isShuffle, setShuffle] = useState(false);
  const [isPlay, setPlay] = useState(false);

  const jackpot = !isPlay
    ? "m-auto bg-yellow-400 h-3 w-3 rounded-full ring ring-red-100"
    : ":)";

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));
  async function animate() {
    let random = 0;
    let count = 0;
    let delay = 0;
    switch (level) {
      case easy:
        delay = 700;
        count = 15;
        break;
      case medium:
        delay = 500;
        count = 20;
        break;
      case hard:
        delay = 300;
        count = 35;
        break;
      default:
        break;
    }
    for (var i = 0; i <= count; i++) {
      await timer(delay);
      random = Math.random();
      if (random < 0.3) {
        setBox1("left");
        setBox2("mid");
        setBox3("right");
      } else if (random < 0.6) {
        setBox1("mid");
        setBox2("right");
        setBox3("left");
      } else if (random > 0.6) {
        setBox1("right");
        setBox2("left");
        setBox3("mid");
      }
    }
    setShuffle(false);
  }

  function handleClick() {
    setPlay(true);
    setShuffle(true);
    animate();
  }

  function handleWin() {
    if (isPlay) {
      if (!isShuffle) {
        setPlay(false);
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
      }
    }
  }

  function handleLose() {
    if (isPlay) {
      if (!isShuffle) {
        setPlay(false);
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

  const cups = [
    { box: box1, position: "left-0", jackpot: null },
    { box: box2, position: "left-20", jackpot: jackpot },
    { box: box3, position: "left-40", jackpot: null },
  ];

  return (
    <div className="app h-screen w-screen flex bg-gray-600 text-white">
      <div className="container px-5 md:px-12 h-full w-11/12 md:w-3/4 bg-gray-700  flex flex-wrap justify-center content-between py-10">
        <div className="title w-full flex justify-center items-center ">
          <div className="space-y-2">
            <h1 className="font-bold text-5xl text-center w-full">
              Shell Game
            </h1>
            <a
              href="https://portfolio-alfirman.web.app/"
              target="_blank"
              rel="noreferrer"
              className="block ml-2 text-center md:text-left"
            >
              By ezza022
            </a>
          </div>
        </div>
        <div className="space-y-36">
          <div className="flex justify-center items-center space-x-5">
            <div
              onClick={() => (!isPlay ? setLevel(easy) : null)}
              className="space-x-1"
            >
              <input
                type="radio"
                id="easy"
                name="level"
                value="easy"
                defaultChecked={true}
                disabled={isPlay ? true : false}
              />
              <label htmlFor="easy">Easy</label>
            </div>
            <div
              onClick={() => (!isPlay ? setLevel(medium) : null)}
              className="space-x-1"
            >
              <input
                type="radio"
                id="medium"
                name="level"
                value="medium"
                disabled={isPlay ? true : false}
              />
              <label htmlFor="medium">Medium</label>
            </div>
            <div
              onClick={() => (!isPlay ? setLevel(hard) : null)}
              className="space-x-1"
            >
              <input
                type="radio"
                id="hard"
                name="level"
                value="hard"
                disabled={isPlay ? true : false}
              />
              <label htmlFor="hard">Hard</label>
            </div>
          </div>
          <div className="w-52 m-auto relative">
            {cups.map((cup, index) => (
              <Cup
                //static data
                level={level}
                //dynamic data
                key={index}
                box={cup.box}
                jackpot={cup.jackpot}
                position={cup.position}
                handleResult={cup.jackpot ? handleWin : handleLose}
              />
            ))}
          </div>
          <Button
            isPlay={isPlay}
            isShuffle={isShuffle}
            handleClick={handleClick}
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <h2 className="text-xl md:text-5xl">
            Score : <span className="font-bold">{score}</span>
          </h2>
          <h2 className="text-xl md:text-5xl">
            Highscore : <span className="font-bold">{highscore}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Shell;
