import { FC, ReactElement } from "react";
import styles from "./HeaderActionBox.module.scss";
import { CartIcon, SearchIcon, UserIcon, HeartIcon } from "../../icons";
import Badge from "../Badge";
import { OpenModal } from "../../types/Header";

const HeaderActionBox: FC<OpenModal> = ({ handleOpen }): ReactElement => {
  return (
    <div className={styles.actions}>
      <div className={styles.actions__item}>
        <div className={styles.actions__icon}>{SearchIcon()}</div>
      </div>
      <div className={styles.actions__item}>
        <div className={styles.actions__icon} onClick={handleOpen}>
          {UserIcon()}
        </div>
      </div>
      <div className={styles.actions__item}>
        <div className={styles.badge}>
          <Badge number={0} icon={CartIcon()} />
        </div>
      </div>
      <div className={styles.actions__item}>
        <div className={styles.badge}>
          <Badge number={0} icon={HeartIcon()} />
        </div>
      </div>
    </div>
  );
};

export default HeaderActionBox;
