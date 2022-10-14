import React, { useRef } from "react";
import { withEventConsumer } from "../context";
import style from "../components/styles/Hero.module.css";
import Information from "../components/aboutPage/Information";
import { Helmet } from "react-helmet";

import image from "../images/imagesHero/AroundCAffe.JPG";


function Facilities({ context }) {
  const {
    facilities,
    titleFacility1,
    imgFacility1,
    decsFacility1,
    decsFacility11,
    titleFacility2,
    imgFacility2,
    decsFacility2,
    decsFacility22,
    titleFacility3,
    imgFacility3,
    decsFacility3,
    decsFacility33,
    titleFacility4,
    imgFacility4,
    decsFacility4,
    decsFacility44,
    titleFacility5,
    imgFacility5,
    decsFacility5,
    decsFacility55,
    locale,
  } = context;

 

  return (
    <>
     <Helmet>
        <title>Student House Facilities</title>

        <meta
          name="description"
          content="At Student House, we are organizing the best music events in Aalborg that you can attend almost every weekend. It is also a great place for you to come study."
        />

        <meta
          name="keywords"
          content="Student House, Cafe Aalborg, Study Place, Aalborg Events, Study Cafe, Music events"
        />
      </Helmet>
    
    <div>
      <header className={style.Container}>
        <div className={style.headerGrid}>
          {/*    ---------------------------- */}
          <div className={style.column1}>
            <div className={style.titleGrid}>
              {locale === "en-US" ? (
                <h1 className={style.titleMain}>facilities</h1>
              ) : (
                <h1 className={style.titleMain}>faciliteter</h1>
              )}

              {locale === "en-US" ? (
                <h2 className={style.titleSecond}>We have a lot to offer</h2>
              ) : (
                <h2 className={style.titleSecond}>Vi har meget at byde på</h2>
              )}

              {locale === "en-US" ? (
                <p className={style.paragraph}>
                  Student House is not only a place to <strong>come and chill</strong> in the
                  cafe or <strong>have a beer at the bar</strong>, we are always organizing some
                  of the <strong>best music events</strong> in Aalborg that you can attend almost
                  every weekend. It is also a great place for you to <strong>come
                  study</strong> as we put at your disposal a <strong>huge study room</strong> located
                  at the top floor and <strong>private study rooms</strong> for AAU students.
                </p>
              ) : (
                <p className={style.paragraph}>
                  Studenterhuset er ikke kun et sted at komme og slappe af cafe
                  eller få en øl i baren, vi arrangerer altid nogle af de bedste
                  musikbegivenheder i Aalborg, som du næsten kan deltage i hver
                  weekend. Dette er også et godt sted, hvis du vil at komme for
                  at studere, da vi stiller et kæmpe studieværelse til din
                  rådighed placeret i øverste flor og private studierum for AAU
                  studerende.
                </p>
              )}
              <a
                href="https://goo.gl/maps/5J6n7KUBBY4uF26H8"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <button className={style.btnPrimary}>
                  Google Maps
                </button>
              </a>
            </div>
          </div>

          <div className={style.patternBox}></div>

          <div
            className={style.imageBox}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
      </header>
      <Information
        title1={titleFacility1}
        image1={imgFacility1}
        description1={decsFacility1}
        description11={decsFacility11}
        title2={titleFacility2}
        image2={imgFacility2}
        description2={decsFacility2}
        description22={decsFacility22}
        title3={titleFacility3}
        image3={imgFacility3}
        description3={decsFacility3}
        description33={decsFacility33}
        title4={titleFacility4}
        image4={imgFacility4}
        description4={decsFacility4}
        description44={decsFacility44}
        title5={titleFacility5}
        image5={imgFacility5}
        description5={decsFacility5}
        description55={decsFacility55}
      />
      
    </div>
    </>
  );
}

export default withEventConsumer(Facilities);
