import React from "react";
import { Container, Image, Grid, Progress, Button, List, Divider, Header, Label, Icon} from "semantic-ui-react";
import { connect } from "react-redux";
//import { postItem } from "./formActionCreator";

const mapStateToProps = state => ({
  items: state.form.items,
  images: state.form.images
});

const mapDispatchToProps = dispatch => ({
  onSubmitClick(data) {
    dispatch()
  }
})

class PreviewForm extends React.Component {

  handleClick = () => {
    this.props.onSubmitClick()
  }

  render() {
    const {
      title,
      currency,
      target,
      runner,
      benefactor,
      description,
      city,
      country,
      category,
      duration,
      story
    } = this.props.items;

    const { cardImgUrl, storyImgUrl } = this.props.images;

    return <Container textAlign="left">
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={8}>
              <Image src={cardImgUrl} />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h2">
                {title}
                <Header.Subheader>{description}</Header.Subheader>
              </Header>
              <List>
                <List.Item>
                  <Label basic>
                    <Icon name="users" />
                    Runner
                    <Label.Detail>{runner}</Label.Detail>
                  </Label>
                </List.Item>
                <List.Item>
                  <Label basic>
                    <Icon name="marker" />
                    {`${city}, ${country}`}
                  </Label>
                </List.Item>
                <List.Item> </List.Item>
                <List.Item>
                  <Label basic>
                    <Icon name="like" />
                    Benefactor
                    <Label.Detail>{benefactor}</Label.Detail>
                  </Label>
                </List.Item>
              </List>
              <div>
                <h3>0 {currency} raised by 0 backers</h3>
                <Progress percent={0} progress indicating>
                  <Grid>
                    <Grid.Column floated="left" textAlign="left" width={8}>
                      <h4>{`0% of ${target} ${currency}`}</h4>
                    </Grid.Column>
                    <Grid.Column floated="right" width={5}>
                      <h4>{`${duration} days left`}</h4>
                    </Grid.Column>
                  </Grid>
                </Progress>
              </div>
              <Divider hidden />
              <div>
                <Button color="pink">BACK IT</Button>
                <Button circular floated="right" color="teal" icon="mail" />
                <Button circular floated="right" color="twitter" icon="twitter" />
                <Button circular floated="right" color="facebook" icon="facebook" />
                <Button circular floated="right" color="red" icon="heart" />
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <div style={{ margin: "10px" }}>
              <Header as="h3" floated="right">
                {category}
              </Header>
              <Divider section />
              <Header as="h4" floated="left">
                {"Overview"}
              </Header>
              <Image src={storyImgUrl} centered fluid bordered rounded />
              <p>{story}</p>
            </div>
          </Grid.Row>
        </Grid>

        <Button type="submit" color="green" onClick={this.handleClick}>
          Submit
        </Button>
      </Container>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewForm);
