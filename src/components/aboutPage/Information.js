import React from "react";
import { withEventConsumer } from "../../context";
import style from "./styles/Information.module.css";

import about1 from "../../images/imagesHero/about1.jpg";
import about2 from "../../images/imagesHero/about2.jpg";
import about3 from "../../images/imagesHero/about3.jpg";

function Information({title1, image1, description1, description11, 
  title2, image2, description2, description22, 
  title3, image3, description3, description33, 
  title4, image4, description4, description44, 
  title5, image5, description5, description55, 
  
  context}) {

  const {  locale } = context;
  return (
    <div className={style.container}>
       {/* 1 */}
      <div className={style.wrapper}>
      <div className={style.text}>
        <p>  <b className={style.number}> 01 - {title1}</b> <span>&nbsp;&nbsp;</span>
        <br></br>
          <br></br>
          <p className={style.txt} >{description1}</p>
         
         
         <br></br>
         <p className={style.txt}>{description11}</p>
         
        </p>
      </div>
      <div className={style.img} style={{backgroundImage: `url(${image1})` }}>
        
      </div>
      </div>

      {/* 2 */}
      <div className={style.wrapperReverse}>
      <div className={style.img} style={{backgroundImage: `url(${image2})` }}>
      
      </div>
      <div className={style.text}>
        <p>  <b className={style.number}> 02 - {title2} </b> <span>&nbsp;&nbsp;</span> <br></br>
          <br></br>
          <p className={style.txt}>{description2}</p>
         
          
          <br></br>
          <p className={style.txt}>{description22}</p>
       
        </p>
      </div>
      </div>
       {/* 3 */}
       {image3? 
       <div className={style.wrapper}>
       <div className={style.text}>
         <p> <b className={style.number}> 03 - {title3}</b> <span>&nbsp;&nbsp;</span>
         <br></br>
           <br></br>
           <p className={style.txt}>{description3}</p>
          
           
           <br></br>
           <p className={style.txt}>{description33}</p>
           
         </p>
       </div>
      
       <div className={style.img} style={{backgroundImage: `url(${image3})` }}>
        
       </div>
       </div>
       : null}
      
       {/* 4 */}
       {image4 ?
       <div className={style.wrapperReverse}>
       <div className={style.img} style={{backgroundImage: `url(${image4})` }}>
         
       </div>
       <div className={style.text}>
         <p>  <b className={style.number}> 04 - {title4} </b> <span>&nbsp;&nbsp;</span> <br></br>
           <br></br>
           <p className={style.txt}>{description4}</p>
          
           <br></br>
          <p className={style.txt}>{description44}</p>
       
         </p>
       </div>
       </div>
       : null}
      
       {/* 5 */}
       {image5? 
       <div className={style.wrapper}>
       <div className={style.text}>
         <p> <b className={style.number}> 05 - {title5}</b> <span>&nbsp;&nbsp;</span>
         <br></br>
           <br></br>
           <p className={style.txt}>{description5}</p>
           
           
           
         </p>
       </div>
       <div className={style.img} style={{backgroundImage: `url(${image5})` }}>
       
       </div>
       </div>
       
       : null}
      
    </div>
  );
}
export default withEventConsumer(Information);