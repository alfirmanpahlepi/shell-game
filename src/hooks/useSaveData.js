import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getPlayers,
  postPlayerData,
  updatePlayerData,
} from "../config/firebase";
import getFormattedDate from "../utils/getFormattedDate";

export default function useSaveData(name, score) {
  const push = useNavigate();
  const [players, setPlayers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const saveData = () => {
    setLoading(true);
    const time = getFormattedDate();

    const player = players.find((player) => player.data.name === name);

    if (!player) {
      postPlayerData(name, score, time)
        .then(() => push("/history"))
        .catch((e) => console.log("post error", e))
        .finally(() => setLoading(false));
    } else {
      if (score < player.data.score) {
        alert("your score is lower than before");
        setLoading(false);
        return;
      }
      updatePlayerData(player.id, name, score, time)
        .then(() => push("/history"))
        .catch((e) => console.log("post error", e))
        .finally(() => setLoading(false));
    }
  };

  useEffect(() => {
    getPlayers().then((res) => {
      setPlayers(res);
    });
    return () => {
      setPlayers([]);
    };
  }, []);
  return { isLoading, saveData };
}
