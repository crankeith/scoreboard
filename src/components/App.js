import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Andrew",
        score: 0,
        id: 1
      },
      {
        name: "Leslie",
        score: 0,
        id: 2
      },
      {
        name: "Brad",
        score: 0,
        id: 3
      },
      {
        name: "Chris",
        score: 0,
        id: 4
      }
    ]
  };

  //player id counter
  prevPlayerId = 4;

  handleScoreChange = ( delta, index ) => {
      this.setState( prevState => ({
          score: prevState.players[index].score += delta
      }));
  };

  handleAddPlayer = ( name ) => {
    this.setState(prevState => ({
        players: [
            ...prevState.players,
            {
              name,
              score: 0,
              id: this.prevPlayerId += 1
            }
        ]
    }));
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };

    getHighScore = () => {
        const scores = this.state.players.map( p => p.score );
        const highScore = Math.max(...scores);
        if (highScore) {
            return highScore;
        }
        return null;
    };

    render() {
    const { players } = this.state;
    const highScore = this.getHighScore();


    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={ players }
        />
  
        {/* Players list */}
        { players.map( (player, index) =>
          <Player 
            name={player.name}
            id={player.id}
            score={player.score}
            key={player.id.toString()}
            index={index}
            isHighScore={ player.score === highScore }
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
