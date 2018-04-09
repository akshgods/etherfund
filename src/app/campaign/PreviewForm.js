import React from "react";
import { Container, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import ItemMain from "../explore/ItemMain"
import { postCampaign } from "./formActionCreator";

const mapStateToProps = state => ({
  items: state.form.items,
  images: state.form.images,
  postStatus: state.form.postStatus,
  token: state.auth.token,
  runner_id: state.auth.userInfo.userId
});

const mapDispatchToProps = dispatch => ({
  onSubmitClick(data, token) {
    dispatch(postCampaign(data, token));
  }
})

class PreviewForm extends React.Component {

  handleClick = (e) => {
    e.preventDefault()
    const item = {...this.props.items, ...this.props.images, runner_id: this.props.runner_id}
    this.props.onSubmitClick(item, this.props.token)
  }

  render() {

    return <Container textAlign="left">
        <ItemMain { ...this.props.items} { ...this.props.images } />

        <Button color="green" onClick={this.handleClick}>
          Submit
        </Button>
      </Container>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewForm);
