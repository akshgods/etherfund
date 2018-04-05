import React from "react";
import { Container, Form } from "semantic-ui-react";
import DropZone from "./DropZone"

class DetailForm extends React.Component {
  state = {
    story: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { story } = this.state;

    return <Container textAlign="left">
        <h2>Details</h2>
        <Form>
          <Form.TextArea label="Campaign Story" name="story" autoHeight rows={5} onChange={this.handleChange} placeholder="Tell Your Story..." value={story} />

          <Form.Field>
            <label>Campaign Overview Image</label>
            <DropZone />
          </Form.Field>
          <p />

          <Form.Button type="submit" color="green">
            Continue
          </Form.Button>
        </Form>
      </Container>;
  }
} 

export default DetailForm;
