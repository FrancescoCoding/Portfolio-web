import styles from "./HamburgerMenu.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";

const currentYear = new Date().getFullYear();

const HamburgerMenu = props => {
  const storeColour = useSelector(state => state.colour);
  const isBigScreen = useMediaQuery({ query: "(min-width: 700px)" });

  const [isOpen, setOpen] = useState(false);

  let showMenu;

  if (props.isMounted) {
    if (isBigScreen) {
      showMenu = styles["slide-in"];
    } else {
      showMenu = styles["slide-down"];
    }
  } else {
    if (isBigScreen) {
      showMenu = styles["slide-out"];
    } else {
      showMenu = styles["slide-up"];
    }
  }

  return (
    <>
      <div className={`${styles.sidebar} ${showMenu}`}>
        <div className={styles["sidebar-content"]}>
          <div className={styles["sidebar-brand"]}>
            <NavLink
              className={styles.home}
              to="/portfolio"
              activeClassName={styles[`${storeColour}`]}
            >
              Portfolio {currentYear}
            </NavLink>
            <div
              onClick={props.onClose} //
              className={styles["close-sidebar"]}
            >
              <Hamburger
                size={27}
                rounded
                color="white" // #56698c
                toggled={isOpen}
                toggle={setOpen}
              />
            </div>
          </div>
          <div className={styles["sidebar-search"]}></div>
          <ul>
            <li>
              <NavLink activeClassName={styles.active} to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/language">En</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
