import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import PlayerCard from '../components/PlayerCards';

function Roster({ players, setPlayers, user }) {
  return (
    <Grid container>
      <Grid container direction="column"/>
        <Grid container direction="row" justify="space-evenly" spacing={4}>
          {players.map((player) => (
            <Grid item key={player.firebaseKey} sm={8}>
              <PlayerCard
                firebaseKey={player.firebaseKey}
                imageUrl={player.imageUrl}
                name={player.name}
                position={player.position}
                playerNumber={player.playerNumber}
                setPlayers={setPlayers}
                user={user}
              />
            </Grid>
          ))}
        </Grid>
      <Grid container direction="column"/>
    </Grid>
  );
}

Roster.propTypes = {
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default Roster;
