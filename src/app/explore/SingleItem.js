import React from 'react';
import ItemMain from './ItemMain'
import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom'
import { Container, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  items: state.items,
});

class SingleItem extends React.Component {

  render() {
    const {items} = this.props.items

    const item = items.filter(item => {
      return (item.id === this.props.match.params.id)
    })

    return (
      <div>
        <NavBar active="explore" fixed={true} />
        <Container textAlign="left" style={{paddingTop: '5em'}}>
          <Container textAlign='left' style={{paddingBottom: '1em'}}>
            <Link to="/explore"><Icon name='long arrow left' />{"Back to Main Page"}</Link>
          </Container>
          <ItemMain { ...item[0] } />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SingleItem);
