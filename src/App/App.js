import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Typography, Button } from '@material-ui/core';
import Routes from '../helpers/Routes';
import Login from '../views/Login';
import './App.scss';
import { signOutUser } from '../helpers/auth';

function App() {
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
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      <Routes />
      {user
        ? <>
          <Typography variant='h1'>You Are Logged In</Typography>
          <Button onClick={signOutUser}>Sign Out</Button>
          </>
        : <Login />
      }

    </>
  );
}

export default App;
