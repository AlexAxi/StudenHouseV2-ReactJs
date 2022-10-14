import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/CaffeSection.module.css"
import imageCaffe from "../../images/imgCaffeHome.jpg"
import { withEventConsumer } from "../../context";


 function CaffeSection({title, description, monTue, wedThu, saturday, sunday, context}) {
  const {hours, locale } = context;
  let friday = Object(hours[0]).friday;
  console.log(locale);
  return (
      <>
      <div  className={style.blueStripe}></div>
    <section className={style.cafeSection}>
      <div className={style.openingHours}>
        <h1 className={style.openHeader}>OPEN</h1>
        <div className={style.line1}></div>
        <div className={style.middle}>
          <div className={style.leftSide}>
            <div>
              <h3 className={style.heading3}>Mon-Tue</h3>
              <p className={style.paragraph}>{monTue}</p>
            </div>
            <div>
              <h3 className={style.heading3} style={{marginTop:".8em"}}>Friday </h3>
              <p className={style.paragraph}>{friday}</p>
            </div>
          </div>
          <div className={style.vl}></div>
          <div className={style.rightSide}>
            <div>
              <h3 className={style.heading3}>Wed - Thu</h3>
              <p className={style.paragraph}>{wedThu}</p>
            </div>
            <div>
              <h3 className={style.heading3} style={{marginTop:".8em"}}>Saturday </h3>
              <p className={style.paragraph}>{saturday}</p>
            </div>
          </div>
        </div>
        <div className={style.line2}></div>
        <div className={style.bottom}>
            <h3 className={style.heading3}>Sunday</h3> 
            <p className={style.paragraph}>we are</p> 
            <h4 className={style.heading4}>{sunday}</h4>
        </div>
      </div>
      <div className={style.imageOpeningHours} style={{backgroundImage:`url(${imageCaffe})`}}></div>
      <div className={style.cafeInfo}>
          <h1 className={style.headingInfo}>{title}</h1>
          <p className={style.pInfo}>{description}</p>
         {locale==="en-US"?  <Link to="/cafe"  className={style.btnPrimary}>SEE THE MENU</Link> :
          <Link to="/cafe"  className={style.btnPrimary}>se menuen</Link>}
         
         
      
      </div>
    </section>
    </>
  );
}

export default withEventConsumer(CaffeSection);