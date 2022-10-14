import React from "react";

import UpcomingEvent from "./UpcomingEvent";

export default function UpcomingList({ events }) {
    console.log("UPCOMING EV",events);
    
   
  return (
    <section className="featured-events">
      <div className="featured-events-center">
          {
              
              events.slice(0, 3).map(item =>{
                  return <UpcomingEvent key={item.id} event={item}/>
              })
          }
      </div>
    </section>
  );
}


// events.slice(Math.max(events.length - 3, 0))