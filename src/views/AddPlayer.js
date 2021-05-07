import React from 'react';
import PropTypes from 'prop-types';
import PlayerForm from '../components/PlayerForm';

export default function AddPlayer({ setPlayers, user }) {
  return (
    <>
      <PlayerForm
        setPlayers={setPlayers}
        user={user}
        formTitle={'Add a Player'}
      />
    </>
  );
}

AddPlayer.propTypes = {
  setPlayers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};
