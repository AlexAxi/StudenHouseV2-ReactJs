import React from "react";

import style from "./styles/StudentDisc.module.css";

 import logo from "../../images/imagesHero/logo.svg";
 import banner from "../../images/imagesHero/banner2.jpg";
 import banner2 from "../../images/imagesHero/banner2.jpg";


export default function StudentDisc() {
  return (
    <div className={style.container}>
      <div className={style.grid}>
      <div className={style.banner1}>
          <img className={style.bannerImg} src={banner} alt="" />
          <h3 className={style.menuTitle}> STUDENT DISCOUNT </h3>
          <img className={style.bannerImg} src={banner2} alt="" />
        </div>

        <div className={style.element1}>
          <div className={style.product}>
            <p className={style.productName}> COFFE / TEA </p>
            <p className={style.dots}> ................. </p>
            <p className={style.price}> 15 KR.</p>
          </div>
          <div className={style.product}>
            <p className={style.productName}> COFFE / TEA (TO- GO) </p>
            <p className={style.dots}> ................ </p>
            <p className={style.price}> 20 KR.</p>
          </div>
          <div className={style.product}>
            <p className={style.productName}> ROYAL PILSNER </p>
            <p className={style.dots}> ................ </p>
            <p className={style.price}> 40 KR.</p>
          </div>
          <div className={style.product}>
            <p className={style.productName}> ROYAL CLASSIC</p>
            <p className={style.dots}> ................. </p>
            <p className={style.price}> 40 KR.</p>
          </div>
          <div className={style.product}>
            <p className={style.productName}> SODA</p>
            <p className={style.dots}> ................... </p>
            <p className={style.price}> 20 KR.</p>
          </div>
        </div>
        
        <div className={style.element2}>
        <div className={style.product}>
            <p className={style.productName}> GIN AND TONIC </p>
            <p className={style.dots}> .................. </p>
            <p className={style.price}> 40 KR.</p>
          </div>
          <div className={style.product}>
            <p className={style.productName}> SCREWDRIVER </p>
            <p className={style.dots}> ................ </p>
            <p className={style.price}> 40 KR.</p>
          </div>
          <div className={style.product}>
            <p className={style.productName}> RUM AND COKE</p>
            <p className={style.dots}> ................. </p>
            <p className={style.price}> 40 KR.</p>
          </div>
          <div className={style.product}>
            <p className={style.productName}> VODKA BOOSTER</p>
            <p className={style.dots}> ................ </p>
            <p className={style.price}> 40 KR.</p>
          </div>
          <div className={style.product}>
            <p className={style.productName}> WISKEY AND COKE</p>
            <p className={style.dots}> ................. </p>
            <p className={style.price}> 40 KR.</p>
          </div>
        </div>
         <div className={style.element3}>
            <p className={style.text}>Student discount apply with a valid student card to higher education (AAU, UCN, and the like)</p>
        </div>
        <div className={style.element4}>
        <img className={style.logo} src={logo} alt="" />
        </div> 
      </div>
    </div>
  );
}
