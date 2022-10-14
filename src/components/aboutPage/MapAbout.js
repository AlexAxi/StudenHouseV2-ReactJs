import React from "react";

import style from "./styles/MapAbout.module.css";

import mail from "../../images/imagesHero/location.svg";

export default function MapAbout() {
  return (
    <div className={style.container}>
      <div className={style.div1}>
        <div className={style.text1}>
          <h2 className={style.title}>
            LOCATION <img className={style.icon} src={mail} alt="" />
          </h2>
          <br></br>
          <p className={style.text}>
            <b>STUDENT HOUSE</b>
            <br></br>
            Gammeltorv 10, 9000 Aalborg
          </p>
        </div>
      </div>
      <div>
          <iframe className={style.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2170.186281028659!2d9.91714201577007!3d57.04835079879568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4649328cb9749801%3A0xabf90bd6ca7a4f22!2sStudenterhuset%20Aalborg!5e0!3m2!1sen!2sdk!4v1652460811544!5m2!1sen!2sdk" ></iframe>
      </div>
    </div>
  );
}
