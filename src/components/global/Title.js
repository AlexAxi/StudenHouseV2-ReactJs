import React from "react";
import style from "./styles/title/Title.module.css"
import { Link } from "react-router-dom";

export default function Title({ title, button }) {
  return (
    <div className={style.titleWrapper}>
      <h4 className={style.titleH4}>{title}</h4>
      {button ? <Link to="/events" className={style.buttonH3}>{button}</Link> : null}
      
    </div>
  );
}
