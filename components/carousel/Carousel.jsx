import { useState } from "react";
import s from "./Carousel.module.css";
import { ChevronLeft, ChevronRight } from "../icons";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const numImages = images.length;

  const nextSlide = async () => {
    await setCurrentSlide(currentSlide === numImages - 1 ? 0 : currentSlide + 1);
    console.log(currentSlide);
  };

  const prevSlide = async () => {
    await setCurrentSlide(currentSlide === 0 ? numImages - 1 : currentSlide - 1);
    console.log(currentSlide);
  };

  return (
    <div className={s.slider__container}>
      <button
        onClick={() => nextSlide()}
        className={`${s.slider__btn} ${s.slider__btnRight}`}
        aria-label="Select this to see other featured content"
      >
        <ChevronRight />
      </button>
      <button
        onClick={() => prevSlide()}
        className={`${s.slider__btn} ${s.slider__btnLeft}`}
        aria-label="Select this to see other featured content"
      >
        <ChevronLeft />
      </button>
      <div className={s.slider__trackContainer}>
        <ul className={s.slider__track}>
          {images.map((img, idx) => {
            return (
              <li
                key={idx}
                className={
                  idx === currentSlide
                    ? `${s.slider__slide} ${s.slider__slideActive}`
                    : `${s.slider__slide}`
                }
              >
                {idx === currentSlide && (
                  <img className={s.slider__img} src={img.url} alt="" />
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className={s.slider__nav}>
        {images.map((_, idx) => {
          return (
            <button
              onClick={() => setCurrentSlide(idx)}
              key={idx}
              className={
                idx === currentSlide
                  ? `${s.slider__indicator} ${s.slider__indicatorActive}`
                  : `${s.slider__indicator}`
              }
            ></button>
          );
        })}
      </div>
    </div>
  );
}

const images = [
  {
    url: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
];
