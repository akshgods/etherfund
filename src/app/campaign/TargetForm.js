import React from "react";
import { Container, Form, Button } from "semantic-ui-react";

const options = [
  { key: "eth", text: "ETH", value: "eth" },
  { key: "usd", text: "USD", value: "usd" }
];

const TargetForm = () => (
  <Container textAlign="left">
    <h2>Start a campaign</h2>
    <Form>
      <h5>How much money would you like to raise?</h5>
      <Form.Group>
        <Form.Input placeholder="minimum" type="number" defaultValue="50" />
        <Form.Select options={options} defaultValue="eth" />
      </Form.Group>
      <h5>What is the title of your campaign?</h5>
      <Form.Input fluid placeholder="Campaign title..." />
      <Button type="submit" color="green">
        Continue
      </Button>
    </Form>
  </Container>
);

export default TargetForm;
