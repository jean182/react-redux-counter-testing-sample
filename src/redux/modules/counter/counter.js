const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialState = { counter: 0 };

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// Action Creators
export function incrementAction() {
  return { type: INCREMENT };
}

export function decrementAction() {
  return { type: DECREMENT };
}
