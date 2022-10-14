import React from "react";

import style from "./styles/OpeningHours.module.css";


export default function OpeningHours({monday, tuesday, wednesday, thursday, friday, saturday, sunday}) {
  return (
    <div className={style.container}>
      <h2 className={style.MainTitle}> OPENING HOURS</h2>
      <div className={style.grid}>
        <div className={style.element1}>
          <h2 className={style.title}>MONDAY</h2>
          <h2 className={style.hours}>{monday}</h2>
        </div>
        <div className={style.element2}>
          <h2 className={style.title}>TUESDAY</h2>
          <h2 className={style.hours}>{tuesday}</h2>
        </div>
        <div className={style.element3}>
          <h2 className={style.title}>WEDNESDAY</h2>
          <h2 className={style.hours}>{wednesday}</h2>
        </div>
        <div className={style.element4}>
          <h2 className={style.title}>THURSDAY</h2>
          <h2 className={style.hours}>{thursday}</h2>
        </div>
        <div className={style.element5}>
          <h2 className={style.title}>FRIDAY</h2>
          <h2 className={style.hours}>{friday}</h2>
        </div>
        <div className={style.element6}>
          <h2 className={style.title}>SATURDAY</h2>
          <h2 className={style.hours}>{saturday}</h2>
        </div>
        <div className={style.element7}>
          <h2 className={style.title1}>SUNDAY</h2>
          <h2 className={style.hours1} style={{textTransform:"uppercase"}}>{sunday}</h2>
        </div>
      </div>
    </div>
  );
}
