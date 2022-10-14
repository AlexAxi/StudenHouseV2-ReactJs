import React from "react";
import style from "./styles/Directors.module.css";
import image from "../../images/imagesHero/directors-img.jpg"

export default function Directors() {
  return (
    <div className={style.MainContainerDirector}>
      <h1 className={style.DirectorHeading}>Board of Directors</h1>

      <div className={style.List}>
        <ul>
          <li className={style.ulLI}>
            Chairman - Emily Kay, Volunteer, elected by the general meeting -
            contact:{" "}
            <a href="mailto: emilyzxos@gmail.com" style={{fontWeight:"500"}} className={style.aTag}>emilyzxos@gmail.com</a>
          </li>
          <li className={style.ulLI}>
            Appointed by AAU - Mette Marie Abildgaard, Chief Consultant AAU
          </li>
          <li className={style.ulLI}>
            Appointed by UCN - Mette Østergaard Samuelsen, International
            Manager, UCN
          </li>
          <li className={style.ulLI}>Morten Varano - Director RUST (Copenhagen)</li>
          <li className={style.ulLI}>Laurits Dyhre - Volunteer, elected by the general meeting</li>
          <li className={style.ulLI}>Jonas Schelle - Volunteer, elected by the general meeting</li>
          <li className={style.ulLI}>Sumanan Sriskandarajah - Volunteer, General Assembly elected</li>
        </ul>
      </div>

      <div className={style.DirectorsImg}>
        <img src={image} alt="directors" />
      </div>
    </div>
  );
}
