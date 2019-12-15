import React from "react";
import { connect } from "react-redux";

const CounterContainer = ({ counter, handleCounter }) => (
  <div>
    <p id="render-store">{counter}</p>
    <button id="add10" onClick={handleCounter}>
      +10
    </button>
    <button id="add1" onClick={handleCounter}>
      +1
    </button>
    <button id="reset" onClick={handleCounter}>
      reset
    </button>
    <button id="remove1" onClick={handleCounter}>
      -1
    </button>
    <button id="remove10" onClick={handleCounter}>
      -10
    </button>
  </div>
);

const mapStateToProps = state => ({ counter: state });

const mapDispatchToProps = dispatch => ({
  handleCounter: event => {
    dispatch({ type: event.target.id.toUpperCase() });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
