import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../../images/10035.png";
import PropTypes from "prop-types";
import moment from "moment";

import style from "./styles/featured/Featured.module.css";

export default function FeaturedEvent({ event }) {
  // console.log(event);
  const {
    name,
    slug,
    images,
    price,
    start,
    doors,
    end,
    ticketLink,
    timeFormat,
    eventT,
    timeFormatEnd,
    featured,
  } = event;
  


  

  

  var monthName = moment(timeFormat, "DD-MM-YYYY").format("MMMM");

  var monthDay = moment(timeFormat, "DD-MM-YYYY").format("DD");

  

    return (
      <div className={style.event}>
        <Link to={`/events/${event.slug}`} className={style.name}>
          <img
            src={event.images[0] || defaultImg}
            style={{ height: "450px", width: "100%", objectFit: "cover" }}
          />

          <div className={style.bottomBar}>
            <p to={`/events/${event.slug}`} className={style.name}>
              {event.name}
            </p>
            <p className={style.name}>
              {monthDay} {monthName}
            </p>
          </div>
        </Link>
      </div>
    );
  
}

Event.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number,
    // date:PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    doors: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    ticketLink: PropTypes.string,
    timeFormat: PropTypes.string,
    timeFormatEnd: PropTypes.string,
  }),
};
