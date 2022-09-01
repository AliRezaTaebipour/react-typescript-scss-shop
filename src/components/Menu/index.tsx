import { FC, ReactElement } from "react";
import styles from "./Menu.module.scss";

const Menu: FC = (): ReactElement => {
  return (
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
  );
};

export default Menu;
