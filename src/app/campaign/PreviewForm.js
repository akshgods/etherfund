import React from "react";
import { Container, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import {  } from "./formActionCreator";

const mapStateToProps = state => ({
  items: state.form.items,
  images: state.form.images
});

const mapDispatchToProps = dispatch => ({
  onSubmitClick(data) {
    dispatch(postItem(data))
  }
})

class BasicForm extends React.Component {

  handleClick = () => {
    this.props.onButtonClick(this.state)
  }

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

    const { title } = this.props.items

    return <Container textAlign="left">
      
      </Container>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicForm);
