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
  const [isShuffle, setShuffle] = useState(false);
  const [isPlay, setPlay] = useState(false);

  const jackpot = !isPlay
    ? "m-auto bg-yellow-400 h-3 w-3 rounded-full ring ring-red-100"
    : ":)";

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  async function animate() {
    for (var i = 0; i <= 15; i++) {
      let delay = 0;
      switch (level) {
        case easy:
          delay = 700;
          break;
        case medium:
          delay = 500;
          break;
        case hard:
          delay = 300;
          break;
        default:
          break;
      }
      await timer(delay);
      let random = Math.random();

      //sorry badcode, i'll refactoring soon -_-

      if (random < 0.3) {
        if (box1 !== "left" && box2 !== "mid" && box3 !== "right") {
          setBox1("left");
          setBox2("mid");
          setBox3("right");
        } else {
          setBox1("mid");
          setBox2("right");
          setBox3("left");
        }
      } else if (random < 0.6) {
        if (box1 !== "mid" && box2 !== "right" && box3 !== "left") {
          setBox1("mid");
          setBox2("right");
          setBox3("left");
        } else {
          setBox1("right");
          setBox2("left");
          setBox3("mid");
        }
      } else if (random > 0.6) {
        if (box1 !== "right" && box2 !== "left" && box3 !== "mid") {
          setBox1("right");
          setBox2("left");
          setBox3("mid");
        } else {
          setBox1("left");
          setBox2("mid");
          setBox3("right");
        }
      }
    }
    setShuffle(false);
  }

  function handleClick() {
    setShuffle(true);
    setPlay(true);
    animate();
  }

  return (
    <div className="app h-screen w-screen flex bg-gray-600 text-white">
      <div className="container h-full w-11/12 md:w-3/4 bg-gray-700  flex flex-wrap justify-center content-between py-10">
        <div className="title w-full flex justify-center items-center ">
          <div className="space-y-2">
            <h1 className="font-bold text-5xl text-center w-full">
              Shell Game
            </h1>
            <h2 className="ml-2">By ezza022</h2>
          </div>
        </div>
        <div className="space-y-36">
          <div className="flex justify-center items-center space-x-5">
            <div onClick={() => setLevel(easy)} className="space-x-1">
              <input
                type="radio"
                id="easy"
                name="level"
                value="easy"
                defaultChecked
              />
              <label htmlFor="easy">Easy</label>
            </div>
            <div onClick={() => setLevel(medium)} className="space-x-1">
              <input type="radio" id="medium" name="level" value="medium" />
              <label htmlFor="medium">Medium</label>
            </div>
            <div onClick={() => setLevel(hard)} className="space-x-1">
              <input type="radio" id="hard" name="level" value="hard" />
              <label htmlFor="hard">Hard</label>
            </div>
          </div>
          <div className="w-52 m-auto relative">
            <Cup
              isShuffle={isShuffle}
              isPlay={isPlay}
              level={level}
              box={box1}
              position={"left-0"}
              setPlay={setPlay}
            />
            <Cup
              isShuffle={isShuffle}
              isPlay={isPlay}
              level={level}
              jackpot={jackpot}
              box={box2}
              position={"left-20"}
              setPlay={setPlay}
            />
            <Cup
              isShuffle={isShuffle}
              isPlay={isPlay}
              level={level}
              box={box3}
              position={"left-40"}
              setPlay={setPlay}
            />
          </div>
          <Button
            isPlay={isPlay}
            isShuffle={isShuffle}
            handleClick={handleClick}
          />
        </div>
        <div className="w-full">score</div>
      </div>
    </div>
  );
};

export default Shell;
