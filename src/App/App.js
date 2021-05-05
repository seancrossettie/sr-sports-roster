import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getPlayers } from '../helpers/data/rosterData';
import Header from '../components/Header';
import Routes from '../helpers/Routes';
import Login from '../views/Login';
import './App.scss';

function App() {
  const [players, setPlayers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getPlayers().then(setPlayers);
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      <Header />
      {user
        ? <>
          <Routes players={players} setPlayers={setPlayers} />
          </>
        : <Login />
      }
    </>
  );
}

export default App;
