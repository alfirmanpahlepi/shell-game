import { useState } from "react";
import { Button } from "../components/Button";
import InputRadioLabel from "../components/InputRadioLabel";
import Modal from "../components/Modal";
import useShellGame from "../hooks/useShellGame";

const Home = () => {
  const [modal, setModal] = useState(false);
  const { score, shuffle, userChoice, setLevel, status, cups } = useShellGame();

  return (
    <>
      {modal && <Modal score={score} setModal={setModal} />}
      <div className="title w-full flex justify-center items-center z-0">
        <div className="space-y-2">
          <h1 className="font-bold text-5xl lg:text-7xl text-center w-full">
            Shell Game
          </h1>
          <a
            href="https://alfirman-pahlepi.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="block ml-2 text-center md:text-left hover:underline"
          >
            By alfirman pahlepi
          </a>
        </div>
      </div>
      <div className="space-y-36">
        <div className="flex justify-center items-center space-x-5">
          {radios.map((radio, index) => (
            <InputRadioLabel
              key={index}
              level={radio.level}
              color={radio.color}
              value={radio.level}
              defaultChecked={radio.defaultChecked}
              onChange={(e) => setLevel(e.target.value)}
              disabled={status === "shuffling" || status === "choosing"}
            >
              {radio.level}
            </InputRadioLabel>
          ))}
        </div>
        <div className="w-52 m-auto relative flex justify-center">
          {cups.map((cup, index) => (
            <div
              key={index}
              onClick={() => userChoice(cup.isJackpot)}
              className={`${cup.position} h-10 w-10 bottom-14 cursor-pointer flex box1 absolute leading-10 bg-gray-100 text-gray-700 duration-200`}
            >
              <div
                className={`${
                  cup.isJackpot && "m-auto bg-yellow-400 h-4 w-4 rounded-full"
                }`}
              ></div>
            </div>
          ))}
        </div>
        <div className="w-full text-center">
          <Button
            disabled={status === "shuffling" || status === "choosing"}
            onClick={shuffle}
          >
            {status === "ready" && "Play"}
            {status === "over" && "Game over, Play again?"}
            {status === "shuffling" && "Shuffling..."}
            {status === "choosing" && "Where is the yellow ball?"}
          </Button>
        </div>
      </div>

      <div className="w-full mb-10 space-y-8 ">
        <div className="text-center">
          {status === "over" && score && (
            <button
              onClick={() => setModal(true)}
              className="cursor-pointer hover:underline text-white"
            >
              Publish your score ?
            </button>
          )}
        </div>
        <h2 className="text-3xl text-center md:text-5xl">
          Score : <span className="font-bold">{score}</span>
        </h2>
      </div>
    </>
  );
};

export default Home;

const radios = [
  {
    level: "easy",
    color: "accent-green-600",
    defaultChecked: true,
  },
  {
    level: "medium",
    color: "accent-blue-700",
    defaultChecked: false,
  },
  {
    level: "hard",
    color: "accent-red-600",
    defaultChecked: false,
  },
  {
    level: "hawk eye",
    color: "accent-yellow-700",
    defaultChecked: false,
  },
];
