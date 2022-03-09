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
import italianFlag from "../../assets/Flags/IT-flag.svg";
import UKFlag from "../../assets/Flags/UK-flag.svg";

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
              {storeLanguage === "EN" && (
                <a href="/#" onClick={changeLanguageHandler}>
                  <img
                    src={UKFlag}
                    alt="English flag"
                    width="50px"
                    height="100%"
                  />
                </a>
              )}
              {storeLanguage === "IT" && (
                <a href="/#" onClick={changeLanguageHandler}>
                  <img
                    src={italianFlag}
                    alt="Italian flag"
                    width="50px"
                    height="100%"
                  />
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
