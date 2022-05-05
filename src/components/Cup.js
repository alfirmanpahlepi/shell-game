import { useCheat } from "../Routes";

export default function Cup({ cup, status, userChoice }) {
  const { showJackpot } = useCheat();
  return (
    <div
      onClick={() => userChoice(cup.isJackpot)}
      className={`${cup.position} absolute duration-200 cursor-pointer`}
    >
      {cup.isJackpot &&
        (status === "ready" || status === "over" || showJackpot) && (
          <div className="m-auto bg-yellow-400 h-4 w-4 sm:h-8 sm:w-8 rounded-full absolute bottom-0 inset-x-0 z-0 shadow-lg"></div>
        )}
      <div className="relative">
        <img
          src="/cup.png"
          alt="cup"
          // style={{ filter: "contrast(65%) hue-rotate(90deg)" }}
          className={`w-10 sm:w-20 z-20 duration-100 ${
            status === "over" || status === "ready" || showJackpot
              ? "-translate-y-5 sm:-translate-y-10"
              : "translate-y-0"
          }`}
        />
      </div>
    </div>
  );
}
