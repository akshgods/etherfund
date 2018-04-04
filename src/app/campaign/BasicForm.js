import React from "react";
import { Container, Form } from "semantic-ui-react";
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

      <Form.TextArea
        autoHeight
        label="Description"
        placeholder="Campaign description..."
        value={"hello"}
        required
      />

      <Form.Field required>
         <label>Campaign Card Image</label>
         <DropZone />
       </Form.Field>

      <h4>Location</h4>
      <Form.Group widths="equal">
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

      <Form.Button type="submit" color="green">
        Continue
      </Form.Button>
    </Form>
  </Container>
);

export default BasicForm;
