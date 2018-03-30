import React from "react";
import { connect } from "react-redux";
import {increase, decrease} from "./testActions"

const mapStateToProps = state => ({
  data: state.test.data
});

const mapDispatchToProps = dispatch => {
  return {
    increase: value => dispatch(increase(value)),
    decrease: value => dispatch(decrease(value))
  }
}

class SampleComponent extends React.Component {
  handlePlusClick() {
    this.props.increase(1)
  }

  handlePlusClick() {
    this.props.decrease(1)
  }

  render() {
    const { data, increase, decrease } = this.props;

    return (
      <div>
        <button onClick={this.handlePlusClick}>+</button>
        <button onClick={this.handleMinusClick}>-</button>
        <div>
          Data from Redux: {data}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleComponent);
