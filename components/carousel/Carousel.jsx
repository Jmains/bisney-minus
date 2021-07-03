import s from "./Carousel.module.css";

export default function Carousel() {
  return (
    <div className={s.slider__container}>
      <button
        className={`${s.slider__btn} ${s.slider__btnRight}`}
        aria-label="Select this to see other featured content"
      >
        Right
      </button>
      <button
        className={`${s.slider__btn} ${s.slider__btnLeft}`}
        aria-label="Select this to see other featured content"
      >
        Left
      </button>
      <div className={s.slider__trackContainer}>
        <ul className={s.slider__track}>
          <li className={s.slider__slide}>
            <img
              className={s.slider__img}
              src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </li>
          <li className={s.slider__slide}>
            <img
              className={s.slider__img}
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </li>
          <li className={s.slider__slide}>
            <img
              className={s.slider__img}
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </li>
        </ul>
      </div>

      <div className={s.slider__nav}>
        <button className={s.slider__indicator}></button>
        <button className={s.slider__indicator}></button>
        <button className={s.slider__indicator}></button>
      </div>
    </div>
  );
}

const images = [
  {
    img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
];
