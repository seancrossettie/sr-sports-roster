import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Grid } from '@material-ui/core';
import { getPlayers } from '../helpers/data/rosterData';
import Header from '../components/Header';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [players, setPlayers] = useState([]);
  const [user, setUser] = useState(null);

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
        getPlayers(userObj.uid).then(setPlayers);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
          <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
              <Routes
              players={players}
              user={user}
              setPlayers={setPlayers}
              />
            </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
