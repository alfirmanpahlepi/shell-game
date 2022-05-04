import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export default firebase;

//ACTION--------------------------------------------------------------

export const getPlayers = () => {
  const datas = database.ref(`players/`);
  return new Promise((resolve, reject) => {
    datas.on("value", (snapshot) => {
      const data = [];
      if (snapshot.val()) {
        // MEMBUAT OBJECT MENJADI ARRAY
        Object.keys(snapshot.val()).map((key) => {
          return data.push({
            id: key,
            data: snapshot.val()[key],
          });
        });
        resolve(data);
      } else {
        alert("data not found");
      }
    });
  });
};

export const postPlayerData = (name, score, time) => {
  return new Promise((resolve, reject) => {
    database
      .ref("players/")
      .push({ name, score, time })
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
};

export const updatePlayerData = (playerId, name, score, time) => {
  return new Promise((resolve, reject) => {
    database
      .ref(`players/${playerId}`)
      .set({ name, score, time })
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
};
