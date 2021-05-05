import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getPlayers = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/players.json`)
    .then((response) => resolve((Object.values(response.data || {}))))
    .catch((error) => reject(error));
});

const createPlayer = (playerObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/players.json`, playerObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/players/${response.data.name}.json`, body)
        .then(() => {
          getPlayers().then(resolve);
        });
    })
    .catch((error) => reject(error));
});

const deletePlayer = (firebaseKey) => new Promise((reject, resolve) => {
  axios.delete(`${dbURL}/players/${firebaseKey}.json`)
    .then(() => {
      getPlayers().then(resolve);
    })
    .catch((error) => reject(error));
});

const updatePlayer = (player) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/players/${player.firebaseKey}.json`, player)
    .then(() => getPlayers().then(resolve))
    .catch((error) => reject(error));
});

export {
  getPlayers, createPlayer, deletePlayer, updatePlayer
};
