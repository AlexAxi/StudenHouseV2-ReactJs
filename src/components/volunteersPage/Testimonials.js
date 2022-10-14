import React from "react";
import { withEventConsumer } from "../../context";
import style from "./styles/testimonials/Testimonials.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image from "../../../src/components/volunteersPage/images/volunteer2.jpg";
import TitleCenter from "../global/TitleCenter";

function Testimonials({ context }) {
  const {
    testimonials,
    imageTestimonial1,
    imageTestimonial2,
    imageTestimonial3,
    testimonial1,
    testimonial2,
    testimonial3,
    locale,
  } = context;

  let name1 = Object(testimonials[0]).name;
  let name2 = Object(testimonials[1]).name;
  let name3 = Object(testimonials[2]).name;
  let role1 = Object(testimonials[0]).role;
  let role2 = Object(testimonials[1]).role;
  let role3 = Object(testimonials[2]).role;

  return (
    <>
      <TitleCenter title={"TESTIMONIALS"} />

      <div className={style.Container}>
        <div className={style.Container1}>
          {locale === "en-US" ? (
            <h1 className={style.Header}>
              What people say about being <br />
              <text style={style.highlight}> a volunteer at Student House</text>
            </h1>
          ) : (
            <h1 className={style.Header}>
              Hvad folk siger om at være <br />
              <text style={style.highlight}> frivillig i Studentehuset</text>
            </h1>
          )}
        </div>

        <div className={style.Container2}>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            interval={6100}
          >
            <div className={style.slide}>
              <img
                className={style.carouselIMG}
                src={imageTestimonial1}
                alt="avatar"
              />
              <div className={style.myCarousel}>
                <h3>{name1}</h3>
                <h4>{role1}</h4>
                <p>{testimonial1}</p>
              </div>
            </div>

            <div className={style.slide}>
              <img
                className={style.carouselIMG}
                src={imageTestimonial2}
                alt="avatar"
              />
              <div className={style.myCarousel}>
                <h3>{name2}</h3>
                <h4>{role2}</h4>
                <p>{testimonial2}</p>
              </div>
            </div>

            <div className={style.slide}>
              <img
                className={style.carouselIMG}
                src={imageTestimonial3}
                alt="avatar"
              />
              <div className={style.myCarousel}>
                <h3>{name3}</h3>
                <h4>{role3}</h4>
                <p>{testimonial3}</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default withEventConsumer(Testimonials);
