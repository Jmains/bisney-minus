import { useEffect, useRef, useState } from "react";
import s from "./Carousel.module.css";
import { ChevronLeft, ChevronRight } from "../icons";

export default function Carousel() {
  const numImages = images.length;
  const slideRef = useRef();
  const trackRef = useRef();

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slides = Array.from(trackRef.current?.children);
    const slideWidth = slides[0].getBoundingClientRect().width ?? 0;

    slides.forEach((slide, idx) => {
      initializeSlidePosition(slide, slideWidth, idx);
    });

    const nextSlideIntervalId = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(nextSlideIntervalId);
  }, [currentSlide]);

  const initializeSlidePosition = (slide, slideWidth, idx) => {
    slide.style.left = slideWidth * idx + "px";
  };

  const moveToSlide = (track, targetSlide) => {
    const amountToMove = targetSlide?.style.left;
    track.style.transform = `translateX(-${amountToMove})`;
  };

  const nextSlide = () => {
    const currentSlideFrame = trackRef.current?.children[currentSlide];
    const track = trackRef?.current;

    let targetSlide;
    if (currentSlide === numImages - 1) {
      targetSlide = trackRef.current?.children[0];
    } else {
      targetSlide = currentSlideFrame?.nextElementSibling;
    }

    moveToSlide(track, targetSlide);
    setCurrentSlide(currentSlide === numImages - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    const currentSlideFrame = trackRef.current?.children[currentSlide];
    const track = trackRef?.current;

    let targetSlide;
    if (currentSlide === 0) {
      targetSlide = trackRef.current?.children[numImages - 1];
    } else {
      targetSlide = currentSlideFrame?.previousElementSibling;
    }

    moveToSlide(track, targetSlide);
    setCurrentSlide(currentSlide === 0 ? numImages - 1 : currentSlide - 1);
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
        <ul ref={trackRef} className={s.slider__track}>
          {images.map((img, idx) => {
            return (
              <li
                ref={slideRef}
                key={idx}
                className={
                  idx === currentSlide
                    ? `${s.slider__slide} ${s.slider__slideActive}`
                    : `${s.slider__slide}`
                }
              >
                <img className={s.slider__img} src={img.url} alt="" />
              </li>
            );
          })}
        </ul>
      </div>

      <ul className={s.slider__nav}>
        {images.map((_, idx) => {
          return (
            <li
              className={s.slider__navListItem}
              onClick={() => {
                const targetSlide = trackRef.current?.children[idx];
                const track = trackRef?.current;
                moveToSlide(track, targetSlide);
                setCurrentSlide(idx);
              }}
              key={idx}
            >
              <button
                className={
                  idx === currentSlide
                    ? `${s.slider__indicator} ${s.slider__indicator_Active}`
                    : `${s.slider__indicator}`
                }
                tabIndex="-1"
              ></button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const images = [
  {
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CDA9EBD83D1626C612F36B657726A7082333B08C0DC5DBC1DA8F213F9E7D7CEC/scale?width=2880&aspectRatio=3.91&format=jpeg",
  },
  {
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/85D4A885E7C6CFCADD3A6F75D71298376F93F5D935AFDD430EF4D49DDAFEC508/badging?width=2880&aspectRatio=3.91&format=jpeg&label=scrim391",
  },
  {
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6B9D6D64715852305242DD99AA2050EB5EF565ABB346A644064362D7862E2A3E/badging?width=2880&aspectRatio=3.91&format=jpeg&label=scrim391",
  },
  {
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/424E8754197A0455E37743686B867BFC0C01C178DCDAD711E11BA8D1D6D7242B/scale?width=2880&aspectRatio=3.91&format=jpeg",
  },
  {
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E48BE9167BAA5FC076FDB210B76684BAE3968282433B14428114AE8F563FCF7C/scale?width=2880&aspectRatio=3.91&format=jpeg",
  },
  {
    url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8FF74E6612D5AF6F66001A6DF581FDCF5AD22A7A47939455E072240C7D30887B/scale?width=2880&aspectRatio=3.91&format=jpeg",
  },
];
