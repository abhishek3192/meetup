import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavouriteContext from "../../store/favorites-context";

const MainNavigation = () => {
  const favoritesContext = useContext(FavouriteContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/favourites">
              My Favourite
              <span className={classes.badge}>
                {favoritesContext.totalFavorites}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/createMeetUp">Create Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
