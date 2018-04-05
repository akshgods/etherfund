import React from "react";
import { Container, Form } from "semantic-ui-react";

const options = [
  { key: "eth", text: "ETH", value: "eth" },
  { key: "usd", text: "USD", value: "usd" }
];

class TargetForm extends React.Component {
  state = {
    target: 50,
    title: ""
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  }
  
  render() {

    const { target, title } = this.state

    return <Container textAlign="left">
        <h2>Start a campaign</h2>
        <Form>
          <Form.Field label="How much money would you like to raise?" />
          <Form.Group>
            <Form.Input name="target" placeholder="minimum 50" type="number" onChange={this.handleChange} value={target} />
            <Form.Select options={options} defaultValue="eth" />
          </Form.Group>
          <label>50 ETH Min</label>
          <p />
          <p />
          <Form.Input name="title" label="What is the title of your campaign?" required fluid onChange={this.handleChange} value={title} placeholder="Campaign title..." />
          <Form.Button type="submit" color="green">
            Continue
          </Form.Button>
        </Form>
      </Container>;
  }
}

export default TargetForm;
