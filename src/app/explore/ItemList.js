import React from "react";
import { connect } from "react-redux";
import { fetchItems } from "./exploreActionCreator";
import { Grid, Container, Card, Loader, Dimmer, Input } from "semantic-ui-react";
import ItemCard from "./ItemCard";
import history from "../../utils/history"

const mapStateToProps = state => ({
  items: state.items,
});

class ItemList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchItems());
    console.log(this.props)
  }

  handleClick = (id) => {
    history.push("/explore/" + id);
  }

  render() {
    const { error, loading, items } = this.props.items;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading && items.length === 0){
      return <Container>
        <Dimmer active inverted>
          <Loader size='large'>Loading</Loader>
        </Dimmer>
      </Container>
    }

    return <Container>
        <Grid>
          <Grid.Column width={4}>{"Filters"}</Grid.Column>
          <Grid.Column width={12}>
            <Container style={{ padding: "0em 0em 1em" }}>
              <Input action={{ color: "grey", labelPosition: "left", icon: "search", content: "Search" }} actionPosition="left" placeholder="Search..." fluid />
            </Container>
            <Card.Group itemsPerRow={3}>
              {items.map(item => (
                <ItemCard
                  onClick={() => this.handleClick(item.id)}
                  key={item.id}
                  { ...item }
                />
              ))}
            </Card.Group>
          </Grid.Column>
        </Grid>
      </Container>;
  }
}

export default connect(mapStateToProps)(ItemList);
