import React from "react";
import { withEventConsumer } from "../../context";
import CustomApplicationForm from "./CustomApplicationForm";
import style from "./styles/applicationForm/Apply.module.css"

import mail from "./images/mail.svg";
import phone from "./images/phone.svg";
import local from "./images/location.svg";

 function ApplicationFormContainer({context}) {

    const { generalContactInfo, locale } = context;

  let emailAddress = Object(generalContactInfo[0]).emailAddress;
  let phoneAvailabilityHours = Object(
    generalContactInfo[0]
  ).phoneAvailabilityHours;
  let phoneNumber = Object(generalContactInfo[0]).phoneNumber;

  return (
    <div className={style.container}>
      <div className={style.div1}>
      <div> 
        <p className={style.formTitle}> {locale==="en-US" ? "APPLY AS A VOLUNTEER": "SØG SOM FRIVILLIG"}  </p>
        <CustomApplicationForm />
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
export default withEventConsumer(ApplicationFormContainer);