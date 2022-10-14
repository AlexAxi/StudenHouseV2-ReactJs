import React from "react";
import { withEventConsumer } from "../context";
import classes from "../components/styles/Hero.module.css";
import styles from "../components/contactPage/styles/Booking.module.css";

import image from "../../src/images/imagesHero/bookingImHg.jpg";
import image1 from "../../src/images/imagesHero/CAffeBar.JPG";
import image2 from "../../src/images/imagesHero/technology.jpg";
import Hero from "../components/Hero";
import style from "../components/aboutPage/styles/Information.module.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Booking({ context }) {
  const { locale, generalContactInfo } = context;
  let emailAddress = Object(generalContactInfo[0]).emailAddress;
  return (
    <>
    <Helmet>
        <title>Student House Booking</title>

        <meta
          name="description"
          content="If you are an artist or represent a band and wish to organize a public event, contact us! It is one of our goals to create as many amazing concerts as possible."
        />

        <meta
          name="keywords"
          content="Student House, Cafe Aalborg, Volunteer Aalborg, Study Place, Aalborg Events, Study Cafe, Student House Booking, Equipment"
        />
      </Helmet>
    
    <div>
      <header className={classes.Container}>
        <div className={classes.headerGrid}>
          {/*    ---------------------------- */}
          <div className={classes.column1}>
            <div className={classes.titleGrid}>
              {locale === "en-US" ? (
                <h1 className={classes.titleMain}>{"Booking & Tech"}</h1>
              ) : (
                <h1 className={classes.titleMain}>{"Booking & Tech"}</h1>
              )}

              {locale === "en-US" ? (
                <h2 className={classes.titleSecond}>
                  BANDS AND ARTISTS CAN ORGANIZE EVENTS
                </h2>
              ) : (
                <h2 className={classes.titleSecond}>
                  BANDS OG KUNSTNERE KAN ORGANISERE EVENTS
                </h2>
              )}

              {locale === "en-US" ? (
                <p className={classes.paragraph}>
                  <strong>If you are an artist or represent a band</strong> and wish to organize
                  a public event, we are always open to discuss. It is one of
                  our goals to <strong>create as many amazing concerts as possible</strong>, so
                  don't hesitate to <strong>contact us</strong>.
                  We also provide some material that you can use, but only with prior notice.
                  You can find all the <strong>information</strong> on how to create an event with us <strong>below</strong>! 
                  
                </p>
              ) : (
                <p className={classes.paragraph}>
                  Hvis du er kunstner eller repræsenterer et band og ønsker at
                  arrangere et offentligt arrangement, er vi altid åbne for at
                  diskutere. Det er et af vores mål at skabe så mange
                  fantastiske koncerter som muligt, så tøv ikke med at kontakte
                  os.
                  Vi leverer også noget materiale, som du kan bruge, men kun med forudgående varsel.
                  You can find all the information on how to create an event with us down bellow!
                </p>
              )}
              <a href={`mailto: ${emailAddress}`} style={{textDecoration:"none"}}>
              <button className={classes.btnPrimary}>{locale==="en-US"? "CONTACT US": "Kontakt os"}</button>
              </a>
              {/* <Link exact to={"/contact"}>
                <button className={classes.btnPrimary}>{locale==="en-US"? "CONTACT US": "Kontakt os"}</button>
              </Link> */}
            </div>
          </div>

          <div className={classes.patternBox}></div>

          <div
            className={classes.imageBox}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
      </header>

      <div className={style.container}>
        {/* 1 */}
        <div className={style.wrapper}>
          <div className={style.text}>
            <p>
              {" "}
              <b className={style.number}> 01 - Create an event</b>{" "}
              <span>&nbsp;&nbsp;</span>
              <br></br>
              <p style={{ marginTop: "1em" }}></p>
              We constantly collaborate with{" "}
              <text style={styles.highlight}> bands and artists</text> to create
              new and exciting events at Student House.
              <br></br>
              If you wish to organize an event, please send us a demo or link to
              your website, SoundCloud, etc at{" "}
              <a
                className={styles.aTag}
                href="mailto: booking@studenterhuset.dk"
              >
                booking@studenterhuset.dk
              </a>
              <br></br>
              The booking committee meets once a week, but since we receive a
              fairly large number of offers daily, expect an answer no earlier
              than 3-4 weeks after receipt.
            </p>
          </div>
          <div
            className={style.img}
            style={{ backgroundImage: `url(${image1})` }}
          ></div>
        </div>

        {/* 2 */}
        <div className={style.wrapperReverse}>
          <div
            className={style.imgTechology}
            style={{ backgroundImage: `url(${image2})` }}
          ></div>
          <div className={style.text}>
            <p>
              <b className={style.number}> 02 - Technology </b>
              <span>&nbsp;&nbsp;</span> <br></br>
              <h4 style={{ marginTop: "1em" }}>House PA:</h4>
              <p>
                1 Soundcraft Vi2000 / w 64/32 vi Stagebox 4 d & b 01 on 1 D12 2
                d & b 07 on 1 D6 (inner fill) 6 d & b Qsub on 2 D12
              </p>
              <h4>Stargate Monitor:</h4>
              <p>4 Dynacord AXM 12A</p>
              <h4>Mics:</h4>
              <p>
                15 LDI Systems LDI02 2 Shure Beta 52 2 Shure Beta 91 7 Shure
                SM57 9 Shure Beta 58A 2 Shure SM 81 2 AKG D112 6 Sennheiser e604
                2 Sennheiser e906 1 Audix 0M2xb 1 Audix 0M5 2 Audio-Technica
                U873R 3 Røde NT5
              </p>
              <h4>DJ Setups:</h4>
              <p>
                4 Technics 1210 Mk2 w / Ortofon Concorde Scratch 2 Pioneer
                CDJ-1000mk3 2 Pioneer CDJ-2000NXS2 1 Pioneer DJM-800 1 Pioneer
                DJM-900NXS
              </p>
              <div style={{ display: "flex", columnGap: "1%" }}>
                <h4>Contact for more:</h4>{" "}
                <a
                  href="mailto: fr@studenterhuset.dk "
                  className={styles.aTag}
                >
                  fr@studenterhuset.dk
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default withEventConsumer(Booking);
