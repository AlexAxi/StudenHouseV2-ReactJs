import React from "react";

import style from "./styles/Activities.module.css";


export default function Activities() {
  return (
    <div className={style.container}>
      <div className={style.grid}>
        <div className={style.element1}>
        </div>
        <div className={style.element2}>
          <h2 className={style.title}>ACTIVITIES</h2>
          <table className={style.table}>
            <tr>
              <td><li> Read books</li></td>
              <td><li>Table football</li> </td>
            </tr>
            <tr>
              <td><li>Read newspapers</li> </td>
              <td><li>Board games</li>  </td>
            </tr>
            <tr>
              <td><li>Enjoy drinks</li> </td>
              <td><li>Pool</li> </td>
            </tr>
          </table>
        </div>
        <div className={style.element3}>
         
        </div>
      </div>
    </div>
  );
}
