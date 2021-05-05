import React from 'react';
import PropTypes from 'prop-types';
import PlayerForm from '../components/PlayerForm';

export default function AddPlayer({ setPlayers }) {
  return (
    <>
      <PlayerForm
        setPlayers={setPlayers}
        formTitle={'Add a Player'}
      />
    </>
  );
}

AddPlayer.propTypes = {
  setPlayers: PropTypes.func.isRequired
};
