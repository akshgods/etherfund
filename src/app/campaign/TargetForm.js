import React from "react";
import { Container, Form } from "semantic-ui-react";

const options = [
  { key: "eth", text: "ETH", value: "eth" },
  { key: "usd", text: "USD", value: "usd" }
];

const TargetForm = () => (
  <Container textAlign="left">
    <h2>Start a campaign</h2>
    <Form>
      <Form.Field label='How much money would you like to raise?'/>
      <Form.Group>
        <Form.Input placeholder="minimum" type="number" defaultValue="50" />
        <Form.Select options={options} defaultValue="eth" />
      </Form.Group>
      <label>50 ETH Min</label>
      <p />
      <p />
      <Form.Input label="What is the title of your campaign?" required fluid placeholder="Campaign title..." />
      <Form.Button type="submit" color="green">
        Continue
      </Form.Button>
    </Form>
  </Container>
);

export default TargetForm;
