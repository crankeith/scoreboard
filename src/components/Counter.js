import React from 'react';
import PropTypes from 'prop-types';

const Counter = ( { index, score, changeScore } ) => {

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={ () => changeScore(-1, index) }> - </button>
      <span className="counter-score">{ score }</span>
      <button className="counter-action increment" onClick={  () => changeScore(1, index) }> + </button>
    </div>
  );
};

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
};

export default Counter;