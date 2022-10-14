import React from "react";
import { withEventConsumer } from "../../context";
import TitleCenter from "../global/TitleCenter";

import style from "./styles/roles/Roles.module.css";
import bartender from "./images/bartender.jpg";
import catering from "./images/catering.jpg";
import event from "./images/event.jpg";
import light from "./images/light.jpg";
import music from "./images/music.jpg";
import stage from "./images/stage.jpg";
import arrow from "./images/Arrow.svg";

function Roles({ context }) {
  const { locale } = context;

  return (
    <>
      <TitleCenter title={locale==="en-US"? "ROLES" :"ROLLER"} />
      <div className={style.all}>
        <div className={style.boxArea}>
          <div className={style.singleBox}>
            <img src={bartender} alt="" />
            <div className={style.boxContent}>
              <div className={style.upperInfo}>
                <h3>
                  Bartender <img className={style.arrow} src={arrow} alt="" />
                </h3>
              </div>
              {locale === "en-US" ? (
                <p className={style.lowerInfo}>
                  As a bartender, you will take care of serving people at the
                  bar, provide directions, allow people access to games and
                  other facilities.
                </p>
              ) : (
                <p className={style.lowerInfo}>
                  Som bartender vil du tage dig af at betjene folk i baren, give
                  anvisninger, give folk adgang til spil og andre faciliteter.
                </p>
              )}
            </div>
          </div>
          <div className={style.singleBox}>
            <img src={catering} alt="" />
            <div className={style.boxContent}>
              <div className={style.upperInfo}>
                {locale === "en-US" ? (
                  <h3>
                    Kitchen /Catering{" "}
                    <img className={style.arrow} src={arrow} alt="" />{" "}
                  </h3>
                ) : (
                  <h3>
                    Køkken/forplejning{" "}
                    <img className={style.arrow} src={arrow} alt="" />{" "}
                  </h3>
                )}
              </div>
              {locale === "en-US" ? (
                <p className={style.lowerInfo}>
                  As a Kitchen Volunteer, you will assist in providing snacks to
                  the clients and helping with a clean environment in the
                  kitchen.
                </p>
              ) : (
                <p className={style.lowerInfo}>
                  Som køkkenfrivillig vil du hjælpe med at give snacks til
                  kunderne og hjælpe med et rent miljø i køkkenet.
                </p>
              )}
            </div>
          </div>
          <div className={style.singleBox}>
            <img src={light} alt="" />
            <div className={style.boxContent}>
              <div className={style.upperInfo}>
                {locale === "en-US" ? (
                  <h3>
                    Light manager{" "}
                    <img className={style.arrow} src={arrow} alt="" />{" "}
                  </h3>
                ) : (
                  <h3>
                    Lysleder <img className={style.arrow} src={arrow} alt="" />{" "}
                  </h3>
                )}
              </div>
              {locale === "en-US" ? (
                <p className={style.lowerInfo}>
                  During the concerts, as a Light Manager, you will be in charge
                  of creating the best possible atmosphere! You should have an
                  idea of when we should have more or fewer lights, based on
                  what is going on.
                </p>
              ) : (
                <p className={style.lowerInfo}>
                  Under koncerterne vil du som Light Manager stå for at skabe
                  den bedst mulige stemning! Du bør have en idé om, hvornår vi
                  skal have flere eller færre lys, ud fra hvad der foregår.
                </p>
              )}
            </div>
          </div>
          <div className={style.singleBox}>
            <img src={stage} alt="" />
            <div className={style.boxContent}>
              <div className={style.upperInfo}>
                {locale === "en-US" ? (
                  <h3>
                    Stage Manager{" "}
                    <img className={style.arrow} src={arrow} alt="" />{" "}
                  </h3>
                ) : (
                  <h3>
                    Scene manager{" "}
                    <img className={style.arrow} src={arrow} alt="" />{" "}
                  </h3>
                )}
              </div>
              {locale === "en-US" ? (
                <p className={style.lowerInfo}>
                  As a Stage Manager, you will be in charge of organizing the
                  bands and ensuring that they have everything they need for the
                  concert to take place!
                </p>
              ) : (
                <p className={style.lowerInfo}>
                  Som Stage Manager vil du stå for at organisere bands og sikre,
                  at de har alt, hvad de skal bruge, for at koncerten kan finde
                  sted!
                </p>
              )}
            </div>
          </div>
          <div className={style.singleBox}>
            <img src={music} alt="" />
            <div className={style.boxContent}>
              <div className={style.upperInfo}>
                {locale === "en-US" ? (
                  <h3>
                    Music Coordinator{" "}
                    <img className={style.arrow} src={arrow} alt="" />{" "}
                  </h3>
                ) : (
                  <h3>
                    Musikkoordinator{" "}
                    <img className={style.arrow} src={arrow} alt="" />{" "}
                  </h3>
                )}
              </div>
              {locale === "en-US" ? (
                <p className={style.lowerInfo}>
                  As a Music Coordinator, you will be responsible for ensuring
                  that the music is appropriate for the atmosphere of the
                  student house and that the sound is balanced.
                </p>
              ) : (
                <p className={style.lowerInfo}>
                  Som Musikkoordinator får du ansvaret for, at musikken passer
                  til stemningen i elevhuset, og at lyden er afbalanceret.
                </p>
              )}
            </div>
          </div>
          <div className={style.singleBox}>
            <img src={event} alt="" />
            <div className={style.boxContent}>
              <div className={style.upperInfo}>
                {locale === "en-US" ? (
                  <h3>
                    Event Creator{" "}
                    <img className={style.arrow} src={arrow} alt="" />{" "}
                  </h3>
                ) : (
                  <h3>
                    Event Creator{" "}
                    <img className={style.arrow} src={arrow} alt="" />{" "}
                  </h3>
                )}
              </div>
              {locale === "en-US" ? (
                <p className={style.lowerInfo}>
                  As an event creator, you are in charge of organizing upcoming
                  events and ensuring that everyone has a good time! Let's
                  create the most memorable music events in Aalborg!
                </p>
              ) : (
                <p className={style.lowerInfo}>
                  Som eventskaber er du ansvarlig for at organisere kommende
                  begivenheder og sørge for, at alle har det godt! Lad os skabe
                  de mest mindeværdige musikbegivenheder i Aalborg!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withEventConsumer(Roles);
