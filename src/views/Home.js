import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  contentWrapper: {
    margin: '20%',
  }
});

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.contentWrapper}>
        <Grid item>
          <Typography variant='h1'>LA Lakers Roster</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
