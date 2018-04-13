import React from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import { Input, Button, Statistic, Popup, Grid, Modal } from "semantic-ui-react";
import Web3 from "web3";

var web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

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
    amount: 0
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

  render() {
    const { isLinked, balance, receipient, amount } = this.state;

    return <div>
        <NavBar active="about" fixed={true} />
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
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Input placeholder="Receipient Address" fluid name="receipient" value={receipient} onChange={this.handleChange} />
                  </Grid.Column>
                  <Grid.Column>
                    <Input placeholder="Amount" fluid type="number" name="amount" value={amount} onChange={this.handleChange} />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Popup trigger={<Button color="red" content="Red Pill" fluid />} content="Stay in Wonderland, and I show you how deep the rabbit hole goes." position="top center" size="tiny" inverted />
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
