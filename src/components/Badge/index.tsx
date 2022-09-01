import { FC, ReactElement } from "react";
import { IBadge } from "../../types/Header";
import styles from "./Badge.module.scss";

const Badge: FC<IBadge> = ({ number, icon }): ReactElement => {
  return (
    <div className={styles.badge}>
      <div className={styles.badge__number}>{number}</div>
      <div className={styles.badge__icon}>{icon}</div>
    </div>
  );
};

export default Badge;
