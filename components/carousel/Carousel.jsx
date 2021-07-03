import s from "./Carousel.module.css";

export default function Carousel() {
  return (
    <div className="slick-list">
      <button
        className={s.carouselNavBtn}
        aria-label="Select this to see other featured content"
      >
        RIght
      </button>
      <button
        className={s.carouselNavBtn}
        aria-label="Select this to see other featured content"
      >
        Left
      </button>
      <div className="slick-track"></div>
      <div className="slick-list-nav"></div>
    </div>
  );
}
