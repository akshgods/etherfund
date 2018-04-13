import React from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import { Input, Button, Statistic, Popup, Grid, Modal, Message } from "semantic-ui-react";
import { web3 } from "../../utils/web3/getWeb3"

const mapStateToProps = state => ({
  web3: state.web3.web3Instance,
});

class Wallet extends React.Component {
  state = {
    isLinked: false,
    key: "",
    account: "",
    balance: 0,
    receipient: "",
    amount: 0,
    message: null
  };

  componentDidMount() {
    web3.eth.getAccounts().then(res => {
      if (res.length > 0) {
        this.setState({ account: res[0].toString(), isLinked: true });
      }
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    web3.eth.getBalance(this.state.account).then(res => {
      this.setState({ balance: web3.utils.fromWei(res, "ether") });
    });
  };

  handleTransfer = () => {
    if(this.state.account && this.state.receipient)
    web3.eth.sendTransaction({
      from: this.state.account,
      to: this.state.receipient,
      value: web3.utils.toWei(this.state.amount, "ether")
    }).then(receipt => {
      this.setState({message: "Transaction Completed!"})
      setTimeout(() => this.setState({message: null}), 3000);
      console.log(receipt)
      this.setState({receipient: "", amount: 0})
    })
  }

  render() {
    const { isLinked, balance, receipient, amount, message } = this.state;

    return <div>
        <NavBar active="" fixed={true} />
        <div style={{ paddingTop: "6em" }}>
          {isLinked ? "" : <Input name="key" label="Link to your private key" onChange={this.handleChange} placeholder="Search..." />}
          <Button secondary onClick={this.handleClick}>
            Link To Your Account
          </Button>
          <p />
          <div>
            <Statistic size="tiny">
              <Statistic.Label>Balance</Statistic.Label>
              <Statistic.Value>{balance} ETH</Statistic.Value>
            </Statistic>
          </div>
          <p />
          <Modal size="tiny" trigger={<Button compact secondary content="Send" />}>
            <Modal.Header>Transaction</Modal.Header>
            <Modal.Content>
              {message? <Message info>
                {message}
              </Message> : ""}
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Input required placeholder="Receipient Address" fluid name="receipient" value={receipient} onChange={this.handleChange} />
                  </Grid.Column>
                  <Grid.Column>
                    <Input required placeholder="Amount" fluid type="number" name="amount" value={amount} onChange={this.handleChange} />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Popup style={{color: "red"}} trigger={<Button color="red" onClick={this.handleTransfer} content="Submit" fluid />} content="When it goes away, it will never come back. So be careful!" position="bottom center" size="tiny" />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Modal.Content>
          </Modal>
        </div>
      </div>;
  }
}

export default connect(mapStateToProps)(Wallet);
