import { useEffect, useState } from "react";
import TimeAgo from "react-timeago";
import { SearchInput } from "../components/SearchInput";
import { getPlayers } from "../config/firebase";
import { useCheat } from "../Routes";

const History = () => {
  const { setShowJackpot } = useCheat();
  const [players, setPlayers] = useState([]);
  const [filtered, setFilterd] = useState([]);
  const [search, setSearch] = useState("");

  //get input user
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //fetch all data
  useEffect(() => {
    getPlayers().then((res) => {
      setPlayers(res);
      setFilterd(res);
    });
    return () => {
      setPlayers([]);
    };
  }, []);

  //fetch filtered data
  useEffect(() => {
    const results = filtered.filter((res) =>
      res.data.name.toLowerCase().includes(search)
    );
    setPlayers(results);
  }, [search, filtered]);

  useEffect(() => {
    if (search === "SHOWJACKPOT") {
      alert("cheat activated!")
      setShowJackpot(true);
    }
  }, [search, setShowJackpot]);

  console.log(search);

  return (
    <div className="w-full h-full md:px-16 space-y-10">
      <div>
        <h1 className="text-4xl font-bold text-center">History</h1>
      </div>
      <div className="sm:w-4/5 mx-auto h-3/4 bg-white text-violet-600 rounded-md overflow-y-auto py-3 space-y-3">
        <SearchInput search={search} handleSearch={handleSearch} />
        <table className="mx-auto w-full leading-loose text-center">
          <thead className="bg-violet-100">
            <tr className="flex ">
              <th className="flex-1 ">Name</th>
              <th className="">Score</th>
              <th className="flex-1 ">Time</th>
            </tr>
          </thead>
          <tbody>
            {players &&
              players
                //sort by date
                .sort(function (a, b) {
                  return new Date(b.data.time) - new Date(a.data.time);
                })
                .map((player, index) => (
                  <tr key={index} className="flex mt-3">
                    <td className="flex-1 ">{player.data.name}</td>
                    <td className="">{player.data.score}</td>
                    <td className="flex-1 ">
                      <span className="bg-violet-200 rounded-xl px-3 py-1">
                        <TimeAgo date={player.data.time} />
                      </span>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
