import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddPlayer from '../views/AddPlayer';
import Home from '../views/Home';
import Roster from '../views/Roster';

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/add-players/' component={AddPlayer} />
      <Route exact path='/roster/' component={Roster} />
    </Switch>
  );
}

export default Routes;
