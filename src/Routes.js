import { createContext, useContext, useState } from "react";
import { Routes as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import History from "./pages/History";
import Setting from "./pages/Setting";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation";

const Cheat = createContext();

const Routes = () => {
  const [showJackpot, setShowJackpot] = useState(false);
  return (
    <Layout>
      <Navigation />
      <Cheat.Provider value={{ showJackpot, setShowJackpot }}>
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/setting" element={<Setting />} />
        </Router>
      </Cheat.Provider>
    </Layout>
  );
};

export default Routes;

export const useCheat = () => useContext(Cheat);
