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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const PlayerCard = ({
  // formTitle,
  firebaseKey,
  imageUrl,
  name,
  position,
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
              {position}
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
        {editing
          && <Typography>Edit Form</Typography>
        }
    </Card>
  );
};

PlayerCard.propTypes = {
  // formTitle: PropTypes.string.isRequired,
  firebaseKey: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  setPlayers: PropTypes.func.isRequired
};

export default PlayerCard;
