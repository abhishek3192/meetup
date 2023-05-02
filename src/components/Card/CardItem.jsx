import React, { useContext } from "react";
import classes from "./Card.module.css";
import Card from "../../Ui/Card";
import FavouriteContext from "../../store/favorites-context";

const CardItem = ({ width, image, title, address, description, id }) => {
  const favoritesCtx = useContext(FavouriteContext);

  const itemIsFavorite = favoritesCtx.itemFav(id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFav(id);
    } else {
      favoritesCtx.addFav({
        id: id,
        title: title,
        address: address,
        description: description,
        image: image,
      });
    }
  };

  const CardImage = ({ imageUrl }) => {
    if (imageUrl) {
      return (
        <div className={classes.styleImage}>
          <img
            style={{ width: width + "px", marginTop: "-8%" }}
            src={imageUrl}
            alt={title}
          />
        </div>
      );
    }
    return null;
  };

  const CardContent = ({ title, location, description }) => {
    return (
      <div className={classes.styleCardContent}>
        <p className={classes.styleCardTitle}>{title}</p>
        <p className={classes.styleLocationLabel}>{location}</p>
        <p className={classes.styleDescription}>{description}</p>
      </div>
    );
  };

  return (
    <div style={{ width: width + "px", marginRight: "20px" }}>
      <Card>
        <CardImage imageUrl={image} width={width} />
        <CardContent
          title={title}
          location={address}
          description={description}
        />
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove Favorite" : "To Favorite"}
          </button>
        </div>
      </Card>
    </div>
  );
};

export default CardItem;

CardItem.defaultProps = {
  width: 350,
  title: "Card Title",
  location: "Location Label",
  description: "Template Description textbox",
};
