import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField, Button, Grid
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { createPlayer, updatePlayer } from '../helpers/data/rosterData';

const useStyles = makeStyles((theme) => ({
  root: {
    direction: 'column',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const PlayerForm = ({
  formTitle,
  firebaseKey,
  imageUrl,
  name,
  position,
  playerNumber,
  setPlayers,
  user
}) => {
  const [player, setPlayer] = useState({
    firebaseKey: firebaseKey || null,
    imageUrl: imageUrl || '',
    name: name || '',
    position: position || '',
    playerNumber: playerNumber || '',
    uid: user.uid
  });

  const classes = useStyles();

  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'playerNumber' ? Number(e.target.value) : e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player.firebaseKey) {
      updatePlayer(player, user.uid)
        .then(setPlayers);
    } else {
      createPlayer(player, user.uid)
        .then(setPlayers);
    }
  };

  return (
    <Grid container direction='column' wrap='nowrap'>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid item>
          {formTitle}
        </Grid>
        <Grid item>
          <TextField
            label='Name'
            name='name'
            type='text'
            value={player.name}
            onChange={handleInputChange}
            variant='outlined'
            fullWidth
            required
          />
        </Grid>
        <Grid item>
          <TextField
            label='Image URL'
            name='imageUrl'
            type='url'
            value={player.imageUrl}
            onChange={handleInputChange}
            variant='outlined'
            fullWidth
            required
          />
        </Grid>
        <Grid item>
          <TextField
            label='Position'
            name='position'
            type='text'
            value={player.position}
            onChange={handleInputChange}
            variant='outlined'
            fullWidth
            required
          />
        </Grid>
        <Grid item>
          <TextField
            label='Number'
            name='playerNumber'
            type='number'
            value={player.playerNumber}
            onChange={handleInputChange}
            variant='outlined'
            fullWidth
            required
          />
        </Grid>
        <Button type='submit'>Submit</Button>
      </form>
    </Grid>
  );
};

PlayerForm.propTypes = {
  formTitle: PropTypes.object.isRequired,
  setPlayers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  firebaseKey: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  playerNumber: PropTypes.number,
  position: PropTypes.string
};
export default PlayerForm;
