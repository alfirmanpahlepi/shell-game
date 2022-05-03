import { Routes as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import History from "./pages/History";
import Setting from "./pages/Setting";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/history" element={<History />} />
      <Route path="/setting" element={<Setting />} />
    </Router>
  );
};

export default Routes;
