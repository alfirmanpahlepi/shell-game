import React, { useState } from "react";
//component
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { Cup } from "../../components/Cup";
//assets
import { pop, win, uh, bloop } from "../../Assets/Audio";

export default function Home() {
  const easy = "duration-700";
  const medium = "duration-500";
  const hard = "duration-300";

  const [box1, setBox1] = useState("");
  const [box2, setBox2] = useState("");
  const [box3, setBox3] = useState("");
  const [level, setLevel] = useState(easy);
  const [score, setScore] = useState(0);
  const [isShuffle, setShuffle] = useState(false);
  const [isPlay, setPlay] = useState(false);

  const jackpot = !isPlay ? "m-auto bg-yellow-400 h-4 w-4 rounded-full" : ":)";

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
        count = 25;
        break;
      default:
        break;
    }
    for (var i = 0; i <= count; i++) {
      await timer(delay);
      random = Math.random();
      if (random <= 0.3) {
        setBox1("left");
        setBox2("mid");
        setBox3("right");
      } else if (random <= 0.6) {
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
    pop.play();
    setPlay(true);
    setShuffle(true);
    animate();
  }

  function handleWin() {
    if (isPlay) {
      if (!isShuffle) {
        win.play();
        setPlay(false);
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
        uh.play();
        setPlay(false);
        setScore(0);
      }
    }
  }

  const cups = [
    { box: box1, position: "left-0", jackpot: null },
    { box: box2, position: "left-20", jackpot: jackpot },
    { box: box3, position: "left-40", jackpot: null },
  ];

  return (
    <>
      <Title />
      <div className="space-y-36">
        <div className="flex justify-center items-center space-x-5">
          {/* help me pls :'( 
                i cant build this Radio Button to dynamic component
                if i build to component, and adding some array to props
                the radio button will updating with twice click, whyyy ?*/}
          <div className="space-x-2">
            <input
              className="text-green-700 lg:h-6 lg:w-6 focus:ring-0"
              type="radio"
              id="easy"
              name="level"
              value="easy"
              defaultChecked={true}
              disabled={isPlay ? true : false}
              onClick={() => (!isPlay ? bloop.play() : null)}
              onChange={() => (!isPlay ? setLevel(easy) : null)}
            />
            <label className="lg:text-xl" htmlFor="easy">
              Easy
            </label>
          </div>
          <div className="space-x-2">
            <input
              className="text-yellow-500 lg:h-6 lg:w-6 focus:ring-0"
              type="radio"
              id="medium"
              name="level"
              value="medium"
              disabled={isPlay ? true : false}
              onClick={() => (!isPlay ? bloop.play() : null)}
              onChange={() => (!isPlay ? setLevel(medium) : null)}
            />
            <label className="lg:text-xl" htmlFor="medium">
              Medium
            </label>
          </div>
          <div className="space-x-2">
            <input
              className="text-red-500 lg:h-6 lg:w-6 focus:ring-0"
              type="radio"
              id="hard"
              name="level"
              value="hard"
              disabled={isPlay ? true : false}
              onClick={() => (!isPlay ? bloop.play() : null)}
              onChange={() => (!isPlay ? setLevel(hard) : null)}
            />
            <label className="lg:text-xl" htmlFor="hard">
              Hard
            </label>
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
      <div className="w-full mb-10 ">
        <h2 className="text-3xl text-center md:text-5xl">
          Score : <span className="font-bold">{score}</span>
        </h2>
      </div>
    </>
  );
}
