import styles from "./Navbar.module.css";
import Contact from "../content/Contact";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fade as Hamburger } from "hamburger-react";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { languageActions } from "../../store/store";

import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const location = useLocation();
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

  const showModalHandler = (e, hash) => {
    e.preventDefault();
    window.location.hash = hash;
    setShowModal(true);
  };

  const hideModalHandler = () => {
    window.history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
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

  useEffect(() => {
    const checkHash = () => {
      const currentHash = window.location.hash;
      if (currentHash === "#about/info" || currentHash === "#about/contact") {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash, false);

    return () => {
      window.removeEventListener("hashchange", checkHash, false);
    };
  }, []);

  return (
    <>
      {!isBigScreen && burgerIsTouched && (
        <HamburgerMenu
          isMounted={isMounted}
          onClose={hideMenuSidebarHandler}
        />
      )}

      {!isBigScreen && (
        <nav className={styles.navbar}>
          <div
            onClick={showMenuSidebarHandler}
            className={styles["hamburger-container"]}
            aria-label="hamburger menu container"
            role="button">
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
              <NavLink
                activeClassName={styles.active}
                to="/portfolio"
                exact={true}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={styles.active}
                to="/projects"
                exact={true}>
                {isEnglish ? "Projects" : "Progetti"}
              </NavLink>
            </li>
            <li>
              <a
                href="/#about/info"
                onClick={(e) => showModalHandler(e, "about/info")}>
                {isEnglish ? "About" : "Dettagli"}
              </a>
              {showModal && <Contact onClose={hideModalHandler} />}
            </li>
            {/* <li>
              <NavLink activeClassName={styles.active} to="/CV">
                CV
              </NavLink>
            </li> */}
            {location.pathname === "/404" && (
              <li className={`${styles.broken} `}>
                <NavLink
                  activeClassName={styles.active}
                  to="/404">
                  404
                </NavLink>
              </li>
            )}

            <li style={{ color: "white" }}>
              {isEnglish && (
                <a
                  href="/#"
                  onClick={changeLanguageHandler}>
                  EN
                </a>
              )}
              {storeLanguage === "IT" && (
                <a
                  href="/#"
                  onClick={changeLanguageHandler}>
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
