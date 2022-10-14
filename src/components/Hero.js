import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import style from "./styles/Hero.module.css";





export default function Hero({
  imageHero,
  title,
  subtitle,
  description,
  buttonName,
  buttonLink,
  anchor,
  dateField,
  dateDate,
  timeField,
  timeStart,
  timeEnd,
  doorField,
  doorDoor
}) {
 

  
  
 
  // console.log("LINK ",buttonLink);
  return (
    <header className={style.Container}>
    <div className={style.headerGrid}>
      {/*    ---------------------------- */}
      <div className={style.column1}>
        <div className={style.titleGrid}>
          <h1 className={style.titleMain}>{title}</h1>
          <h2 className={style.titleSecond}>{subtitle}</h2>
          <p className={style.paragraph}>{description}</p>
          {dateDate ?
      <div style={{ display: "flex", columnGap: "1em" ,color:"white"}}>
      <h2>{dateField}</h2>
      <h2>{dateDate}</h2>
    </div>
    :null}
     {timeEnd? 
        <div style={{ display: "flex", columnGap: "1em" ,color:"white"}}>
        <h2>{timeField}</h2>
        <h2>{timeStart} - {timeEnd}</h2>
      </div>
      :null}
      {doorDoor? 
    <div style={{ display: "flex", columnGap: "1em" ,color:"white"}}>
    <h2>{doorField}</h2>
    <h2>{doorDoor}</h2>
    </div>  
    :null}
    {buttonLink? <a  href={buttonLink} target="_blank" rel="noopener noreferrer"  className={style.btnPrimary}>{buttonName}</a> : 
    <button ref={anchor} className={style.btnPrimary}>{buttonName}</button>
    }
          
        </div>
      </div>

      <div className={style.patternBox}></div>

      
      <div
        className={style.imageBox}
        style={{ backgroundImage: `url(${imageHero})` }}
      ></div>
    </div>
  </header>
  );
}

Hero.defaultProps = {
  hero: "defaultHero",
};
