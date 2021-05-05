import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddPlayer from '../views/AddPlayer';
import Home from '../views/Home';
import Roster from '../views/Roster';

function Routes({ players, setPlayers }) {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/add-players/' component={() => <AddPlayer setPlayers={setPlayers} />} />
      <Route exact path='/roster/' component={() => <Roster players={players} setPlayers={setPlayers} />} />
    </Switch>
  );
}

Routes.propTypes = {
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func.isRequired
};

export default Routes;
