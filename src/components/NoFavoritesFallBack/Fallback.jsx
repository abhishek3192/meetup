import React from "react";
import FallbackImage from "../../Assests/Images/nofav.png";
import classes from "./Fallback.module.css";
import { useNavigate } from "react-router-dom";

const Fallback = () => {
  const navigate = useNavigate();
  const goToAllMeetups = () => navigate("/");
  return (
    <div>
      <img src={FallbackImage} className={classes.fallbackImage} />
      <div className={classes.actions}>
        <button onClick={goToAllMeetups}>Go To All Meetups</button>
      </div>
    </div>
  );
};

export default Fallback;
