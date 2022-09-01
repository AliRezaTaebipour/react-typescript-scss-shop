import styles from "./SlideShow.module.scss";
import { slides } from "../../config/dummyData";

export const SlideShow: () => JSX.Element[] = () => {
  const tmp: JSX.Element[] = [];

  slides.map((slide: string) =>
    tmp.push(
      <div className={styles.container}>
        <img src={slide} alt="slide" className={styles.container__img} />
      </div>
    )
  );

  return tmp;
};
