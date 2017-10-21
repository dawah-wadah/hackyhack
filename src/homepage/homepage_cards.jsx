import React from "react";
import CardNew from "./Card.jsx";
import { Card } from "semantic-ui-react";

class CardList extends React.Component {


  render() {
    let cards = [
      {
        name: "Lasagna",
        rating: Math.floor(Math.random() * 5),
        description: "The best Shit Ever"
      },
      {
        name: "Pizza",
        rating: Math.floor(Math.random() * 5),
        description: "The best Shit Ever"
      },
      {
        name: "Shit",
        rating: Math.floor(Math.random() * 5),
        description: "The best Shit Ever"
      },
      {
        name: "Shit",
        rating: Math.floor(Math.random() * 5),
        description: "The best Shit Ever"
      },
      {
        name: "Shit",
        rating: Math.floor(Math.random() * 5),
        description: "The best Shit Ever"
      },
      {
        name: "Shit",
        rating: Math.floor(Math.random() * 5),
        description: "The best Shit Ever"
      },
      {
        name: "Shit",
        rating: Math.floor(Math.random() * 5),
        description: "The best Shit Ever"
      },
      {
        name: "Shit",
        rating: Math.floor(Math.random() * 5),
        description: "The best Shit Ever"
      },
      {
        name: "Shit",
        rating: Math.floor(Math.random() * 5),
        description: "The best Shit Ever"
      },
      {
        name: "Shit",
        rating: Math.floor(Math.random() * 5),
        description: "The best Shit Ever"
      },
      {
        name: "Shit",
        rating: Math.floor(Math.random() * 5),
        description: "The best Shit Ever"
      },
      {
        name: "Shit",
        rating: Math.floor(Math.random() * 5),
        description: "The best Shit Ever"
      },
      {
        name: "Shit",
        rating: Math.floor(Math.random() * 5),
        description: "The best Shit Ever"
      },
      {
        name: "Shit",
        rating: Math.floor(Math.random() * 5),
        description: "The best Shit Ever"
      },
      {
        name: "Shit",
        rating: Math.floor(Math.random() * 5),
        description: "The best Shit Ever"
      },
      {
        name: "Shit",
        rating: Math.floor(Math.random() * 5),
        description: "The best Shit Ever"
      },
      {
        name: "Shit",
        rating: Math.floor(Math.random() * 5),
        description: "The best Shit Ever"
      },
      {
        name: "Shit",
        rating: Math.floor(Math.random() * 5),
        description: "The best Shit Ever"
      }
    ];
    const allCards = cards.map(card => <CardNew card={card} />);
    return <Card.Group itemsPerRow={4}>{allCards}</Card.Group>;
  }
}

export default CardList;
