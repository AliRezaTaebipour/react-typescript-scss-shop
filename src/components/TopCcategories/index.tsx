import styles from "./TopCcategories.module.scss";
import { banners } from "../../config/dummyData";
import { FC } from "react";
import Wrapper from "../Wrapper";
import { IBanner } from "../../types/banner";

const TopCcategories: FC = () => {
  return (
    <Wrapper>
      <div className={styles.row}>
        {banners.map((banner: IBanner, i: number) => (
          <div className={styles.banner} key={i}>
            <img
              src={banner.src}
              alt={banner.label}
              className={styles.banner__img}
            />
            <div className={styles.banner__label}>{banner.label}</div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default TopCcategories;
