import styles from "./Navbar.module.css";
import Contact from "../content/Contact";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fade as Hamburger } from "hamburger-react";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { languageActions } from "../../store/store";

import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const dispatch = useDispatch();

  const storeColour = useSelector(state => state.colours.colour);
  const storeLanguage = useSelector(state => state.languages.language);

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
    setIsMounted(false);
    setTimeout(() => {
      setBurgerIsTouched(false);
    }, 400);
  };
  const changeLanguageHandler = e => {
    e.preventDefault();

    if (storeLanguage === "EN") {
      dispatch(languageActions.switchToItalian());
    } else {
      dispatch(languageActions.switchToEnglish());
    }
  };

  return (
    <>
      {!isBigScreen && burgerIsTouched && (
        <HamburgerMenu isMounted={isMounted} onClose={hideMenuSidebarHandler} />
      )}

      {!isBigScreen && (
        <nav className={styles.navbar}>
          <div
            onClick={showMenuSidebarHandler}
            className={styles["hamburger-container"]}
          >
            <Hamburger size={30} rounded color="white" toggle={setOpen} />
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
              {/* If store language is En */}
              {storeLanguage === "EN" && (
                <a href="/#" onClick={changeLanguageHandler}>
                  It
                </a>
              )}
              {/* If store language is It */}
              {storeLanguage === "IT" && (
                <a href="/#" onClick={changeLanguageHandler}>
                  En
                </a>
              )}
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
