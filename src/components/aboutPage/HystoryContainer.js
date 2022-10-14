import React from "react";

import { withEventConsumer } from "../../context";
import HystoryElement from "./HystoryElement";
import TitleCenter from "../global/TitleCenter"
import style from "../global/styles/featured/Featured.module.css";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
// images
import img1872 from "../../images/hystory/1872.jpg";
import img1874 from "../../images/hystory/1874.jpg";
import img1995 from "../../images/hystory/1995.jpg";
import img2016 from "../../images/hystory/2016.jpg";

function HystoryContainer({ context }) {
  const { locale } = context;

  SwiperCore.use([Autoplay]);


  const checkWindow = window.location.href.indexOf("events") !== -1;

  return (
    <>
    <TitleCenter title={"HISTORY"}/>
      <Swiper
        className={checkWindow ? style.swiperEvents : style.swiperHome}
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        loop={true}
        spaceBetween={0}
        // slidesPerView={2}
        navigation
        //   autoplay={{ delay: 1800 }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: "auto",
          },
          1280: {
            slidesPerView: 2,
          },
        }}
        //   scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <HystoryElement
            image={img1872}
            nameDate={"1872"}
            
            description={
              "Aalborg has a fascinating history, not least Gammeltorv 10. The address has housed various events, businesses and not least stories. Long before hot concerts and cold beers were thought of, the house Gammeltorv 10 in 1872 saw King Hans Gaard, or what was colloquially called ‘Toldergården’. "
            }
            descriptionDa={
              "Aalborg har en fascinerende historie, ikke mindst Gammeltorv 10. Adressen har huset forskellige arrangementer, forretninger og ikke mindst historier. Længe før der var tænkt på varme koncerter og kolde øl, så huset Gammeltorv 10 i 1872 kong Hans Gaard, eller det man i daglig tale kaldte ’Toldergården’."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HystoryElement
            image={img1874}
            nameDate={"1874"}
            description={
              "Fate would have it different, however, and in 1874 bought what would later become the ‘Discount Bank’, the bricks for the purpose of running a bank. In 1938, Diskontobanken carried out a major conversion and extension. Towards Adelgade, a new longhouse was added, which still stands, while an extension towards Gammeltorv was renewed in 1961-63."
            }
            descriptionDa={
              "Skæbnen ville dog have det anderledes og købte i 1874 det, der senere skulle blive ’Discountbanken’, murstenene med det formål at drive en bank. I 1938 foretog Diskontobanken en større om- og tilbygning. Mod Adelgade kom et nyt langhus til, som stadig står, mens en tilbygning mod Gammeltorv blev fornyet i 1961-63."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HystoryElement
            image={img1995}
            nameDate={"1995"}
            description={
              "Gammeltorv 10 had been a bank for 120 years. However, his time as a bank came to an end in 1995, when Danske Bank moved to new premises. This resulted in the address having to house concerts and other experiences under the same roof, which had previously been the bank's. So it became the Student House, which officially was opened in1996."
            }
            descriptionDa={
              "Gammeltorv 10 havde været bank i 120 år. Tiden som bank sluttede dog i 1995, da Danske Bank flyttede til nye lokaler. Det resulterede i, at adressen skulle rumme koncerter og andre oplevelser under samme tag, som tidligere havde været bankens. Så det blev Studenterhuset, som officielt blev åbnet i 1996."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HystoryElement
            image={img2016}
            nameDate={"2016"}
            description={
              "After a quick start with a lot of concerts, debates, aerobics, beer and other goodies at the Student House, the building underwent a major renovation of the facade in 2016, where another floor was added to the building. The purpose of the superstructure was to function as a long-awaited reading room for students and is still used extensively by Aalborg students."
            }
            descriptionDa={
              "Efter en hurtig start med en masse koncerter, debatter, aerobic, øl og andet godt i Studenterhuset, gennemgik bygningen i 2016 en større renovering af facaden, hvor der blev tilføjet endnu en etage til bygningen. Formålet med overbygningen var at fungere som en længe ventet læsesal for elever og bruges stadig flittigt af Aalborg-elever."
            }
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default withEventConsumer(HystoryContainer);
