import { FC, ReactElement } from "react";
import { LayoutInterface } from "../../types/Layout";
import styles from "./Wrapper.module.scss";

const Wrapper: FC<LayoutInterface> = ({ children }): ReactElement => {
  return <div className={styles.container}>{children}</div>;
};

export default Wrapper;
