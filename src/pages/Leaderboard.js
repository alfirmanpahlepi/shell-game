import { useEffect, useState } from "react";

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    return () => {
      setPlayers([]);
    };
  }, []);

  return (
    <div className="w-full h-full md:px-16 space-y-10">
      <div>
        <h1 className="text-4xl font-bold text-center">Leaderboard</h1>
      </div>
      <div className="sm:w-4/5 mx-auto h-3/4 bg-white text-green-600 rounded-md overflow-y-auto">
        <table className="mx-auto w-full leading-loose text-center">
          <thead className="bg-green-100">
            <tr className="flex">
              <th className="w-20 sm:w-40">Rank</th>
              <th className="flex-grow">Name</th>
              <th className="w-20 sm:w-40">Score</th>
            </tr>
          </thead>
          <tbody className="">
            {players && //checking player is empty or not
              players
                //sort by highest score
                .sort(function (a, b) {
                  return b.data.score - a.data.score;
                })
                //display all player
                .map((player, index) => (
                  <tr className="flex">
                    <td className="w-20 sm:w-40">{index + 1}</td>
                    <td className="flex-grow">{player.data.name}</td>
                    <td className="w-20 sm:w-40">{player.data.score}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
