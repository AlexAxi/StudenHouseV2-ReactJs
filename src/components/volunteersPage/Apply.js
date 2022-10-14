

// //////////////////// NOT IN USE //////////////////////////////////////////////////////////////////////////////


import React from "react";
import { withEventConsumer } from "../../context";

import style from "./styles/applicationForm/Apply.module.css";
import btnStyle from "../global/styles/button/Button.module.css";

import mail from "./images/mail.svg";
import phone from "./images/phone.svg";
import local from "./images/location.svg";

function Apply({ context }) {
  const { generalContactInfo, locale } = context;

  let emailAddress = Object(generalContactInfo[0]).emailAddress;
  let phoneAvailabilityHours = Object(
    generalContactInfo[0]
  ).phoneAvailabilityHours;
  let phoneNumber = Object(generalContactInfo[0]).phoneNumber;

  return (
    <div className={style.container}>
      <div className={style.div1}>
        <div className={style.formContainer}>
          <p className={style.formTitle}> {locale==="en-US" ? "APPLY AS A VOLUNTEER": "SØG SOM FRIVILLIG"}  </p>

          <div className={style.nameForm}>
            <label htmlFor="title"> Name </label> <br></br>
            <input type="text" required id="title" />
          </div>
          <div className={style.emailForm}>
            <label htmlFor="image"> Email </label>
            <br></br>
            <input type="url" required id="image" />
          </div>

          <div className={style.birthdayForm}>
            <label htmlFor="address">Birthday</label>
            <br></br>
            <input type="text" required id="address" />
          </div>

          <div className={style.roleForm}>
            <label htmlFor="description">Role </label>
            <br></br>
            <select>
              <option value="Bartender">Bartender</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Light manager">Light manager</option>
              <option value="Stage Manager">Stage Manager</option>
              <option value="Music Coordinator">Music Coordinator</option>
              <option value="Stage Manager">Event Creator</option>
            </select>
          </div>

          <button className={btnStyle.btnPrimary}>{locale==="en-US"? "Apply Now": "Ansøg nu"}</button>
        </div>
      </div>
      <div className={style.div2}>
        <div className={style.contact}>
          <p className={style.contactTitle}> Contact Us </p>

          <p className={style.mail}>
            <a
              className={style.aTag}
              href={`mailto: ${emailAddress}`}
              style={{ textDecoration: "none" }}
            >
              <img className={style.icon} src={mail} alt="mail" />
              {emailAddress}
            </a>
          </p>

          <p className={style.phone}>
            <a
              className={style.aTag}
              href={`tel: +${phoneNumber}`}
              style={{ textDecoration: "none" }}
            >
              <img className={style.icon} src={phone} alt="phone" />+{phoneNumber}{" "}
              <span>&nbsp;&nbsp;</span> (Mon-Fri: {phoneAvailabilityHours})
            </a>
          </p>
        </div>

        <div className={style.contact}>
          <p className={style.contactTitle}> Visit Us </p>

          <p className={style.local}>
            <a
              className={style.aTag}
              href="https://goo.gl/maps/5J6n7KUBBY4uF26H8"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <img className={style.icon} src={local} alt="location" />
              Gammeltorv 10, Aalborg 9000
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default withEventConsumer(Apply);
