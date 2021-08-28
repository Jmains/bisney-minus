import s from "./Carousel.module.css";
import Slider from "react-slick";
import { NextSlideBtn, PrevSlideBtn } from "../shared/SliderButtons";

export default function Carousel() {
  const settings = {
    speed: 500,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          bottom: "17px",
          right: "14px",
          justifyContent: "flex-end",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),

    nextArrow: <NextSlideBtn />,
    prevArrow: <PrevSlideBtn />,
  };

  return (
    <Slider className={s.slider__container} {...settings}>
      {images.map((img, idx) => {
        return (
          <li key={idx}>
            <a tabIndex="-1" className={`${s.slider__card}`} href="#">
              <div className={s.slider__imgContainer}>
                <img className={s.slider__img} src={img.url} alt="featured shows and movies" />
              </div>
            </a>
          </li>
        );
      })}
    </Slider>
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
