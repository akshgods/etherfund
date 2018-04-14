const initialState = {
  web3Instance: null
}

const web3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "WEB3_INITIALIZED":
      return Object.assign({}, state, {
        web3Instance: action.payload.web3Instance.eth
      });
    case "WEB3_GET_BALANCE":
      return Object.assign({}, state, {
        balance: action.payload
      });
    case "WEB3_MAKE_TRANSCATION":
      return {...state}

    default:
      return state;
  }
}

export default web3Reducer
