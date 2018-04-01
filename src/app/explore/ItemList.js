import React from "react";
import { connect } from "react-redux";
import { getItems } from "./exploreActionCreator";
import { fetchData } from "../../utils/data/API";

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  getItems: (items) => dispatch(getItems(items))
});

class ItemList extends React.Component {

  componentDidMount() {
    this.fetchItems();
  }

  fetchItems() {
    fetchData().then(items => {
      this.props.getItems(items);
    });
  }

  render() {
    const { body } = this.props;

    return (
      <div>
        {"hello"}
      </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);