import s from "./ContentSlider.module.css";

import { Sliders } from "../slider/Slider";

export default function ContentSlider({ title, images }) {
  return (
    <div className={s.contentSlider__container}>
      <h4 className={s.contentSlider__title}>{title}</h4>
      <Sliders images={images} />
    </div>
  );
}
