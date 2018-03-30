import React from "react";
import { connect } from "react-redux";

const mapState = state => ({
  data: state.test.data
});

class SampleComponent extends React.Component {
  render() {
    const { data } = this.props;

    return <div>Data from Redux: {data}</div>;
  }
}

export default connect(mapState)(SampleComponent);
