import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import PlayerCard from '../components/PlayerCards';

function Roster({ players, setPlayers, user }) {
  return (
        <Grid container spacing={3}>
            {players.map((player) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={player.firebaseKey}>
              <PlayerCard
                {...player}
                setPlayers={setPlayers}
                user={user}
              />
              </Grid>
            ))}
        </Grid>
  );
}

Roster.propTypes = {
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default Roster;
