import React from "react";
import { withEventConsumer } from "../../context";
import style from  "./styles/Sponsors.module.css"
import commune from "../../images/sponsors/comune.svg"
import university from "../../images/sponsors/university.svg"
import beer from "../../images/sponsors/beer.svg"
import k from "../../images/sponsors/k.svg"

 function Sponsors({context}) {
  const {locale} = context
  return (
    <>
      <div className={style.titleWrapper}>
        <h4 className={style.titleH4}>{locale==="en-US" ? "SPONSORS" :"SPONSORER"}</h4>
      </div>
      <div className={style.sponsors}>
          <img src={commune} className={style.sponsor} />
          <img src={university} className={style.sponsor} />
          <img src={beer} className={style.sponsorBeer} />
          <img src={k} className={style.sponsorK} />
          
      </div>
    </>
  );
}

export default withEventConsumer(Sponsors);