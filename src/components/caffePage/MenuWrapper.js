import React from "react";
import { useState } from "react";
import style from "./styles/Menu.module.css";
import TitleCenter from "../global/TitleCenter";
import Menu from "./Menu";


import MenuNight from "./MenuNight";
import StudentDisc from "./StudentDisc";

export default function MenuWrapper() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <TitleCenter title={"BAR MENU"} />
      <div className={style.buttonsWrapper}>
        <button
          className={
            toggleState === 1 ? style.menuButton  : style.menuButtonActive
          }
          onClick={() => toggleTab(1)}
        >
          Various beverages
        </button>

        <button
          className={
            toggleState === 2 ? style.menuButton  : style.menuButtonActive
          }
          onClick={() => toggleTab(2)}
        >
          Alcoholic drinks
        </button>
        <button
          className={
            toggleState === 3 ? style.menuButton  : style.menuButtonActive
          }
          onClick={() => toggleTab(3)}
        >
          Student Discount
        </button>
      </div>
      <div className={style.menuWrapper}>
          {toggleState === 1 ?  <Menu/> : toggleState === 2 ?  <MenuNight/> : <StudentDisc/>}
        
      </div>
    </>
  );
}
