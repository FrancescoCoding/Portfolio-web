import styles from "./Navbar.module.css";
import Contact from "../content/Contact";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fade as Hamburger } from "hamburger-react";
import { useMediaQuery } from "react-responsive";

import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const storeColour = useSelector(state => state.colour);

  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });

  const [showModal, setShowModal] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [burgerIsTouched, setBurgerIsTouched] = useState(false);

  const showModalHandler = e => {
    e.preventDefault();
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };
  const showMenuSidebarHandler = () => {
    setIsMounted(true);
    setBurgerIsTouched(true);
  };
  const hideMenuSidebarHandler = () => {
    setOpen(false);
    setIsMounted(false);
    setTimeout(() => {
      setBurgerIsTouched(false);
    }, 400);
  };

  return (
    <>
      {!isBigScreen && burgerIsTouched && (
        <HamburgerMenu isMounted={isMounted} onClose={hideMenuSidebarHandler} />
      )}

      {!isOpen && !isBigScreen && (
        <nav className={styles.navbar}>
          <div
            onClick={showMenuSidebarHandler}
            className={styles["hamburger-container"]}
          >
            <Hamburger
              size={30}
              rounded
              color="white"
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        </nav>
      )}

      {isBigScreen && (
        <nav className={styles.navbar}>
          <ul className={styles[`${storeColour}`]}>
            <li>
              <NavLink activeClassName={styles.active} to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <a href="/#" onClick={showModalHandler}>
                Contact
              </a>
              {showModal && <Contact onClose={hideModalHandler} />}
            </li>
            <li>
              <NavLink to="/language">En</NavLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
