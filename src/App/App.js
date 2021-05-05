import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Typography } from '@material-ui/core';
import Header from '../components/Header';
import Routes from '../helpers/Routes';
import Login from '../views/Login';
import './App.scss';

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
      <Header />
      {user
        ? <>
          <Typography variant='h1'>You Are Logged In</Typography>
        </>
        : <Login />
      }
    </>
  );
}

export default App;
