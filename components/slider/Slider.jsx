import s from "./Slider.module.css";
import { ChevronLeft, ChevronRight } from "../icons";
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
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
          <li key={idx}>
            <a className={`${s.slider__card}`} href="#">
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
