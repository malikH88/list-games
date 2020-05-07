import React from 'react';

import Game from './Game';

import Axios from 'axios';

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    Axios.get('https://wild-games.herokuapp.com/api/v1')
      .then((response) => {
        this.setState({games: response.data});
      });
  }

  render() {
    return (
      this.state.games.map((game) => <Game data={game} deleteGame={() => {
        this.setState({games: this.state.games.filter((toFilter) => toFilter.id !== game.id)});
      }} />)
    )
  }
}

export default GameList;
