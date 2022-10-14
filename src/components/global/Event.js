import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../../images/10035.png";
import PropTypes from "prop-types";
import moment from "moment";
import dateFormat from "dateformat";

import style from "./styles/event/Event.module.css";

export default function Event({ event }) {
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
    timeFormatEnd,
    featured,
    eventT,
  } = event;

  var monthName = moment(timeFormat, "DD-MM-YYYY").format("MMMM");

  var monthDay = moment(timeFormat, "DD-MM-YYYY").format("DD");

  var date = new Date();
  var milliseconds = date.getTime();

  if (eventT >= milliseconds) {
    return (
      <article className={style.event}>
        <div to={`/events/${slug}`} className={style.imgContainer}>
          <Link to={`/events/${slug}`}>
            <img src={images[0] || defaultImg} alt={name} className="zoomIn" />
          </Link>
          {ticketLink ? (
            <a
              target="_blank"
              href={ticketLink}
              rel="noopener noreferrer"
              className={style.btnTop}
            >
              <button className="btn-primary">Buy Tickets</button>
            </a>
          ) : null}
        </div>

        <div className={style.eventInfoWrapper}>
          <div className={style.eventInfoLeft}>
            <div className={style.eventInfoLeftTop}>
              <Link to={`/events/${slug}`} className={style.eventDetailsInfo2}>
                <p
                  to={`/events/${slug}`}
                  className={style.eventDetailsInfo2}
                  style={{ height: "55px", marginBottom: "1em" }}
                >
                  {name}
                </p>
              </Link>
            </div>
            <div className={style.eventInfoLeftBottom}>
              <div>
                <div className={style.varyingTextBlock}>
                  <p className={style.eventDetailsInfo}>Time: &nbsp;</p>
                  <p
                    className={style.eventDetailsInfo3}
                    style={{ fontWeight: "bold" }}
                  >
                    {start} - {end}
                  </p>
                </div>

                <div className={style.varyingText}>
                  <p className={style.eventDetailsInfo}>Doors: &nbsp;</p>
                  <p className={style.eventDetailsInfo2}>{doors}</p>
                </div>
              </div>
              <div>
                <div className={style.varyingText}>
                  <p className={style.eventDetailsInfo}>Price: &nbsp;</p>
                  <p className={style.eventDetailsInfo2}>
                    {price ? price + "kr" : "free"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.eventInfoRight}>
            <p className={style.eventInfoDate}>{monthDay}</p>
            <p className={style.eventInfoDate}>{monthName}</p>
          </div>
        </div>
      </article>
    );
  }
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
