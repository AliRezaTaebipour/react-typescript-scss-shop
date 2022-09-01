import { FC, ReactElement, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import Menu from "../Menu";
import HeaderActionBox from "../HeaderActionBox";
import Wrapper from "../Wrapper";
import Modal from "react-modal";
import Login from "../Login";
import { menuIcon } from "../../icons";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import MobileMenu from "../MobileMenu";

const Header: FC = (): ReactElement => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const customStyles = {
    content: {
      top: "25%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const toggleDrawer = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <div className={styles.topbar}>
        <Wrapper>
          <div className={styles.topbar__text}>
            Welcome to Corano Jewelry online store
          </div>
        </Wrapper>
      </div>
      <div className={styles.section}>
        <Wrapper>
          <div className={styles.section__container}>
            <div className={styles.section__mobileMenu} onClick={toggleDrawer}>
              {menuIcon()}
            </div>
            <div className={styles.section__logo}>
              <img
                src={logo}
                alt="Kimiya"
                className={styles.section__logoImg}
              />
            </div>
            <div className={styles.section__menu}>
              <Menu />
            </div>
            <div className={styles.section__login}>
              <HeaderActionBox handleOpen={handleOpen} />
            </div>
          </div>
        </Wrapper>
      </div>
      <Modal
        isOpen={isOpen}
        style={customStyles}
        contentLabel="Login"
        onRequestClose={handleClose}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
      >
        <Login />
      </Modal>

      <Drawer
        open={openMenu}
        onClose={toggleDrawer}
        direction="left"
        className={styles.drawer}
      >
        <MobileMenu />
      </Drawer>
    </div>
  );
};

export default Header;
