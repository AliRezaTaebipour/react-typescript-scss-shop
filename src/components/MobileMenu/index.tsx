import { FC, ReactElement } from "react";
import styles from "./MobileMenu.module.scss";
import logo from "../../assets/images/logo.png";

const MobileMenu: FC = (): ReactElement => {
  return (
    <div className={styles.container}>
      <div>
        <img src={logo} alt="Kimiya" className={styles.container__logo} />
      </div>
      <div className={styles.menu}>
        <div className={styles.menu__item}>
          <div className={styles.menu__link}>Home</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__link}>Categories</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__link}>About Us</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__link}>Contact Us</div>
        </div>
        <div className={styles.menu__item}>
          <div className={styles.menu__link}>FAQ</div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
