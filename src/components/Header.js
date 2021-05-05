import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PropTypes from 'prop-types';
import { signInUser, signOutUser } from '../helpers/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
    if (auth) {
      signOutUser();
    } else {
      signInUser();
    }
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (newRoute) => {
    if (newRoute === null) {
      setAnchorEl(null);
    } else {
      history.push(newRoute);
    }
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        {auth && (
            <div>
              <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={handleMenu} aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => handleMenuClick(null)}
              >
                <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
                <MenuItem onClick={() => handleMenuClick('/add-authors/')}>Add Author</MenuItem>
                <MenuItem onClick={() => handleMenuClick('/authors/')}>Authors</MenuItem>
              </Menu>
            </div>
        )}
          <Typography variant="h6" className={classes.title}>
            Players Roster
          </Typography>
          <FormGroup className={classes.loginButton}>
            <FormControlLabel
              control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
              label={auth ? 'Logout' : 'Login'}
            />
          </FormGroup>
        {auth && (
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
        >
          <AccountCircle />
        </IconButton>
        )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  history: PropTypes.object.isRequired,
  user: PropTypes.any
};

export default withRouter(Header);
