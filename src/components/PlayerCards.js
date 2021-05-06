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
import { deletePlayer } from '../helpers/data/rosterData';
import PlayerForm from './PlayerForm';

const useStyles = makeStyles({
  root: {
    width: 345,
    minHeight: 460
  },
  media: {
    height: 300,
  },
});

const PlayerCard = ({
  firebaseKey,
  imageUrl,
  name,
  position,
  playerNumber,
  setPlayers
}) => {
  const [editing, setEditing] = useState(false);
  const classes = useStyles();

  const handleButtonClick = (type) => {
    switch (type) {
      case 'delete':
        deletePlayer(firebaseKey)
          .then(setPlayers);
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
          />
        : <>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={imageUrl}
                title={name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {position} number: {playerNumber}
                </Typography>
              </CardContent>
            </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => handleButtonClick('edit')}>
              Edit
            </Button>
            <Button size="small" color="primary" onClick={() => handleButtonClick('delete')}>
              Delete
            </Button>
          </CardActions>
        </>
      }
    </Card>
  );
};

PlayerCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  playerNumber: PropTypes.number.isRequired,
  setPlayers: PropTypes.func.isRequired
};

export default PlayerCard;
