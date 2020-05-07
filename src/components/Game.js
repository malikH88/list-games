import React from 'react';

const Game = (props) => {
  return (
    <section>
      <h1>{props.data.name}</h1>
      <img src={props.data.background_image} width="500" />
    </section>
  )
};

export default Game;
