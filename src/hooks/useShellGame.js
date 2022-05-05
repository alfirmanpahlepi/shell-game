import { useState } from "react";

export default function useShellGame() {
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("ready");
  const [level, setLevel] = useState("easy");
  const [cups, setCups] = useState([
    { name: "cup1", position: left, isJackpot: true },
    { name: "cup2", position: mid, isJackpot: false },
    { name: "cup3", position: right, isJackpot: false },
  ]);

  const shuffle = () => {
    if (status === "over") setScore(0);
    setStatus("shuffling");
    const start = new Date().getTime();
    let duration;
    let random;
    let prev;

    // set duration with the level
    if (level === "easy") duration = 700;
    else if (level === "medium") duration = 500;
    else if (level === "hard") duration = 300;
    else if (level === "hawk eye") duration = 100;

    const interval = setInterval(() => {
      // stop interval in 5 seconds
      if (new Date().getTime() - start > 3000) {
        setStatus("choosing");
        clearInterval(interval);
        return;
      }
      // don't let random number same as previous number
      while (prev === random) {
        // random number for 1,2,3
        random = Math.ceil(Math.random() * 3);
      }

      if (random === 1) {
        cups[0].position = left;
        cups[1].position = mid;
        cups[2].position = right;
      } else if (random === 2) {
        cups[0].position = mid;
        cups[1].position = right;
        cups[2].position = left;
      } else if (random === 3) {
        cups[0].position = right;
        cups[1].position = left;
        cups[2].position = mid;
      }

      prev = random;
      setCups([...cups]);
    }, duration);
  };

  const userChoice = (isJackpot) => {
    if (status === "ready" || status === "over") return;
    if (!isJackpot) return setStatus("over");
    let newScore;
    if (level === "easy") newScore = 10;
    else if (level === "medium") newScore = 30;
    else if (level === "hard") newScore = 50;
    else if (level === "hawk eye") newScore = 100;
    setScore(score + newScore);
    setStatus("ready");
  };

  return { userChoice, shuffle, score, setLevel, status, cups };
}

const left = "-translate-x-20 sm:-translate-x-40";
const mid = "translate-x-0";
const right = "translate-x-20 sm:translate-x-40";
