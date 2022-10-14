import React from "react";
import style from "./styles/Offers.module.css";
import image1 from "../../../src/images/imagesHero/cash.png"
import image2 from "../../../src/images/imagesHero/visa.png"
import image3 from "../../../src/images/imagesHero/mobile.pay.png"
import image4 from "../../../src/images/imagesHero/crad.png"

export default function Offers() {
  return (
    <div className={style.MainContainer}>
      <h1 className={style.Header}>WEEK OFFERS AT STUDENT HOUSE</h1>

      {/*  ---------First Column--------------- */}
      <div className={style.column1}>
        <h1 className={style.title}>
          Eco Monday - <text style={style.highlight}>all day</text>
        </h1>

        {/* ---------------- Underline-------------- */}
        <svg height="80" width="68%">
          <g fill="none" stroke="white">
            <path stroke-width="4" d="M5 40 l305 0" />
          </g>
          Sorry, your browser does not support inline SVG.
        </svg>

        <div className={style.mainParagraph}>
          <p className={style.paragraph1}>
            Royal Organic Pilsner <text style={style.highlight}>DKK 30</text>
          </p>
          <p className={style.paragraph2}>
            Royal Organic Classic <text style={style.highlight}>DKK 30</text>
          </p>
          <p className={style.paragraph3}>
            Royal Organic IPA <text style={style.highlight}>DKK 35</text>
          </p>
        </div>
      </div>

      {/*  ---------Second Column--------------- */}

      <div className={style.column2}>
        <h1 className={style.title}>
          Wednesday bar - <text style={style.highlight}>all day</text>
        </h1>

        <svg height="80" width="68%">
          <g fill="none" stroke="white">
            <path stroke-width="4" d="M5 40 l305 0" />
          </g>
          Sorry, your browser does not support inline SVG.
        </svg>

        <div className={style.mainParagraph}>
          <p className={style.paragraph1}>
            Large Royal Pilsner <text style={style.highlight}>DKK 25</text>
          </p>
          <p className={style.paragraph2}>
            Large Royal Classic <text style={style.highlight}>DKK 30</text>
          </p>
          <p className={style.paragraph3}>
            Soda <text style={style.highlight}>DKK 15</text>
          </p>
        </div>
      </div>

      {/*  ---------Third Column--------------- */}

      <div className={style.column3}>
        <h1 className={style.title}>
          Friday bar - <text style={style.highlight}>all day</text>
        </h1>

        <svg height="80" width="68%">
          <g fill="none" stroke="white">
            <path stroke-width="4" d="M5 40 l305 0" />
          </g>
          Sorry, your browser does not support inline SVG.
        </svg>

        <div className={style.mainParagraph}>
          <p className={style.paragraph1}>
            Large Royal Pilsner <text style={style.highlight}>DKK 25</text>
          </p>
          <p className={style.paragraph2}>
            Soda <text style={style.highlight}>DKK 15</text>
          </p>
        </div>
      </div>

      <div className={style.announce}>
        <h3 className={style.attentionH3} attentionH3>
          * The above offers can be put "on hold" in connection with special
          events, but we promise to announce it well in advance so you do not go
          in vain
        </h3>
      </div>

      <div className={style.payment}>
        <h1 className={style.paymentTitle}> AVAILABLE Payment Methods</h1>

        <div className={style.methods}>
          <img src={image1}alt="Cash" />
          <img src={image2} alt="Visa" />
          <img src={image3} alt="Mobile Pay" />
          <img src={image4}alt="Maestro" />
        </div>
      </div>
    </div>
  );
}
