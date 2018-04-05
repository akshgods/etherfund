import React from "react";
import { Container, Form, Select, Dropdown } from "semantic-ui-react";
import DropZone from "./DropZone"

const options = [
  { key: "tech", text: "TECH & INNOVATION", value: "Tech & Innovation" },
  { key: "art", text: "CREATIVE WORKS", value: "Creative Works" },
  { key: "project", text: "COMMUNITIES", value: "Communities" }
];

class BasicForm extends React.Component {
  state = {
    runner: "",
    benefactor: "",
    description: "",
    city: "",
    country: "",
    duration: 30
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSelectChange = (e, { value }) => {
    this.setState({ category: value });
    console.log(this.state)
  };

  render() {
    const {
      runner,
      benefactor,
      description,
      city,
      country,
      category,
      duration
    } = this.state;

    return <Container textAlign="left">
        <h2>Basics</h2>
        <Form>
          <Form.Input fluid label="Campaign Title" name="title" placeholder="Campaign title..." value={"Hello"} required />

          <Form.Input label="The Runner" name="runner" placeholder="Runner..." value={runner} onChange={this.handleChange} required />

          <Form.Input label="The Benefactor" name="benefactor" placeholder="Benefactor..." value={benefactor} onChange={this.handleChange} required />

          <Form.TextArea autoHeight label="Description" name="description" placeholder="Campaign description..." value={description} onChange={this.handleChange} required />

          <Form.Field required>
            <label>Campaign Card Image</label>
            <DropZone />
          </Form.Field>

          <h4>Location</h4>
          <Form.Group widths="equal">
            <Form.Input label="City" name="city" placeholder="City" type="text" value={city} onChange={this.handleChange} required />
            <Form.Input label="Country" name="country" placeholder="Country" type="text" value={country} onChange={this.handleChange} required />
          </Form.Group>

          <Form.Field required>
            <label>Category</label>
            <Dropdown onChange={this.handleSelectChange} options={options} placeholder="Select a Category" selection value={category} />
          </Form.Field>

          <Form.Input fluid label="Campaign Duration" name="duration" type="number" width={5} value={duration} onChange={this.handleChange} required />

          <h5>
            Due Date:
            {Date()}
          </h5>

          <Form.Button type="submit" color="green">
            Continue
          </Form.Button>
        </Form>
      </Container>;
  }
} 

export default BasicForm;
