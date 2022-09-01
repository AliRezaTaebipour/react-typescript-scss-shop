import { FC, ReactElement } from "react";
import { LayoutInterface } from "../../types/Layout";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./Layout.module.scss";

const Layout: FC<LayoutInterface> = ({ children }): ReactElement => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
