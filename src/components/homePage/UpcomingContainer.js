import React from "react";

import { withEventConsumer } from "../../context";
import Loading from "../global/Loading";
import UpcomingList from "./UpcomingList";
import Title from '../global/Title'

function UpcomingContainer({ context }) {
  const { loading, sortedEvents, locale } = context;
  if (loading) {
    return <Loading />;
  }

  return (
    <>
     <Title title={locale === "en-US" ? "Upcoming Events" : "Kommende arrangementer"} button={locale === "en-US" ? "ALL EVENTS" : "SEE ALT"} />
      {/* <EventsFilter events={events} /> */}
      <UpcomingList events={sortedEvents} />
    </>
  );
}

export default withEventConsumer(UpcomingContainer);