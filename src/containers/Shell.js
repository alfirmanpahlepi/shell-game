import React, { useState } from "react";
import { Button } from "../components/Button";
import { Cup } from "../components/Cup";
import "./Shell.css";

const Shell = () => {
  const [box1, setBox1] = useState("");
  const [box2, setBox2] = useState("");
  const [box3, setBox3] = useState("");
  const [level, setLevel] = useState("easy");
  const [isShuffle, setShuffle] = useState(false);
  const [isPlay, setPlay] = useState(false);

  const jackpot = !isPlay
    ? "m-auto bg-yellow-400 h-3 w-3 rounded-full ring ring-red-100"
    : ":)";

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  async function animate() {
    for (var i = 0; i <= 10; i++) {
      await timer(800);
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
          setBox2("mid");
          setBox3("left");
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
      <div className="container p-10 max-w-full w-3/4 bg-gray-700  m-auto text-center flex flex-wrap">
        <div className="title w-full font-bold text-5xl">Shell Game</div>
        <div className="my-20 mb-28 content w-52 m-auto bg-green-300 relative">
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
    </div>
  );
};

export default Shell;
