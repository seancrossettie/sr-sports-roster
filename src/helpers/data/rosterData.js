import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getPlayers = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/players.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve((Object.values(response.data || {}))))
    .catch((error) => reject(error));
});

const createPlayer = (playerObj, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/players.json`, playerObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/players/${response.data.name}.json`, body)
        .then(() => {
          getPlayers(uid).then(resolve);
        });
    })
    .catch((error) => reject(error));
});

const deletePlayer = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/players/${firebaseKey}.json`)
    .then(() => {
      getPlayers(uid).then(resolve);
    })
    .catch((error) => reject(error));
});

const updatePlayer = (player, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/players/${player.firebaseKey}.json`, player)
    .then(() => getPlayers(uid).then(resolve))
    .catch((error) => reject(error));
});

export {
  getPlayers, createPlayer, deletePlayer, updatePlayer
};
