import React from "react";
import { Container, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import ItemMain from "../explore/ItemMain"
//import { postItem } from "./formActionCreator";

const mapStateToProps = state => ({
  items: state.form.items,
  images: state.form.images
});

const mapDispatchToProps = dispatch => ({
  onSubmitClick(data) {
    dispatch()
  }
})

class PreviewForm extends React.Component {

  handleClick = () => {
    this.props.onSubmitClick()
  }

  render() {

    return <Container textAlign="left">
        <ItemMain { ...this.props.items} { ...this.props.images } />

        <Button type="submit" color="green" onClick={this.handleClick}>
          Submit
        </Button>
      </Container>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewForm);
