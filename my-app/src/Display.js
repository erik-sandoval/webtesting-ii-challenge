import React from 'react';

const Display = props => {
  return (
    <div>
      <h1>Scoreboard</h1>
      <p>Strikes: {props.state.strike}</p>
      <p>Balls: {props.state.ball}</p>
    </div>
  );
};
export default Display;
