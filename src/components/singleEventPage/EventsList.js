import React from "react";
import Event from "../global/Event";

export default function EventsList({ events }) {
  
  if (events.length === 0) {
    return (
      <div className="empty-search">
        <h1>No events matching your search</h1>
      </div>
    );
  } 
  
  return (
    <section className="eventList">
      <div className="featured-events-center">
          {
              events.map(item =>{
                  return <Event key={item.id} event={item}/>
              })
          }
      </div>
    </section>
  );
}
