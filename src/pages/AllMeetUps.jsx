import React, { useEffect, useState } from "react";
import CardList from "../components/Card/CardList";
import { RingLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  marginTop: 240,
};

const AllMeetUps = () => {
  const [meetUpData, setMeetupData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    fetch("https://meetup-3d160-default-rtdb.firebaseio.com/meetup.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const newMeetup = {
            id: key,
            ...data[key],
          };
          meetups.push(newMeetup);
        }
        setIsLoading(false);
        setMeetupData(meetups);
      })
      .catch((err) => {
        setIsLoading(false);
        throw Error(err);
      });

    return () => controller.abort();
  }, []);

  if (isLoading) {
    return (
      <section>
        <RingLoader color="#77002e" cssOverride={override} size={150} />
      </section>
    );
  }

  return (
    <>
      <section>
        <h1>All Meetups</h1>
        <CardList meetUps={meetUpData} />
      </section>
    </>
  );
};

export default AllMeetUps;
