import { FC } from "react";
import styles from "./AboutUs.module.scss";
import Wrapper from "../Wrapper";
import { aboutUsImg } from "../../config/dummyData";

const AboutUs: FC = (): JSX.Element => {
  return (
    <Wrapper>
      <div className={styles.container}>
        <div className={styles.container__imgBox}>
          <img
            src={aboutUsImg}
            alt="about-us"
            className={styles.container__img}
          />
        </div>
        <div className={styles.container__desc}>
          <div className={styles.container__title}>About Us</div>
          <h5 className={styles.container__subtitle}>
            Founded in 1986, I.D. Jewelry, LLC, a family owned & operated
            business has become a house-hold name in states all over the USA as
            well as countries all over the world.
          </h5>
          <p className={styles.container__text}>
            For those that rather the full immersion of the in store experience
            we welcome your company and look forward to meeting you face to
            face. Being located in the 47 street diamond district, known to be
            the largest diamond.
          </p>
          <p className={styles.container__text}>
            Based in the heart of New York’s Diamond District, also known as the
            NYC diamond district, I. D. Jewelry has some of the most
            competitively priced in the market. It is our goal to supply our
            clients.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUs;
