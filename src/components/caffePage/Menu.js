import React from "react";

import style from "./styles/Menu.module.css";
import banner from "../../images/Caffe/banner.jpg";
import banner2 from "../../images/Caffe/banner2.jpg";
import bottle from "../../images/Caffe/beer2.png";
import beer from "../../images/Caffe/beer.png";
import softDrink from "../../images/Caffe/soft-drink.png";
import popcorn from "../../images/Caffe/popcorn.png";
import hotDrink from "../../images/Caffe/coffee.png";
import wineIcon from "../../images/Caffe/alcohol.png";

export default function Menu() {
  return (
    <div className={style.container}>
      <div className={style.GridMenu}>
        <div className={style.banner}>
          <img className={style.bannerImg} src={banner} alt="" />
          <h3 className={style.menuTitle}> STUDENTHUSET</h3>
          <img className={style.bannerImg} src={banner2} alt="" />
        </div>

        {/* ------------ START COLLUM 1 ----------- */}

        <div className={style.collum1}>
          <div className={style.category}>
            <img className={style.icon} src={bottle} alt="" />
            <h3 className={style.title}> BOTTLED BEER | CIDER | RTD </h3>
            <div className={style.line}> </div>
          </div>

          <div className={style.product}>
            <p className={style.productName}> Royal Pilsner </p>
            <p className={style.price}> 30 kr.</p>
          </div>

          <div className={style.product1}>
            <p className={style.productName}>Royal Pilsner 0,0 Alcohol Free</p>
            <p className={style.price}> 30 kr.</p>
          </div>

          <div className={style.product2}>
            <p className={style.productName}>Aalborg Pilsner </p>
            <p className={style.price}> 35 kr.</p>
          </div>

          <div className={style.product3}>
            <p className={style.productName}>Blå Thor </p>
            <p className={style.price}> 35 kr.</p>
          </div>

          <div className={style.product4}>
            <p className={style.productName}>San Miguel | Gluten Free </p>
            <p className={style.price}> 40 kr.</p>
          </div>

          <div className={style.product5}>
            <p className={style.productName}>Pift </p>
            <p className={style.price}> 45 kr.</p>
          </div>

          <div className={style.product6}>
            <p className={style.productName}>Kissmeyer | Various </p>
            <p className={style.price}> 45 kr.</p>
          </div>

          <div className={style.product7}>
            <p className={style.productName}>Lottrup | Various</p>
            <p className={style.price}> 45 kr.</p>
          </div>

          <div className={style.product8}>
            <p className={style.productName}>Mokaï / Shaker </p>
            <p className={style.price}> 45 kr.</p>
          </div>
        </div>

        {/* ------------ START COLLUM 2 ----------- */}

        <div className={style.collum2}>
          <div className={style.category}>
            <img className={style.icon} src={beer} alt="" />
            <h3 className={style.title}>DRAFT BEER </h3>
            <div className={style.line}> </div>
            <p className={style.size}> small | big </p>
          </div>

          <div className={style.product}>
            <p className={style.productName}> Royal Pilsner </p>
            <p className={style.price}> 35 kr | 45 kr</p>
          </div>

          <div className={style.product1}>
            <p className={style.productName}>Royal Classic</p>
            <p className={style.price}>35 kr | 45 kr</p>
          </div>

          <div className={style.product2}>
            <p className={style.productName}>Royal Øko Pilsner </p>
            <p className={style.price}> 37 kr | 47 kr</p>
          </div>

          <div className={style.product3}>
            <p className={style.productName}>Royal Øko Classic</p>
            <p className={style.price}> 37 kr | 47 kr</p>
          </div>

          <div className={style.product4}>
            <p className={style.productName}>Royal Øko IPA </p>
            <p className={style.price}> 40 kr | 50 kr</p>
          </div>

          <div className={style.product5}>
            <p className={style.productName}>Albani Mosaic IPA </p>
            <p className={style.price}> 40 kr | 50 kr </p>
          </div>

          <div className={style.product6}>
            <p className={style.productName}>Pift Citrus </p>
            <p className={style.price}> 40 kr | 50 kr</p>
          </div>

          <div className={style.product7}>
            <p className={style.productName}>Anarkist Bloody Weizen 40 cl.</p>
            <p className={style.price}>
              <span>&nbsp;&nbsp;</span> | 50 kr
            </p>
          </div>

          <div className={style.product8}>
            <p className={style.productName}>Happy Joe Cider 40 cl </p>
            <p className={style.price}>
              <span>&nbsp;&nbsp;</span> | 50 kr{" "}
            </p>
          </div>
        </div>

        {/* ------------ Start COLLUM 3 ----------- */}

        <div className={style.collum3}>
          <div className={style.category}>
            <img className={style.icon} src={softDrink} alt="" />
            <h3 className={style.title}> SOFT DRINKS </h3>
            <div className={style.lineBig}> </div>
          </div>

          <div className={style.product}>
            <p className={style.productName}> Soda</p>
            <p className={style.price}> 25 kr.</p>
          </div>

          <div className={style.product1}>
            <p className={style.productName}>Cocio</p>
            <p className={style.price}> 30 kr.</p>
          </div>

          <div className={style.product2}>
            <p className={style.productName}>Adelhart Organic Juice </p>
            <p className={style.price}> 30 kr.</p>
          </div>

          <div className={style.product3}>
            <p className={style.productName}>Blå Thor </p>
            <p className={style.price}> 35 kr.</p>
          </div>

          <div className={style.product4}>
            <p className={style.productName}>Ginger Beer </p>
            <p className={style.price}> 30 kr.</p>
          </div>

          <div className={style.product5}>
            <p className={style.productName}>Booster Energy</p>
            <p className={style.price}> 35 kr.</p>
          </div>

          <div className={style.product6}>
            <p className={style.productName}>
              Egekilde{" "}
              <p className={style.productSmall}> Bottled Water 50 cl.</p>
            </p>

            <p className={style.price}> 25 kr.</p>
          </div>
        </div>

        {/* ------------ Start COLLUM 1 - row 2 ----------- */}

        <div className={style.collum1}>
            <div className={style.row2}>
          <div className={style.category}>
            <img className={style.icon} src={popcorn} alt="" />
            <h3 className={style.title}> SNACKS </h3>
            <div className={style.lineBig}> </div>
          </div>

          <div className={style.product}>
            <p className={style.productName}> Peanuts</p>
            <p className={style.price}> 12 kr.</p>
          </div>

          <div className={style.product1}>
            <p className={style.productName}>Lay’s</p>
            <p className={style.price}> 12 kr.</p>
          </div>

          <div className={style.product2}>
            <p className={style.productName}>Popcorn </p>
            <p className={style.price}> 20 kr.</p>
          </div>

          <div className={style.product3}>
            <p className={style.productName}>Chewing Gum </p>
            <p className={style.price}> 13 kr.</p>
          </div>

          <div className={style.product4}>
            <p className={style.productName}>Chocolate Bar </p>
            <p className={style.price}> 16 kr.</p>
          </div>
        </div>
        </div>
        {/* ------------ Start COLLUM 2 - row 2 ----------- */}

        <div className={style.collum2}>
          <div className={style.collumSmall}>
          <div className={style.category}>
            <img className={style.icon} src={hotDrink} alt="" />
            <h3 className={style.title}> HOT DRINKS </h3>
            <div className={style.lineBig}> </div>
          </div>

          <div className={style.product}>
            <p className={style.productName}> Coffee / Tea</p>
            <p className={style.price}> 25 kr.</p>
          </div>

          <div className={style.product1}>
            <p className={style.productName}>A Pot of Coffee / Tea</p>
            <p className={style.price}> 70 kr.</p>
          </div>

          <div className={style.product2}>
            <p className={style.productName}>Cocoa </p>
            <p className={style.price}> 30 kr.</p>
          </div>
          </div>

          <div className={style.product3}>
            <p className={style.productName}>Ice Coffee </p>
            <p className={style.price}> 30 kr.</p>
          </div>
        </div>

        {/* ------------ Start COLLUM 3 - row 2 ----------- */}

        <div className={style.collum3Net}>
            <div className={style.net}>
          <div className={style.category}>
            <p className={style.noIcon} />
            <h3 className={style.title}> FREE Wi-Fi </h3>
            <div className={style.lineBig}> </div>
          </div>

          <div className={style.product}>
            <p className={style.productName}> NETWORK NAME:</p>
          </div>

          <div className={style.product1}>
            <p className={style.productName}>Studenterhuset-Café-Bar</p>
          </div>

          <div className={style.product3}>
            <p className={style.productName}>
              <span>&nbsp;&nbsp;</span>
            </p>
          </div>

          <div className={style.product2}>
            <p className={style.productName}>PASSWORD: </p>
          </div>

          <div className={style.product3}>
            <p className={style.productName}>studenterhuset</p>
          </div>
        </div>
        </div>

        {/* ------------ Start COLLUM 2 - row 3 ----------- */}

        <div className={style.collum2}>
        <div className={style.wine}>
          <div className={style.category}>
            <img className={style.icon} src={wineIcon} alt="" />
            <h3 className={style.title}>WINE </h3>
            <div className={style.lineBig}> </div>
            <p className={style.size}> 25 CL </p>
          </div>

          <div className={style.product}>
            <p className={style.productName}> Red / White / Rose</p>
            <p className={style.price}> 55 kr.</p>
          </div>
        </div>
        </div>

        {/* ------------ Start COLLUM 3 - row 3 ----------- */}

        <div className={style.collum3}>
        <div className={style.snack}>
          <div className={style.category}>
            <p className={style.text}>
              BRINGING YOUR OWN BEVERAGES IN STUDENTERHUSET IS A <b> NO-NO!</b> SALES OF
              BEVERAGES IS THE LIVELIHOOD OF STUDENTERHUSET!
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
