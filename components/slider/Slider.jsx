import { useEffect, useRef, useState } from "react";
import useScreenWidth from "../../utils/useScreenWidth";
import s from "./Slider.module.css";
import { ChevronLeft, ChevronRight } from "../icons";
// import Swiper core and required modules
import Slider from "react-slick";

const NextSlideBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${s.slider__btn} ${s.slider__btnRight}`}
      aria-label="Select this to see other featured content"
    >
      <ChevronRight style={{ height: "3rem", width: "3rem" }} />
    </button>
  );
};

const PrevSlideBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${s.slider__btn} ${s.slider__btnLeft}`}
      aria-label="Select this to see other featured content"
    >
      <ChevronLeft style={{ height: "3rem", width: "3rem" }} />
    </button>
  );
};

const Sliders = ({ images }) => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img style={{ height: "100px", width: "100px" }} src={images[i + 1].img.url} />
        </a>
      );
    },
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextSlideBtn />,
    prevArrow: <PrevSlideBtn />,
  };

  return (
    <Slider className={s.slider__container} {...settings}>
      {images.map((img, idx) => {
        return (
          <li key={idx} className={`${s.slider__slide} `}>
            <a href="#">
              <div className={s.slider__imgContainer}>
                <div>
                  <img className={s.slider__img} src={img.url} alt="" />
                </div>
              </div>
            </a>
          </li>
        );
      })}
    </Slider>
  );
};

export { Sliders };
