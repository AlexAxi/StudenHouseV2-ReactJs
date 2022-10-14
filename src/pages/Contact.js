import React, { useRef } from "react";
import { withEventConsumer } from "../context";
import style from "../components/styles/Hero.module.css";
import OpeningHours from "../components/caffePage/OpeningHours";
import Administration from "../components/contactPage/Administration";
// import Administration from '../components/contactPage/Administration'
import ContactInfo from "../components/contactPage/ContactInfo";
import Directors from "../components/contactPage/Directors";
import Hero from "../components/Hero";
import image from "../images/imagesHero/ContactHero.jpg";
import TitleCenter from "../components/global/TitleCenter";
import { Helmet } from "react-helmet";

function Contact({ context }) {
  const { hours, locale } = context;

  // opening hours
  let monday = Object(hours[0]).moday;
  let tuesday = Object(hours[0]).tuesday;
  let wednesday = Object(hours[0]).wednesday;
  let thursday = Object(hours[0]).thursday;
  let friday = Object(hours[0]).friday;
  let saturday = Object(hours[0]).saturday;
  let sunday = Object(hours[0]).sunday;

  const myRef = useRef();
  function executeScroll() {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
     <Helmet>
        <title>Student House Contact</title>

        <meta
          name="description"
          content="If you have any questions, please do not hesitate to contact us! You can also get to know our team and contact the person with whom you want to speak directly."
        />

        <meta
          name="keywords"
          content="Student House, Cafe Aalborg, Volunteer Aalborg, Study Place, Aalborg Events, Study Cafe, Contact Student House"
        />
      </Helmet>
    
    <div>
      <header className={style.Container}>
        <div className={style.headerGrid}>
          {/*    ---------------------------- */}
          <div className={style.column1}>
            <div className={style.titleGrid}>
              {locale === "en-US" ? (
                <h1 className={style.titleMain}>Contact</h1>
              ) : (
                <h1 className={style.titleMain}>Contact</h1>
              )}

              {locale === "en-US" ? (
                <h2 className={style.titleSecond}>
                  Reach us if you have questions
                </h2>
              ) : (
                <h2 className={style.titleSecond}>
                  Kontakt os, hvis du har spørgsmål
                </h2>
              )}

              {locale === "en-US" ? (
                <p className={style.paragraph}>
                  If you have any questions, please do not hesitate to contact
                  us! On this page, you can also <strong>get to know our team</strong> a little
                  better and contact the person with whom you want to speak
                  directly. You can also <strong>follow us on social media</strong> to stay up to
                  date on the <strong>latest events</strong> to avoid missing out on the fun!
                </p>
              ) : (
                <p className={style.paragraph}>
                  Hvis du har spørgsmål, så tøv ikke med at kontakte os! Her på
                  siden kan du også lære vores team lidt bedre at kende og
                  kontakte den person, du vil tale direkte med. Du kan også
                  følge os på sociale medier for at holde dig opdateret om de
                  seneste begivenheder for at undgå at gå glip af det sjove!
                </p>
              )}

              <button onClick={executeScroll} className={style.btnPrimary}>
                Contact
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
      <OpeningHours
        monday={monday}
        tuesday={tuesday}
        wednesday={wednesday}
        thursday={thursday}
        friday={friday}
        saturday={saturday}
        sunday={sunday}
      />
      <div ref={myRef}></div>
      <ContactInfo />
      <TitleCenter title={"ADMINISTRATION"} />
      <Administration />
      <Directors />
    </div>
    </>
  );
}

export default withEventConsumer(Contact);
