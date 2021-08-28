import { ChevronLeft, ChevronRight } from "../../icons";
import s from "./SliderButtons.module.css";

const NextSlideBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${s.slider__btn} ${s.slider__btnRight}`}
      aria-label="See other featured content"
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
      aria-label="See other featured content"
    >
      <ChevronLeft style={{ height: "3rem", width: "3rem" }} />
    </button>
  );
};

export { NextSlideBtn, PrevSlideBtn };
