import React, { useRef } from "react";
import { withEventConsumer } from "../context";
import style from "../components/styles/Hero.module.css";
import Offers from "../components/caffePage/Offers";
import OpeningHours from "../components/caffePage/OpeningHours";
import Hero from "../components/Hero";
import image from "../../src/images/imagesHero/booking.jpg";
import { Helmet } from "react-helmet";

import Activities from "../components/caffePage/Activities";
import Gallery from "../components/caffePage/Gallery";
import MenuWrapper from "../components/caffePage/MenuWrapper";

function Caffe({ context }) {
  const {
    cafe,
    // heroImageCafe,
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    hours,
    locale,
  } = context;

  console.log("DATA CAFFE", cafe);
  console.log(Object(cafe[0]).caffeSectionTitle);

  let heroTitle = Object(cafe[0]).heroTitle;
  let heroSubtitle = Object(cafe[0]).heroSubtitle;
  let heroDescription = Object(cafe[0]).heroDescription;
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
        <title>Student House Caffe</title>

        <meta
          name="description"
          content="Student House relates to the students, but it also belongs to Aalborg. We are not bound by political beliefs, sexual orientations, or religious beliefs."
        />

        <meta
          name="keywords"
          content="Student House, Cafe Aalborg, Volunteer Aalborg, Study Place, Aalborg Events, Study Cafe,  Aalborg café"
        />
      </Helmet>
      <header className={style.Container}>
        <div className={style.headerGrid}>
          {/*    ---------------------------- */}
          <div className={style.column1}>
            <div className={style.titleGrid}>
              {locale === "en-US" ? (
                <h1 className={style.titleMain}>{"CAFE & BAR"}</h1>
              ) : (
                <h1 className={style.titleMain}>{"CAFE & BAR"}</h1>
              )}

              {locale === "en-US" ? (
                <h2 className={style.titleSecond}>BEST STUDY CAFé IN AALBORG</h2>
              ) : (
                <h2 className={style.titleSecond}>BEDSTE STUDIECAFÉ I AALBORG</h2>
              )}
              {locale === "en-US" ? (
                <p className={style.paragraph}>
                  Student House relates to the students, but it also belongs to
                  Aalborg.{" "}
                  <strong>
                    We are not bound by political beliefs, sexual orientations,
                    or religious beliefs.
                  </strong>{" "}
                  You can enjoy some <strong>drinks</strong> and{" "}
                  <strong>snacks</strong> in our Café, and you are welcome to
                  bring your friends to have some fun in an environment with{" "}
                  <strong>different cultures!</strong>
                </p>
              ) : (
                <p className={style.paragraph}>
                  Studenterhuset forholder sig til de studerende, men det hører
                  også til Aalborg. Vi er ikke bundet af politiske
                  overbevisninger, seksuelle orienteringer eller religiøse
                  overbevisninger. Du kan nyde nogle drinks og snacks i vores
                  Café, og du er velkommen til at tage dine venner med for at
                  have det sjovt i et miljø med forskellige kulturer!
                </p>
              )}

              <button onClick={executeScroll} className={style.btnPrimary}>
                {locale === "en-US" ? "CHECK MENU" : "TJEK MENU"}
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
      <Offers />
      <div ref={myRef}></div>
      <MenuWrapper />
      <Activities />
      <Gallery
        img1={gallery1}
        img2={gallery2}
        img3={gallery3}
        img4={gallery4}
        img5={gallery5}
      />
    </>
  );
}

export default withEventConsumer(Caffe);
