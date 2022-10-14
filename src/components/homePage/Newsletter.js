// !!!!!!!!!!!!!!       NOT IN USE        !!!!!!!!/////////////////////////////////////////////////////////////


import React from "react";
import { withEventConsumer } from "../../context";
import style from "./styles/Newsletter.module.css";

function Newsletter({ context }) {
  const { locale } = context;
  return (
    <div className={style.newsletter}>
      <div className={style.wrapper}>
        <div>
          {locale === "da" ? (
            <h1 className={style.headingNewsletter}>
              TILMELD DIG VORES &nbsp;
              <span style={{ color: "#5874B6" }}>NYHEDSBREV &nbsp;</span>
              AT FÅ OPDATERINGER OM DE NYESTE BEGIVENHEDER OG TILBUD!
            </h1>
          ) : (
            <h1 className={style.headingNewsletter}>
              JOIN OUR &nbsp;
              <span style={{ color: "#5874B6" }}>NEWSLETTER &nbsp;</span>
              TO GET UPDATES ABOUT THE LATEST EVENTS AND OFFERS!
            </h1>
          )}
        </div>

        <form
          className={style.fields}
          action=""
          method=""
          enctype="text/plain"
        >
          <input
            className={style.input}
            type="text"
            placeholder={locale === "en-US" ? "ENTER YOUR NAME" : "INDTAST DIT NAVN"}
            style={{ marginTop: ".5em" }}
          />
          <input
            className={style.input}
            type="text"
            placeholder={locale === "en-US" ? "ENTER YOUR EMAIL" : "INDGIV DIN EMAIL"}
          />
          <button
            className={style.btnPrimary}
            type=""
            value={locale === "en-US" ? "Subscribe" : "Abonner"}
          >{locale === "en-US" ? "Subscribe" : "Abonner"}</button>
        </form>
      </div>
    </div>
  );
}
export default withEventConsumer(Newsletter);
