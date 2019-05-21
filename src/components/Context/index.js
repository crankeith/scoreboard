import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {

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

    render(){

        const { players } = this.state;
        const { children } = this.props;
        const highScore = this.getHighScore();

        return(
            <ScoreboardContext.Provider value={{
                players,
                highScore,
                actions: {
                    changeScore: this.handleScoreChange,
                    addPlayer: this.handleAddPlayer,
                    removePlayer: this.handleRemovePlayer
                }
            }}>
                { children }
            </ScoreboardContext.Provider>
        );
    }
}
export const Consumer = ScoreboardContext.Consumer;