
// NOT IN USE `//////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import { EventContext } from "../../context";
import Loading from "../global/Loading";
import Title from "../global/Title";
import 'react-slidy/lib/styles.css'
import ReactSlidy from 'react-slidy'
import FeaturedEvent from "./FeaturedEvent";

export default class FeaturedList extends Component {
  static contextType = EventContext;
  render() {
    let { loading, featuredEvents: events } = this.context;
    // console.log(events);

    {
        events = events.map(event =>{
        return <FeaturedEvent key={event.id} event={event} />
    })
    
    
    return (
      <section className="featured-events">
        <Title title="Featured Events" />
       <div className="featured-events-slider ">
           {loading?<Loading/>:events}
       </div>
        
   
      </section>
    );
  }}
}
