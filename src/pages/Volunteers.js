import React, { useRef } from "react";
import { withEventConsumer } from "../context";
import style from "../components/styles/Hero.module.css";
import Hero from "../components/Hero";
import Apply from "../components/volunteersPage/Apply";
import Benefits from "../components/volunteersPage/Benefits";
import Meetup from "../components/volunteersPage/Meetup";
import Roles from "../components/volunteersPage/Roles";
import Testimonials from "../components/volunteersPage/Testimonials";
import image from "../images/imagesHero/Volunteer.png";
import ApplicationFormContainer from "../components/volunteersPage/ApplicationFormContainer";
import { Helmet } from "react-helmet";

function Volunteers({ context }) {
  const { volunteer, heroImageVolunteer, heroDescriptionVolunteer, locale } =
    context;

  let heroTitle = Object(volunteer[0]).heroTitle;
  let heroSubtitle = Object(volunteer[0]).heroSubtitle;
  let volunteerMeetupDate = Object(volunteer[0]).volunteerMeetupDate;
  let volunteerMeetupLocation = Object(volunteer[0]).volunteerMeetupLocation;
  let volunteerMeetupTime = Object(volunteer[0]).volunteerMeetupTime;
  let volunteerMeetupEvent = Object(volunteer[0]).volunteerMeetupEvent;

  const myRef = useRef();
  function executeScroll() {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Helmet>
        <title>Student House Volunteer</title>

        <meta
          name="description"
          content="The student house is run by volunteers and a few permanent employees who handle the day-to-day administrative tasks."
        />

        <meta
          name="keywords"
          content="Student House, Cafe Aalborg, Volunteer Aalborg, Study Place, Aalborg Events, Study Cafe"
        />
      </Helmet>
      <div>
        <header className={style.Container}>
          <div className={style.headerGrid}>
            {/*    ---------------------------- */}
            <div className={style.column1}>
              <div className={style.titleGrid}>
                {locale === "en-US" ? (
                  <h1 className={style.titleMain}>BECOME A VOLUNTEER</h1>
                ) : (
                  <h1 className={style.titleMain}>BLIV FRIVILLIG</h1>
                )}

                {locale === "en-US" ? (
                  <h2 className={style.titleSecond}>
                    DEVELOP YOUR FUTURE COMPETENCIES
                  </h2>
                ) : (
                  <h2 className={style.titleSecond}>
                    UDVIKLE DINE FREMTIDIGE KOMPETENCER
                  </h2>
                )}
                {locale === "en-US" ? (
                  <p className={style.paragraph}>
                    The Student House is <strong>run by volunteers</strong> and
                    a few permanent employees who handle the day-to-day
                    administrative tasks.
                    <strong> Volunteers are the most important</strong> part of
                    the Student House, and without them, we would be unable to
                    provide you with all of the fantastic experiences that the
                    Student House is known for.
                  </p>
                ) : (
                  <p className={style.paragraph}>
                    Studenterhuset <strong>drives af frivillige</strong> og
                    enkelte fastansatte medarbejdere, der varetager de daglige
                    administrative opgaver.
                    <strong> Frivillige er en vigtig</strong> del af
                    Studenterhuset, og uden dem ville vi ikke være i stand til
                    at give dig det hele de fantastiske oplevelser, som
                    Studenterhuset er kendt for.
                  </p>
                )}

                <button onClick={executeScroll} className={style.btnPrimary}>
                  {locale === "en-US" ? "APPLY NOW!" : "SØG HER!"}
                </button>
              </div>
            </div>

            <div className={style.patternBox}></div>

            <div
              className={style.imageBox}
              style={{ backgroundImage: `url(${heroImageVolunteer})` }}
            ></div>
          </div>
        </header>
        <Benefits />
        <Roles />
        <div ref={myRef}></div>
        <ApplicationFormContainer />
        <Meetup
          date={volunteerMeetupDate}
          time={volunteerMeetupTime}
          location={volunteerMeetupLocation}
          eventLink={volunteerMeetupEvent}
        />
        <Testimonials />
      </div>
    </>
  );
}
export default withEventConsumer(Volunteers);
