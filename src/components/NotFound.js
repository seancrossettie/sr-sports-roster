import React from 'react';

import { Typography, Grid } from '@material-ui/core';

export default function NotFound() {
  return (
    <>
      <Grid container justify="center">
        <Grid item>
          <Typography variant='h2'>Page Not Found</Typography>
        </Grid>
      </Grid>
    </>
  );
}
