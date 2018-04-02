import React from "react";
import { Card, Icon, Image, Progress, Grid } from "semantic-ui-react";

const ItemCard = props => (
  <Card style={{ textAlign: "left" }} raised onClick={props.onClick}>
    <Image src={props.image} />
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>
        <span>{props.description}</span>
      </Card.Meta>
      <Card.Description>
        <span>{`${props.raised} ETH raised`}</span>
        <Progress percent={props.percent} indicating progress />
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="time" />
        {props.dayLeft} days left
      </a>
    </Card.Content>
  </Card>
);

export default ItemCard;
