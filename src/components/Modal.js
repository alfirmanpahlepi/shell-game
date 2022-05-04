import { useState } from "react";
import useSaveData from "../hooks/useSaveData";

export default function Modal({ score, setModal }) {
  const [name, setName] = useState("");
  const { isLoading, saveData } = useSaveData(name, score);

  return (
    <div
      onClick={() => {
        if (!window.confirm("exit?")) return;
        setModal("");
      }}
      className="fixed top-0 left-0 h-screen w-screen bg-black/50 z-50 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-8 bg-white rounded-lg text-black space-y-8"
      >
        <h4 className="text-xl font-semibold">Your score : {score}</h4>
        <div className="flex items-center space-x-3">
          <label htmlFor="fname">Your name :</label>
          <input
            id="fname"
            className="p-1 rounded border border-neutral-500"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <button
          type="button"
          disabled={!name || isLoading}
          onClick={saveData}
          className="w-full py-3 bg-green-400 text-white"
        >
          Publish
        </button>
      </div>
    </div>
  );
}
