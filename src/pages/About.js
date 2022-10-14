import React, { useRef } from "react";
import { withEventConsumer } from "../context";
import style from "../components/styles/Hero.module.css";
import image from "../images/imagesHero/HeroAboutPAge.jpg";
import Information from "../components/aboutPage/Information";
import Hero from "../components/Hero";
import CheckFacilities from "../components/aboutPage/CheckFacilities";
import MapAbout from "../components/aboutPage/MapAbout";
import HystoryContainer from "../components/aboutPage/HystoryContainer";
import { Helmet } from "react-helmet";

function About({ context }) {
  const {
    about,
    titleAbout1,
    imgAbout1,
    decsAbout1,
    decsAbout11,
    titleAbout2,
    imgAbout2,
    decsAbout2,
    decsAbout22,
    titleAbout3,
    imgAbout3,
    decsAbout3,
    decsAbout33,
    locale,
  } = context;

  const myRef = useRef();
  function executeScroll() {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
     <Helmet>
        <title>Student House About</title>

        <meta
          name="description"
          content="Student House not only hosts a number of events in Aalborg, but it is also one of the city's most important social venues. It is situated on Gammel Torv 10."
        />

        <meta
          name="keywords"
          content="Student House, Cafe Aalborg, Volunteer Aalborg, Study Place, Aalborg Events, Study Cafe, Student House Contact, Student House Administration, Student House Board Directors"
        />
      </Helmet>
    
    <div>
      <header className={style.Container}>
        <div className={style.headerGrid}>
          {/*    ---------------------------- */}
          <div className={style.column1}>
            <div className={style.titleGrid}>
              {locale === "en-US" ? (
                <h1 className={style.titleMain}>about us</h1>
              ) : (
                <h1 className={style.titleMain}>om Studenterhus</h1>
              )}

              {locale === "en-US" ? (
                <h2 className={style.titleSecond}>
                  a Cafe with a RICH history
                </h2>
              ) : (
                <h2 className={style.titleSecond}>
                  en cafe med en RIG historie
                </h2>
              )}

              {locale === "en-US" ? (
                <p className={style.paragraph}>
                  Student House not only hosts a number of{" "}
                  <strong>events in Aalborg</strong>, but it is also one of the
                  city's most important <strong>social venues</strong>. It is
                  situated on Gammel Torv 10. You can't get closer to the center
                  of the town. You are welcome to come here at any time to meet
                  other students, <strong>different cultures</strong>, and enjoy{" "}
                  <strong>special music events</strong>.
                </p>
              ) : (
                <p className={style.paragraph}>
                  Studenterhuset er ikke kun vært for en række arrangementer i
                  Aalborg, men det er også et af byens vigtigste sociale
                  mødesteder. Den ligger på Gammel Torv 10. Du kan ikke komme
                  tættere på centrum af byen. Du er velkommen til at komme her
                  til enhver tid for at møde andre studerende, forskellige
                  kulturer og nyde særlige musikbegivenheder.
                </p>
              )}

              <button onClick={executeScroll} className={style.btnPrimary}>
                {locale === "en-US" ? "HISTORY" : "Historie"}
              </button>
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
        title1={titleAbout1}
        image1={imgAbout1}
        description1={decsAbout1}
        description11={decsAbout11}
        title2={titleAbout2}
        image2={imgAbout2}
        description2={decsAbout2}
        description22={decsAbout22}
        title3={titleAbout3}
        image3={imgAbout3}
        description3={decsAbout3}
        description33={decsAbout33}
      />
      <div ref={myRef}></div>
      <HystoryContainer />
      <CheckFacilities />
      <MapAbout />
    </div>
    </>
  );
}

export default withEventConsumer(About);
