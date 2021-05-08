import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';
import PlayerForm from '../components/PlayerForm';

export default function AddPlayer({ setPlayers, user }) {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <PlayerForm
            setPlayers={setPlayers}
            user={user}
            formTitle={
              <Typography gutterBottom variant="h2">
                Add a Player
              </Typography>
            }
          />
        </Grid>
      </Grid>
    </>
  );
}

AddPlayer.propTypes = {
  setPlayers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};
