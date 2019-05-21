import React, { Component } from 'react';
import { Consumer } from "./Context";

class AddPlayerForm extends Component {
    //Example of uncontrolled component
    playerInput = React.createRef();

    handleSubmit = (e, addPlayer) => {
      e.preventDefault();
      addPlayer(this.playerInput.current.value);
      e.currentTarget.reset();
    };

    render(){

        return(
            <Consumer>
                {({ actions }) => (
                    <form onSubmit={ ( e ) => { this.handleSubmit(e, actions.addPlayer) }}>
                        <input
                            type="text"
                            placeholder="Enter a players name"
                            ref={ this.playerInput }
                        />
                        <input
                            type="submit"
                            value="Add Player"
                        />
                    </form>
                )}
            </Consumer>
        )
    }
}

export default AddPlayerForm;