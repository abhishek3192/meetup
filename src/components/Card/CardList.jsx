import React from "react";
import CardItem from "./CardItem";
import classes from "./Card.module.css";

const CardList = (props) => {
  return (
    <div className={classes.cardWrapper}>
      {props.meetUps.map((meetup) => {
        return (
          <CardItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        );
      })}
    </div>
  );
};

export default CardList;
