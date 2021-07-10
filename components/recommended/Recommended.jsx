import { useEffect, useRef, useState } from "react";
import useScreenWidth from "../../utils/useScreenWidth";
import { ChevronLeft, ChevronRight } from "../icons";
import s from "./Recommended.module.css";

import { Sliders } from "../slider/Slider";

export default function Recommended({ title, images }) {
  return (
    <div>
      <h4 className={s.rec__title}>{title}</h4>

      <Sliders images={images} />
    </div>
  );
}
