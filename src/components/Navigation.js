import React from "react";
import {
  HomeIcon,
  ViewBoardsIcon,
  ClockIcon,
  CogIcon,
} from "@heroicons/react/solid";
import NavLink from "./NavLink";

const navs = [
  {
    icon: HomeIcon,
    link: "/",
  },
  {
    icon: ViewBoardsIcon,
    link: "/leaderboard",
  },
  {
    icon: ClockIcon,
    link: "/history",
  },
  {
    icon: CogIcon,
    link: "/setting",
  },
];

export default function Navigation() {
  return (
    <nav className="fixed bg-green-600 bottom-0 lg:right-20 lg:w-0 lg:absolute lg:top-10 w-full">
      <ul className="flex lg:block lg:space-y-11 h-full">
        {navs.map((nav, index) => (
          <li
            key={index}
            className="text-green-300 hover:text-green-100 flex-1 py-2 text-center lg:text-right"
          >
            <NavLink activeClassName="text-white" to={nav.link}>
              {<nav.icon className="inline-block h-7 w-7 lg:h-9 lg:w-9" />}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
