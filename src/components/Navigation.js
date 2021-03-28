import React from "react";
import { NavLink } from "react-router-dom";
import { bloop } from "../Assets/Audio";

export const Navigation = () => {
  const home =
    "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z";
  const leaderboard =
    "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z";
  const recent =
    "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z";
  const setting =
    "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z";
  const navs = [home, leaderboard, recent, setting];

  const Icon = ({ d }) => {
    let to = "";
    switch (d) {
      case home:
        to = "/";
        break;
      case leaderboard:
        to = "/leaderboard";
        break;
      case recent:
        to = "/recent";
        break;
      case setting:
        to = "/settings";
        break;
      default:
        break;
    }
    return (
      <li className="flex-1 py-2  text-center lg:text-right">
        <NavLink to={to}>
          <svg
            onClick={() => bloop.play()}
            className="inline-block h-7 w-7 lg:h-9 lg:w-9"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={d}
            />
          </svg>
        </NavLink>
      </li>
    );
  };

  return (
    <nav className="fixed bg-green-600 bottom-0 lg:right-20 lg:w-0 lg:absolute lg:top-10 w-full">
      <ul className="flex lg:block lg:space-y-11 h-full">
        {navs.map((nav, index) => (
          <Icon key={index} d={nav} />
        ))}
      </ul>
    </nav>
  );
};
