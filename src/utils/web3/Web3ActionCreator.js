import { web3, getWeb3 } from "./getWeb3";
import EtherFund from "./contracts/EtherFund.json"
import bytecode from "./contracts/bytecode"
import { updateCampaign } from "../../app/campaign/formActionCreator"

export function InitiateWeb3() {
  return dispatch => {
    return getWeb3()
      .then(response => {
        dispatch(web3Initialized(response));
        return response;
      })
  };
}

export function web3GetBalance(account) {
  return dispatch => {
    return web3.eth.getBalance(account).then(res => {
      dispatch(web3UpdateBalance(res))
    });
  }
}

export function deployContract(options, token) {
  return dispatch => {
    dispatch(web3DeployContractStart());
    const etherFundContract = new web3.eth.Contract(EtherFund.abi);
    web3.eth.getAccounts().then(res => {
      etherFundContract.options.address = res[0];
      etherFundContract.options.from = res[0];
      etherFundContract
        .deploy({ data: bytecode, arguments: options })
        .send(
          {
            from: res[0]
          }
        )
        .on("error", error => {
          console.log(error);
        })
        .on("receipt", receipt => {
          dispatch(web3DeployContract(receipt.contractAddress)); // contains the new contract address
        })
        .then(newContractInstance => {
          // instance with the new contract address
          dispatch(updateCampaign(options[1], { contractAddress: newContractInstance.options.address }, token));
        });
    })
  }
}

export function web3SendTransaction(data) {
  return dispatch => {
    return dispatch(web3MakeTransaction(data))
  }
}

export const web3Initialized = results => {
  return {
    type: 'WEB3_INITIALIZED',
    payload: results
  }
}

export const web3GetAccount = results => {
  return {
    type: 'WEB3_ACCOUNT_GET',
    payload: results
  }
}

export const web3UpdateBalance = results => {
  return {
    type: 'WEB3_BALANCE_UPDATED',
    payload: web3.utils.fromWei(results, "ether")
  }
}

export const web3MakeTransaction = receipt => {
  return {
    type: 'WEB3_TRANSCATION_MADE',
    payload: receipt
  }
}

export const web3DeployContractStart = () => {
  return {
    type: 'WEB3_CONTRACT_DEPLOY_START',
    isLoading: true
  }
}

export const web3DeployContract = address => {
  return {
    type: 'WEB3_CONTRACT_DEPLOYED',
    payload: address,
    isLoading: false
  }
}
