import React from "react";
import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/NewMeetupForm/Form";

const NewMeetUps = () => {
  const navigate = useNavigate();
  const addMeetupHandler = (meetupData) => {
    fetch("https://meetup-3d160-default-rtdb.firebaseio.com/meetup.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => navigate("/"))
      .catch((err) => err);
  };

  return (
    <section>
      <h1>NewMeetUps</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetUps;
