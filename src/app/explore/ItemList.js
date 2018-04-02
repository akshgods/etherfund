import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { withRouter } from 'react-router-dom';
import { fetchItems } from "./exploreActionCreator";
import { Grid, Container, Card } from "semantic-ui-react";
import ItemCard from "./ItemCard";

const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = dispatch => ({
  navi(desti) {
    dispatch(push(desti));
  }
});

class ItemList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchItems());
    console.log(this.props)
  }

  handleClick = (e) => {
    this.props.dispatch(push("/"));
  }

  render() {
    const { error, loading, items } = this.props.items;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return <Container>
        <Grid>
          <Grid.Column width={4}>{"Search and Filter"}</Grid.Column>
          <Grid.Column width={12}>
            <Card.Group itemsPerRow={3}>
              {items.map(item => (
                <ItemCard
                  onClick={this.handleClick}
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  percent={
                    parseInt(item.raised, 10) /
                    parseInt(item.target, 10) *
                    100
                  }
                  raised={item.raised}
                  dayLeft={Math.round(
                    Math.abs(
                      (new Date(item.due).getTime() -
                        new Date().getTime()) /
                        (24 * 60 * 60 * 1000)
                    )
                  )}
                ></ItemCard>
              ))}
            </Card.Group>
          </Grid.Column>
        </Grid>
      </Container>;
  }
}

export default withRouter(connect(mapStateToProps)(ItemList));