import React from "react";
import { useEffect } from "react";

import { withEventConsumer } from "../../context";
import Loading from "../global/Loading";

import Title from "../global/Title";

import FeaturedEvent from "./FeaturedEvent";
import style from "./styles/featured/Featured.module.css";

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
import { Spinner } from "react-bootstrap";

function FeaturedContainer({ context }) {
  const { loading, sortedEvents, featuredEvents } = context;

   console.log("sorted", featuredEvents);
  SwiperCore.use([Autoplay]);


  if (loading) {
    return <Loading />;
  }

  
 
  
  const checkWindow= window.location.href.indexOf("events") !== -1

  return (
  
    

     
        <Swiper
          className={checkWindow ? style.swiperEvents :style.swiperHome}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          loop={true}
          spaceBetween={0}
          // slidesPerView={2}
          navigation
          autoplay={{ delay: 2000, }}
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
          {featuredEvents.map((event) => {
            return (
              <SwiperSlide>
                <FeaturedEvent key={event.id} event={event} />
              </SwiperSlide>
            );
          })}
        </Swiper>
     
   
  );
}

export default withEventConsumer(FeaturedContainer);
