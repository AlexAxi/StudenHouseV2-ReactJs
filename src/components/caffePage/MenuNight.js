import React from "react";

import style from "./styles/MenuNight.module.css";
import banner from "../../images/imagesHero/banner1-1.png";
import banner2 from "../../images/imagesHero/banner1-2.png";
import beer from "../../images/imagesHero/drinks.png";
import lux from "../../images/imagesHero/lux.png";
import cocktail from "../../images/imagesHero/cocktail.png";
import hot from "../../images/imagesHero/hot.png";

export default function MenuNight() {
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
            <img className={style.icon} src={beer} alt="" />
            <h3 className={style.title}>DRINKS </h3>
            <div className={style.line}> </div>
            <p className={style.size}> 3 cl. | 6 cl. </p>
          </div>

          <div className={style.product}>
            <p className={style.productName}>
              Gin and Tonic
              <p className={style.productSmall}> Gin, Tonic Soda</p>
            </p>
            <p className={style.price}> 45kr | 60kr </p>
          </div>
          <br></br>
          <div className={style.product1}>
            <p className={style.productName}>
              Screwdriver
              <p className={style.productSmall}> Vodka, Orange Juice</p>
            </p>
            <p className={style.price}> 45kr | 60kr</p>
          </div>
          <br></br>
          <div className={style.product2}>
            <p className={style.productName}>
              Rum and Coke <p className={style.productSmall}> Rum, Pepsi</p>
            </p>
            <p className={style.price}> 45kr | 60kr</p>
          </div>
          <br></br>
          <div className={style.product3}>
            <p className={style.productName}>
              Vodka Booster
              <p className={style.productSmall}> Vodka, Booster Energy</p>
            </p>
            <p className={style.price}> 45kr | 60kr</p>
          </div>
          <br></br>
          <div className={style.product4}>
            <p className={style.productName}>
              Whiskey and Coke
              <p className={style.productSmall}> Whiskey, Pepsi</p>
            </p>
            <p className={style.price}> 45kr | 60kr</p>
          </div>
        </div>

        {/* ------------ START COLLUM 2 ----------- */}

        <div className={style.collum2}>
          <div className={style.category}>
            <img className={style.icon} src={lux} alt="" />
            <h3 className={style.title}>REGULAR SPIRITS</h3>
            <div className={style.line}> </div>
          </div>

          <div className={style.product}>
            <p className={style.productName}> Single 3 cl.</p>
            <p className={style.price}> 35 kr </p>
          </div>

          <div className={style.product1}>
            <p className={style.productName}>Double 6 cl.</p>
            <p className={style.price}>50 kr</p>
          </div>
        </div>

        {/* ------------ Start COLLUM 3 ----------- */}

        <div className={style.collum3}>
          <div className={style.category}>
            <img className={style.icon} src={cocktail} alt="" />
            <h3 className={style.title}>COCKTAILS </h3>
            <div className={style.lineBig}> </div>
            <p className={style.size}>6 cl. </p>
          </div>

          <div className={style.product}>
            <p className={style.productName}>
              White Russian
              <p className={style.productSmall}>
                Kahlúa 3 cl., Vodka 3 cl., Milk
              </p>
            </p>
            <p className={style.price}> 65kr</p>
          </div>
          <br></br>
          <div className={style.product1}>
            <p className={style.productName}>
              Gin Hass
              <p className={style.productSmall}>Gin 6 cl., Lemon Soda, <br></br>Mango Syrup, Lime</p>
            </p>
            <p className={style.price}> 65 kr.</p>
          </div>
          <br></br>
          <div className={style.product2}>
          <p className={style.productName}>
          Apple Cake
          <p className={style.productSmall}>Vodka 3 cl., Galliano 3 cl., <br></br>Apple Juice, Whipped Cream</p>
            </p>
            <p className={style.price}> 65 kr.</p>
          </div>
          <br></br>
          <div className={style.product3}>
          <p className={style.productName}>
          Dark and Stormy
          <p className={style.productSmall}>Dark Rum 6 cl., Lime,<br></br>Ginger Beer</p>
            </p>
            <p className={style.price}> 65 kr.</p>
          </div>
          <br></br>
          <div className={style.product4}>
          <p className={style.productName}>
          Astronaut
          <p className={style.productSmall}>Råstof Strawberry-Rhubarb 6 cl.,<br></br>Lemon Soda, Lime juicer</p>
            </p>
            <p className={style.price}> 65 kr.</p>
          </div>

        
        </div>

        {/* ------------ Start COLLUM 1 - row 2 ----------- */}

        <div className={style.collum1T}>
          <div className={style.row2}>
            <div className={style.category}>
              <img className={style.icon} src={lux} alt="" />
              <h3 className={style.title}> LUX SPIRITS </h3>
              <div className={style.line}> </div>
              <p className={style.size}> 3 cl. | 6 cl. </p>
            </div>

            <div className={style.product}>
            <p className={style.productName}> Diplomatico Rum </p>
            <p className={style.price}> 45kr | 60kr</p>
            </div>

            <div className={style.product1}>
            <p className={style.productName}> Hennesy Cognac </p>
            <p className={style.price}> 45kr | 60kr</p>
            </div>

            <div className={style.product2}>
            <p className={style.productName}> Pernod Absinthe </p>
            <p className={style.price}> 45kr | 60kr</p>
            </div>

            <div className={style.product3}>
            <p className={style.productName}> Talisker Whisky </p>
            <p className={style.price}> 45kr | 60kr</p>
            </div>

            <div className={style.product4}>
            <p className={style.productName}> Ocho Tequila </p>
            <p className={style.price}> 45kr | 60kr</p>
            </div>
          </div>
        </div>
        {/* ------------ Start COLLUM 2 - row 2 ----------- */}

        <div className={style.collum2}>
          <div className={style.collumSmall}>
            <div className={style.category}>
            <p className={style.noIcon} />
              <h3 className={style.title}>3 CL. SHOT</h3>
              <div className={style.lineBig}> </div>
              <p className={style.size}>1 pc. | 10 pcs. </p>
            </div>

            <div className={style.product}>
            <p className={style.productName}> Ga-jol </p>
            <p className={style.price}> 15kr | 125kr</p>
            </div>

            <div className={style.product1}>
            <p className={style.productName}> Fisk </p>
            <p className={style.price}> 15kr | 125kr</p>
            </div>

            <div className={style.product2}>
            <p className={style.productName}> Små Sure </p>
            <p className={style.price}> 15kr | 125kr</p>
            </div>
          </div>

          <div className={style.product3}>
            <p className={style.productName}>Jägermeister </p>
            <p className={style.price}> 25 kr.</p>
          </div>

          <div className={style.product4}>
            <p className={style.productName}>Tequila </p>
            <p className={style.price}> 25 kr.</p>
          </div>

          <div className={style.product5}>
            <p className={style.productName}>Arnbitter </p>
            <p className={style.price}> 25 kr.</p>
          </div>

          <div className={style.product6}>
            <p className={style.productName}>Sambuca</p>
            <p className={style.price}> 25 kr.</p>
          </div>

          <div className={style.product7}>
            <p className={style.productName}>Fernet Branca</p>
            <p className={style.price}> 25 kr.</p>
          </div>

        </div>

       

        {/* ------------ Start COLLUM 2 - row 3 ----------- */}

        <div className={style.collum2}>
          <div className={style.wine}>
            <div className={style.category}>
              <img className={style.icon} src={hot} alt="" />
              <h3 className={style.title}>HOT DRINKS </h3>
              <div className={style.lineBig}> </div>
            </div>

            <div className={style.product}>
              <p className={style.productName}>Galiano Hot Shot</p>
              <p className={style.price}> 30 kr.</p>
            </div>

            <div className={style.product1}>
              <p className={style.productName}> Irish Coffee</p>
              <p className={style.price}> 35 kr.</p>
            </div>
          </div>
        </div>

        {/* ------------ Start COLLUM 3 - row 3 ----------- */}

        <div className={style.collum3}>
          <div className={style.snack}>
            <div className={style.category}>
              <p className={style.text}>
              STUDENTERHUSET.DK
          </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
