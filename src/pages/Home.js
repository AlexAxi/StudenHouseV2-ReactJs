import React, { useRef } from "react";

import { withEventConsumer } from "../context";
import { Link } from "react-router-dom";

import style from "../components/styles/Hero.module.css";
import btnStyle from "../components/global/styles/button/Button.module.css"

import UpcomingContainer from "../components/homePage/UpcomingContainer";
import FeaturedContainer from "../components/global/FeaturedContainer";
import Title from "../components/global/Title";

import CaffeSection from "../components/homePage/CaffeSection";
import Newsletter from "../components/homePage/Newsletter";
import Sponsors from "../components/homePage/Sponsors";
import heroImg from "../images/imagesHero/HeroLanding.jpg"
import MailchimpFormContainer from "../components/homePage/MailchimpFormContainer";

function Home({ context }) {
  const {
    home,
    // heroImageHome,
    // heroDescription,
    caffeSectionDescription,
    locale,
  } = context;

  const myRef = useRef();
  function executeScroll() {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  }

  console.log("DATA HOMEEE", home);
  console.log(Object(home[0]).caffeSectionTitle);
  // let heroTitle = Object(home[0]).heroTitle;
  // let heroSubtitle = Object(home[0]).heroSubtitle;
  let monTue = Object(home[0]).monTue;
  let wedThu = Object(home[0]).wedThu;
  let saturday = Object(home[0]).saturday;
  let sunday = Object(home[0]).sunday;

  let cafeSectionTitle = Object(home[0]).caffeSectionTitle;

  return (
    <>
      <header className={style.Container}>
        <div className={style.headerGrid}>
          {/*    ---------------------------- */}
          <div className={style.column1}>
            <div className={style.titleGrid}>
              {locale === "en-US" ? (
                <h1 className={style.titleMain}>STUDENT HOUSE</h1>
              ) : (
                <h1 className={style.titleMain}>Studenterhus</h1>
              )}

              {locale === "en-US" ? (
                <h2 className={style.titleSecond}>WHERE ALL PEOPLE MEET</h2>
              ) : (
                <h2 className={style.titleSecond}>HVOR ALLE MENNESKER MØDES</h2>
              )}

              {locale === "en-US" ? (
                <p className={style.paragraph}>
                  Student House is located right in the{" "}
                  <strong>heart of Aalborg</strong> . The student house is{" "}
                  <strong>not only for the students</strong>, but also for the entire city of Aalborg. The place
                  consists of a <strong> cafe </strong> with a large{" "}
                  <strong> concert hall</strong> , a smaller <strong>concert hall</strong> on the
                  first floor (Stargate), <strong>meeting rooms</strong>, and a{" "}
                  <strong> study room </strong> .
                </p>
              ) : (
                <p className={style.paragraph}>
                  Beliggende lige i hjertet af Aalborg finder du Studenterhuset.
                  Studenterhuset er de studerendes, men også hele Aalborgs hus.
                  <br />
                  <br />
                  Studenterhuset består af en café, vores store koncertsal, en
                  lille koncertsal på 1. sal (Stargate), mødelokaler og en
                  læsesal.
                </p>
              )}

              <button onClick={executeScroll} className={style.btnPrimary}>
              {locale === "en-US" ?  "OPENING HOURS" : "ÅBNINGSTIDER"}
               
              </button>
            </div>
          </div>

          <div className={style.patternBox}></div>

          <div
            className={style.imageBox}
            style={{ backgroundImage: `url(${heroImg})` }}
          ></div>
        </div>
      </header>
      <section className={style.becomeVolWrapper}>
        <div className={style.becomeVol}>
          <h1 className={style.h1Become}>
           {locale === "en-US" ? "BECOME A VOLUNTEER AT STUDENT HOUSE" : "BLIV FRIVILLIG PÅ STUDENTHUSET"}
          </h1>
          <Link  to={"/volunteers"}> 
          <button onClick={executeScroll} className={btnStyle.btnPrimaryReverse}>{locale === "en-US" ? "APPLY HERE!" : "SØG HER!"}</button>
         </Link>
        </div>
      </section>
      <UpcomingContainer />
      <Title title={locale === "en-US" ? "Featured Events" : "Udvalgte begivenheder"} button={locale === "en-US" ? "ALL EVENTS" : "SEE ALT"} />
      <FeaturedContainer />
      <div ref={myRef}></div>
      <CaffeSection
        title={cafeSectionTitle}
        description={caffeSectionDescription}
        monTue={monTue}
        wedThu={wedThu}
        saturday={saturday}
        sunday={sunday}
      />
      <MailchimpFormContainer/>
      <Sponsors />
      
    </>
  );
}

export default withEventConsumer(Home);
