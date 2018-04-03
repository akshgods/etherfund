import React from "react";
import { Container, Form, Button, TextArea } from "semantic-ui-react";
import DropZone from "./DropZone"

const options = [
  { key: "tech", text: "TECH & INNOVATION", value: "Tech & Innovation" },
  { key: "art", text: "CREATIVE WORKS", value: "Creative Works" },
  { key: "project", text: "COMMUNITIES", value: "Communities" }
];

const BasicForm = () => (
  <Container textAlign="left">
    <h2>Basics</h2>
    <Form>
      <Form.Input
        fluid
        label="Campaign Title"
        placeholder="Campaign title..."
        value={"hello"}
        required
      />

      <Form.Input
        label="The Runner"
        placeholder="Runner..."
        value={"hello"}
        required
      />

      <Form.Input
        label="The Benefactor"
        placeholder="Benefactor..."
        value={"hello"}
        required
      />

      <h5>Description</h5>
      <TextArea
        autoHeight
        placeholder="Campaign description..."
        value={"hello"}
        required
      />

      <h5>Campaign Card Image</h5>
      <DropZone />

      <h5>Location</h5>
      <Form.Group widths="equal" label="Location">
        <Form.Input label="City" placeholder="City" type="text" required />
        <Form.Input
          label="Country"
          placeholder="Country"
          type="text"
          required
        />
      </Form.Group>

      <Form.Select
        label="Category"
        options={options}
        placeholder="Select a category"
        required
      />

      <Form.Input
        fluid
        label="Campaign Duration"
        type="number"
        width={5}
        value={30}
        required
      />

      <h5>
        Due Date:
        {Date()}
      </h5>

      <Button type="submit" color="green">
        Continue
      </Button>
    </Form>
  </Container>
);

export default BasicForm;
