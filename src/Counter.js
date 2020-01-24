import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  incrementAction,
  decrementAction
} from "./redux/modules/counter/counter";

export const Counter = (props) => {
  const { counter, increment, decrement } = props;
  return (
    <div>
      <p>{counter}</p>
      <button id="increment" type="button" onClick={() => increment()}>
        Increment
      </button>
      <button id="decrement" type="button" onClick={() => decrement()}>
        Decrement
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      increment: incrementAction,
      decrement: decrementAction
    },
    dispatch
  );
};

const mapStateToProps = state => ({
  counter: state.counterReducer.counter
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
