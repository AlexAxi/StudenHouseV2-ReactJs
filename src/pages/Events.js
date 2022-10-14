import React from "react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
import EventsContainer from "../components/singleEventPage/EventsContainer";
import FeaturedContainer from "../components/global/FeaturedContainer";




const Events = () => {
  
  return (
    <>
   <Helmet>
        <title>Student House Events</title>

        <meta
          name="description"
          content="Student House is a venue located in the center of Aalborg which hosts social events. It consists of a café, concert hall, study rooms and is run by volunteers."
        />

        <meta
          name="keywords"
          content="Student House, Cafe Aalborg, Volunteer Aalborg, Study Place, Aalborg Events, Study Cafe"
        />
      </Helmet>
      <FeaturedContainer/>
      <EventsContainer />
    </>
  );
};

export default Events;
