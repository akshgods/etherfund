import { getWeb3 } from "./getWeb3";

export function web3() {
  return dispatch => {
    return getWeb3()
      .then(response => {
        dispatch(web3Initialized(response));
        return response;
      })
  };
}

export const web3Initialized = results => {
  return {
    type: 'WEB3_INITIALIZED',
    payload: results
  }
}
