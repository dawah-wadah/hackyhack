import React from "react";
import { Card, Rating, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

// <Link to={`/events/${p.number}`}>
const CardNew = ({ card }) => (
    <Card>
      <Link to={`/events/1`}>
      <Image src={card.image} size='massive' />
      <Card.Content>
        <Card.Header>{card.name}</Card.Header>
        <Card.Meta>
          <span className="date">
            <Rating icon="heart" defaultRating={Math.floor(card.rating)} maxRating={5} />
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
    </Link>
    </Card>
);

export default CardNew;
