import { ReactElement } from "react";

export interface ISlider {
  spaceBetween?: number;
  slidesPerView?: number;
  slides: ReactElement[];
}
