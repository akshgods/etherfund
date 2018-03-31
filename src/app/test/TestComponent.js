import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as testActionCreators from "./testActions"

const mapStateToProps = state => ({
  data: state.test.data
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(testActionCreators, dispatch)
});


class SampleComponent extends React.Component {

  render() {
    const { data, action } = this.props;

    return <div>
        <button onClick={() => action.increase(1)}>+</button>
        <button onClick={() => action.decrease(1)}>-</button>
        <div>Data from Redux: {data}</div>
      </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleComponent);
