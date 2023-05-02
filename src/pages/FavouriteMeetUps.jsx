import React, { useContext } from "react";

import FavouriteContext from "../store/favorites-context";
import Fallback from "../components/NoFavoritesFallBack/Fallback";
import CardList from "../components/Card/CardList";

const Favourite = () => {
  const favoritesCtx = useContext(FavouriteContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <Fallback />;
  } else {
    content = <CardList meetUps={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>{favoritesCtx.totalFavorites !== 0 ? "My Favorites" : null}</h1>
      {content}
    </section>
  );
};

export default Favourite;
