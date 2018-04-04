import React from "react";
import { Container, Form } from "semantic-ui-react";
import DropZone from "./DropZone"

const DetailForm = () => (
  <Container textAlign="left">
    <h2>Details</h2>
    <Form>
      <Form.TextArea
        label="Campaign Story"
        autoHeight
        rows={5}
        placeholder="story..."
        value={"hello"}
      />

      <Form.Field>
         <label>Campaign Overview Image</label>
         <DropZone />
       </Form.Field>
      <p />

      <Form.Button type="submit" color="green">
        Continue
      </Form.Button>
    </Form>
  </Container>
);

export default DetailForm;
