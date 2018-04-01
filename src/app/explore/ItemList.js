import React from "react";
import { connect } from "react-redux";
import { fetchItems } from "./exploreActionCreator";

const mapStateToProps = state => ({
  items: state.items,
});

//const mapDispatchToProps = ;

class ItemList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchItems());
  }

  render() {
    const { error, loading, items } = this.props.items;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {items.map(item =>
          <li key={item.id}>{item.title}</li>
        )}
      </ul>
    );
  }
}

export default connect(mapStateToProps)(ItemList);