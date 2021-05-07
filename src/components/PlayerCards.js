import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { deletePlayer } from '../helpers/data/rosterData';
import PlayerForm from './PlayerForm';

const useStyles = makeStyles({
  root: {
    height: '350px'
  },
  media: {
    height: '150px'
  },
});

const PlayerCard = ({
  firebaseKey,
  imageUrl,
  name,
  position,
  playerNumber,
  setPlayers,
  user
}) => {
  const [editing, setEditing] = useState(false);
  const classes = useStyles();

  const handleButtonClick = (type) => {
    switch (type) {
      case 'delete':
        deletePlayer(firebaseKey, user.uid)
          .then((response) => setPlayers(response));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('No action selected');
    }
  };

  return (
    <Card className={classes.root} key={firebaseKey}>
      {editing
        ? <PlayerForm
            formTitle={'Edit Player Info'}
            setPlayers={setPlayers}
            firebaseKey={firebaseKey}
            imageUrl={imageUrl}
            name={name}
            position={position}
            playerNumber={playerNumber}
            user={user}
          />
        : <>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={imageUrl}
                title={name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" paragraph='true'>
                  {name}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  {position}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  #{playerNumber}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Grid container>
              <CardActions>
                <Grid item xs={6}>
                  <Button size="small" color="primary" onClick={() => handleButtonClick('edit')}>
                    Edit
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button size="small" color="secondary" onClick={() => handleButtonClick('delete')}>
                    Delete
                  </Button>
                </Grid>
              </CardActions>
            </Grid>
        </>
      }
    </Card>
  );
};

PlayerCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  setPlayers: PropTypes.func.isRequired,
  user: PropTypes.any.isRequired,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  playerNumber: PropTypes.number,
};

export default PlayerCard;
