import React from 'react';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles/index.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import theme from './styles/theme';
import firebaseConfig from './helpers/apiKeys';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider theme={theme} >
      <Router>
        <CssBaseline />
        <App />
      </Router>
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
);

reportWebVitals();
