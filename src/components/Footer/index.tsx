import { FC, ReactElement } from "react";
import Wrapper from "../Wrapper";
import styles from "./Footer.module.scss";

const Footer: FC = (): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.container__top}>
        <Wrapper>
          <div className={styles.container__row}>
            <div className={styles.container__col}>
              <div className={styles.container__title}>Our Company</div>
              <div className={styles.container__desc}>
                For those that rather the full immersion of the in store
                experience we welcome your company and look forward to meeting
                you face to face. Being located in the 47 street diamond
                district, known to be the largest diamond.
              </div>
            </div>
            <div className={styles.container__col}>
              <div className={styles.container__title}>Contact Us</div>
              <div className={styles.container__desc}>
                4710-4890 Breckinridge USA
              </div>
              <div className={styles.container__desc}>
                <a
                  href="mailto:alirezataebipour@gmail.com"
                  className={styles.container__link}
                >
                  alirezataebipour@gmail.com
                </a>
              </div>
              <div className={styles.container__desc}>
                <a
                  href="tel:(+98)9130101507"
                  className={styles.container__link}
                >
                  +98-913-0101-507
                </a>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className={styles.container__bottom}>
        © {new Date().getFullYear()} all right reserved
      </div>
    </div>
  );
};

export default Footer;
