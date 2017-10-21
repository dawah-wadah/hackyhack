import React from "react";
import { Card, Rating, Image, Icon } from "semantic-ui-react";

const CardNew = ({ card }) => (
  <Card>
    <Image src="https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg" />
    <Card.Content>
      <Card.Header>{card.name}</Card.Header>
      <Card.Meta>
        <span className="date">
          <Rating icon="heart" defaultRating={card.rating} maxRating={5} />
        </span>
      </Card.Meta>
      <Card.Description>{card.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="ticket" />
        {Math.floor(Math.random() * 50)} Reviews
      </a>
    </Card.Content>
  </Card>
);

export default CardNew;
