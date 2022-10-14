import React from "react";
import Hero from "../components/Hero";

import { Link } from "react-router-dom";
import btnStyle from "../components/global/styles/button/Button.module.css"

export default function Error() {
  return (
    <div>
      <section className="errorWrapper">
        <h1 className="h1Error">PAGE NOT FOUND</h1>
        <Link to={"/"} className={btnStyle.btnPrimary}>BACK HOME</Link>
      </section>
    </div>
  );
}
