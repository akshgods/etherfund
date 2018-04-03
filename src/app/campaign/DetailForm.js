import React from "react";
import { Container, Form, Button, TextArea } from "semantic-ui-react";
import DropZone from "./DropZone"

const DetailForm = () => (
  <Container textAlign="left">
    <h2>Details</h2>
    <Form>
      <h5>Campaign Story</h5>
      <TextArea
        autoHeight
        rows={5}
        placeholder="story..."
        value={"hello"}
        required
      />

      <h5>Campaign Overview Image</h5>
      <DropZone />
      <p></p>

      <Button type="submit" color="green">
        Continue
      </Button>
    </Form>
  </Container>
);

export default DetailForm;
