import React from 'react'
import { Consumer } from "./Context";
import Player from "./Player";

const PlayerList = () => {
    return(
        <Consumer>
            { ({ players, highScore }) => (
                <React.Fragment>
                    {/* Players list */}
                    { players.map( (player, index) =>
                        <Player
                            key={player.id.toString()}
                            index={index}
                            isHighScore={ player.score === highScore }
                        />
                    )}
                </React.Fragment>
            )}
        </Consumer>
    )
};

export default PlayerList