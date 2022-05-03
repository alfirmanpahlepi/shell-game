import { Routes as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import History from "./pages/History";
import Setting from "./pages/Setting";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation";

const Routes = () => {
  return (
    <Layout>
      <Navigation />
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/setting" element={<Setting />} />
      </Router>
    </Layout>
  );
};

export default Routes;
