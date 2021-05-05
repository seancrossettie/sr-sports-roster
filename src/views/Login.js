import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { signInUser } from '../helpers/auth';

const Login = () => (
    <div>
      <Typography variant='h3'>Login with Google Below</Typography>
      <Button
        onClick={signInUser}
        color='secondary'
        variant='contained'
        size='large'
      >
        Login
      </Button>
    </div>
);

export default Login;
