import { useState } from "react";

export default function useShellGame() {
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("ready");
  const [level, setLevel] = useState("easy");
  const [cups, setCups] = useState([
    { name: "cup1", position: "-translate-x-20", isJackpot: true },
    { name: "cup2", position: "translate-x-0", isJackpot: false },
    { name: "cup3", position: "translate-x-20", isJackpot: false },
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
      if (new Date().getTime() - start > 500) {
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
        cups[0].position = "-translate-x-20";
        cups[1].position = "translate-x-0";
        cups[2].position = "translate-x-20";
      } else if (random === 2) {
        cups[0].position = "translate-x-0";
        cups[1].position = "translate-x-20";
        cups[2].position = "-translate-x-20";
      } else if (random === 3) {
        cups[0].position = "translate-x-20";
        cups[1].position = "-translate-x-20";
        cups[2].position = "translate-x-0";
      }

      prev = random;
      setCups([...cups]);
    }, duration);
  };

  const userChoice = (isJackpot) => {
    if (status === "ready" || status === "over") return;
    if (!isJackpot) return setStatus("over");
    setScore(score + 100);
    setStatus("ready");
  };

  return { userChoice, shuffle, score, setLevel, status, cups };
}
