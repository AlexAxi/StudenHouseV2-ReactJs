import React from "react";
import style from "./styles/title/TitleCenter.module.css";
import { Link } from "react-router-dom";

export default function TitleCenter({ title }) {
  return (
    <div className={style.titleWrapper}>
      <h4 className={style.titleH4}>{title}</h4>
    </div>
  );
}
