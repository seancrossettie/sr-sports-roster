import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import PlayerCard from '../components/PlayerCards';

function Roster({ players, setPlayers }) {
  return (
    <Grid container>
      <Grid item direction="column" sm={2}/>
        <Grid container direction="row" justify="space-evenly" sm={8} spacing={4}>
        {players.map((player) => (
          <Grid item key={player.firebaseKey}>
            <PlayerCard
              {...player}
              setPlayers={setPlayers}
            />
          </Grid>
        ))}
        </Grid>
      <Grid item direction="column" sm={2}/>
    </Grid>
  );
}

Roster.propTypes = {
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func.isRequired
};

export default Roster;
