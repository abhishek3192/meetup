import { createContext, useState } from "react";

const FavouriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFav: (favMeetup) => {},
  removeFav: (meetupId) => {},
  itemFav: (meetupId) => {},
});

export const FavouriteContextProvider = (props) => {
  const [userFav, setUserFav] = useState([]);

  const addFavHandler = (favMeetup) => {
    setUserFav((prevUserFav) => {
      return prevUserFav.concat(favMeetup);
    });
  };

  const removeFavHandler = (meetupId) => {
    setUserFav((prevUserFav) => {
      return prevUserFav.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const itemIsFav = (meetupId) => {
    //some check over here if userFav have some id and will return true
    return userFav.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFav,
    totalFavorites: userFav.length,
    addFav: addFavHandler,
    removeFav: removeFavHandler,
    itemFav: itemIsFav,
  };
  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContext;
