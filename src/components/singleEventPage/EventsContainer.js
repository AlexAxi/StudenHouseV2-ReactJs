import React from "react";
import EventsFilter from "./EventsFilter";
import EventsList from "./EventsList";
import { withEventConsumer } from "../../context";
import Loading from "../global/Loading";

function EventsContainer({ context }) {
  const { loading, sortedEvents, events } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <EventsFilter events={events} />
      <EventsList events={sortedEvents} />
    </>
  );
}

export default withEventConsumer(EventsContainer);


