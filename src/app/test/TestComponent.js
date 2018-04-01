import React from "react";
import { connect } from "react-redux";
import {increase, decrease} from "./testActionCreator";

const mapStateToProps = state => ({
  data: state.test.data
});

const mapDispatchToProps = dispatch => ({
  onPlusClick() {
    dispatch(increase(1))
  },
  onMinusClick() {
    dispatch(decrease(1))
  }
})


class SampleComponent extends React.Component {
  
  handlePlusClick = () => {
    this.props.onPlusClick();
  };

  handleMinusClick = () => {
    this.props.onMinusClick();
  };

  render() {
    const { data } = this.props;

    return (
      <div>
        <button onClick={this.handlePlusClick}>+</button>
        <button onClick={this.handleMinusClick}>-</button>
        <div>Data from Redux: {data}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleComponent);
