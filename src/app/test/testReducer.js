const initialState = {
  data: 44
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case "NUMBER_INCREMENT":
      return Object.assign({}, state, { 
        data: state.data + action.value 
      });
    case "NUMBER_DECREMENT":
      return Object.assign({}, state, {
        data: state.data - action.value
      });
    default:
      return state;
  }
}
