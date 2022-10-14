import React from "react";
import { withEventConsumer } from "../../context";
import style from "./styles/HystoryElement.module.css";

function HystoryElement({ image, nameDate, description, descriptionDa, context }) {

    const { locale } = context;
    return (
      <div className={style.event}>
       
          <img
            src={image}
            style={{ height: "350px", width: "100%", objectFit: "cover" }}
          />

          <div className={style.bottomBar}>
            <p  className={style.name}>
               
              {nameDate}
            </p>
            
          </div>
          <div className={style.descriptionContainer}>
          <p className={style.desc}>
          {locale==="da"? descriptionDa : description  }
              
            </p>
          </div>
         
      </div>
    );
  
}

export default withEventConsumer(HystoryElement);

