import React from "react";

import style from "./styles/CheckFacilities.module.css";
import btnStyle from "../global/styles/button/Button.module.css";

export default function CheckFacilities() {
  return (
    <div className={style.container}>
      <div className={style.text1}>
        <p>
          <b className={style.title}> FACILITIES</b> <span>&nbsp;&nbsp;</span>
          <br></br>
          Check the facilities that Student House offers!
        </p>
      </div>
      <div className={style.btnContainer}>
        <a href="/facilities" style={{textDecoration:"none"}}>
        <button className={btnStyle.btnPrimary}style={{marginTop:"2em"}} >SEE FACILITIES</button>
        </a>
      </div>
    </div>
  );
}
