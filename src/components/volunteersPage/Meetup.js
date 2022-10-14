import React from "react";

import style from "./styles/meetup/Meetup.module.css";
import btnStyle from "../global/styles/button/Button.module.css";

export default function Meetup({date, time, location, eventLink}) {
  return (
    <div className={style.container}>
    <div className={style.div1}>
        <div className={style.contact}>
        <p className={style.contactTitle}>VOLUNTEER MEET-UP </p>
          <p className={style.contactSubTitle}>Next meeting details: </p>

          <p className={style.mail}> <b>DATE:</b> <span>&nbsp;&nbsp;</span> {date} </p>
          <p className={style.mail}> <b>TIME:</b> <span>&nbsp;&nbsp;</span>  {time}  </p>
          <p className={style.mail}> <b>LOCATION:</b> <span>&nbsp;&nbsp;</span> {location} </p>

            <a href={eventLink} target="_blank" rel="noopener noreferrer" > 
              <button className={btnStyle.btnPrimary} style={{marginTop:"1em", marginBottom:"1em"}}>CHECK EVENT</button>
             </a>

          
        </div>
      </div>

      <div className={style.div2}></div>
    </div>
  );
}
