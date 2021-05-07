import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddPlayer from '../views/AddPlayer';
import Home from '../views/Home';
import Roster from '../views/Roster';
import NotFound from '../components/NotFound';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (burrito) => (user
    ? (<Component {...burrito} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: burrito.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

function Routes({ user, players, setPlayers }) {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/not-found' component={NotFound} />
      <PrivateRoute exact path='/add-players/' user={user} component={() => <AddPlayer setPlayers={setPlayers} user={user}/>} />
      <PrivateRoute exact path='/roster/' user={user} component={() => <Roster players={players} setPlayers={setPlayers} user={user} />} />
      <Route exact path='*' component={NotFound} />
      <PrivateRoute exact path='*' user={user} component={NotFound} />
    </Switch>
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};
Routes.propTypes = {
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Routes;
