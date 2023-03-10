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

  const storeColour = useSelector((state) => state.colours.colour);
  const storeLanguage = useSelector((state) => state.languages.language);
  const isEnglish = storeLanguage === "EN";

  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });

  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [burgerIsTouched, setBurgerIsTouched] = useState(false);

  const showModalHandler = (e) => {
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
  const changeLanguageHandler = (e) => {
    e.preventDefault();

    if (isEnglish) {
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
            aria-label="hamburger menu container"
            role="button"
          >
            <Hamburger
              size={30}
              rounded
              color="white"
              toggle={setOpen}
              aria-label="hamburger menu icon"
            />
          </div>
        </nav>
      )}

      {isBigScreen && (
        <nav className={styles.navbar}>
          <ul className={styles[`${storeColour}`]}>
            <li>
              <NavLink activeClassName={styles.active} to="/projects">
                {isEnglish ? "Projects" : "Progetti"}
              </NavLink>
            </li>
            <li>
              <a href="/#" onClick={showModalHandler}>
                {isEnglish ? "Contact" : "Contatto"}
              </a>
              {showModal && <Contact onClose={hideModalHandler} />}
            </li>
            {/* <li>
              <NavLink activeClassName={styles.active} to="/CV">
                CV
              </NavLink>
            </li> */}

            <li style={{ color: "white" }}>
              {isEnglish && (
                <a href="/#" onClick={changeLanguageHandler}>
                  EN
                </a>
              )}
              {storeLanguage === "IT" && (
                <a href="/#" onClick={changeLanguageHandler}>
                  IT&nbsp;
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
