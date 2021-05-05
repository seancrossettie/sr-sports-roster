import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../components/PlayerCards';

function Roster({ players, setPlayers }) {
  return (
    <>
      {players.map((player) => (
        <PlayerCard
          key={player.firebaseKey}
          firebaseKey={player.firebaseKey}
          imageUrl={player.imageUrl}
          name={player.name}
          position={player.position}
          setPlayers={setPlayers}
        />
      ))}
    </>
  );
}

Roster.propTypes = {
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func.isRequired
};

export default Roster;
