import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../components/PlayerCards';

function Roster({ players, setPlayers }) {
  return (
    <div>
      {players.map((player) => (
        <PlayerCard
          key={player.firebaseKey}
          {...player}
          setPlayers={setPlayers}
        />
      ))}
    </div>
  );
}

Roster.propTypes = {
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func.isRequired
};

export default Roster;
