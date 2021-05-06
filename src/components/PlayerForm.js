import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField, Button, Grid, Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { createPlayer, updatePlayer } from '../helpers/data/rosterData';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
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
  setPlayers
}) => {
  const [player, setPlayer] = useState({
    firebaseKey: firebaseKey || null,
    imageUrl: imageUrl || '',
    name: name || '',
    position: position || '',
    playerNumber: playerNumber || '',
  });

  const classes = useStyles();

  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player.firebaseKey) {
      updatePlayer(player)
        .then(setPlayers);
    } else {
      createPlayer(player)
        .then(setPlayers);
    }
  };

  return (
    <>
      <Grid container direction='row'>
          <Grid container direction='column'>
            <Grid item>
            <Typography gutterBottom variant="h5" component="h2">
              {formTitle}
            </Typography>
            </Grid>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid item>
          <TextField
            label="Name"
            name='name'
            type='text'
            value={player.name}
            onChange={handleInputChange}
            variant="outlined"
            required
          />
          </Grid>
          <Grid item>
            <TextField
              label="Image Url"
              variant="outlined"
              name='imageUrl'
              type='url'
              value={player.imageUrl}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              label="Position"
              variant="outlined"
              name='position'
              type='text'
              value={player.position}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              label="Number"
              variant="outlined"
              name='number'
              type='text'
              value={player.number}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Button type='submit'>Submit</Button>
        </form>
        </Grid>

      </Grid>
    </>
  );
};

PlayerForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setPlayers: PropTypes.func.isRequired,
  firebaseKey: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  playerNumber: PropTypes.number,
  position: PropTypes.string
};
export default PlayerForm;
