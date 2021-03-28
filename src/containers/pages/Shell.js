//lib
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navigation } from "../../components/Navigation";
//pages
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import Recent from "./Recent";
import Settings from "./Settings";

const Shell = () => {
  return (
    <div className="app h-screen w-screen flex bg-green-400 text-white">
      <div className="relative mx-auto px-5 md:px-12 h-full w-11/12 md:w-3/4 bg-green-500  flex flex-wrap justify-center content-between py-10">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/recent" component={Recent} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Shell;
