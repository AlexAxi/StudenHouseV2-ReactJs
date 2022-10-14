import React from "react";

import style from "./styles/Gallery.module.css";

// import img1 from "../../images/imagesHero/gallery1.jpg";
// import img2 from "../../images/imagesHero/gallery2.jpg";
// import img3 from "../../images/imagesHero/gallery3.jpg";
// import img4 from "../../images/imagesHero/gallery4.jpg";
// import img5 from "../../images/imagesHero/gallery5.jpg";



export default function Gallery({img1, img2, img3, img4, img5}) {
  return (
    <div className={style.container}>
      <div className={style.grid}>
        <div className={style.element1}>
        <img className={style.image} src={img1} alt="" />
        </div>
        <div className={style.element2}>
        <img className={style.image} src={img5} alt="" />
        </div>
        <div className={style.element3}>
        <img className={style.image} src={img4} alt="" />
        </div>
        <div className={style.element4}>
        <img className={style.image} src={img2} alt="" />
        </div>
        <div className={style.element5}>
        <img className={style.image} src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}
