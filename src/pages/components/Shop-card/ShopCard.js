import React from "react";
import { Card, Button } from "react-bootstrap";

const LOCALSTORE_KEY = "favourites"; // Оголошуємо константу

const ShopCard = (props) => {
  const chooseItem = () => {
    const selectedGood = {
      id: props.card.id,
      name: props.card.name,
      description: props.card.description,
    };

    let favourites = JSON.parse(localStorage.getItem(LOCALSTORE_KEY) || "[]");
    favourites.push(selectedGood);
    window.localStorage.setItem(LOCALSTORE_KEY, JSON.stringify(favourites));
  };

  return (
    <Card>
      <Card.Img variant="top" src={props.card.img} alt={props.card.name} />
      <Card.Body>
        <Card.Title>{props.card.name}</Card.Title>
        <Card.Text>{props.card.description}</Card.Text>
        <Button variant="outline-secondary" onClick={chooseItem}>
          Виберіть цей варіант
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ShopCard;
