const initialState = {
  data: 44
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case "NUMBER_INCREMENT":
      return state + action.value;
    case "NUMBER_DECREMENT":
      return state - action.value;
    default:
      return state;
  }
}
