import Web3 from "web3";

export const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

export function getWeb3() {
  return new Promise(function(resolve, reject) {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", function(dispatch) {

      const results = {
        web3Instance: web3
      };

      resolve(results);
    });
  });
}
