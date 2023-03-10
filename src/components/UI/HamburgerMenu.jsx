import ReactDOM from "react-dom";
import styles from "./HamburgerMenu.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { languageActions, colourActions } from "../../store/store";
import { FaCheck } from "react-icons/fa";
import { Backdrop } from "./Modal";

import useKeypress from "../../hooks/useKeyPress";

const checkMark = (
  <FaCheck
    size="0.68rem"
    style={{ transform: "translateY(.06rem) translateX(-.01rem)" }}
  />
);

const currentYear = new Date().getFullYear();

const HamburgerMenu = (props) => {
  const dispatch = useDispatch();

  const portalElement = document.getElementById("overlays");

  const storeColour = useSelector((state) => state.colours);
  const storeLanguage = useSelector((state) => state.languages.language);
  const isOcean = storeColour.colour === "ocean";
  const isBigScreen = useMediaQuery({ query: "(min-width: 700px)" });

  const [isOpen, setOpen] = useState(false);

  useKeypress("Escape", props.onClose);

  let showMenu;
  let menuBorderSlide;

  if (props.isMounted) {
    if (isBigScreen) {
      showMenu = styles["slide-in"];
      menuBorderSlide = {
        borderRight: `9px solid var(--${storeColour.colour}-primary-color)`,
      };
    } else {
      showMenu = styles["slide-down"];
      menuBorderSlide = {
        borderBottom: `9px solid var(--${storeColour.colour}-active)`,
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
      };
    }
  } else {
    if (isBigScreen) {
      showMenu = styles["slide-out"];
      menuBorderSlide = {
        borderRight: `9px solid var(--${storeColour.colour}-primary-color)`,
      };
    } else {
      showMenu = styles["slide-up"];
      menuBorderSlide = {
        borderBottom: `9px solid var(--${storeColour.colour}-active)`,
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
      };
    }
  }

  const changeLanguageHandler = (e) => {
    e.preventDefault();

    if (storeLanguage === "EN") {
      dispatch(languageActions.switchToItalian());
    } else {
      dispatch(languageActions.switchToEnglish());
    }
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}

      {ReactDOM.createPortal(
        <div
          style={menuBorderSlide}
          className={`${styles.sidebar} ${showMenu}`}
        >
          <div className={styles["sidebar-content"]}>
            <div className={styles["sidebar-brand"]}>
              <NavLink
                className={styles.home}
                to="/portfolio"
                activeClassName={
                  styles[`${storeColour.colour} ${styles.active}`]
                }
              >
                Portfolio {currentYear}
              </NavLink>
              <div onClick={props.onClose} className={styles["close-sidebar"]}>
                <Hamburger
                  size={27}
                  rounded
                  color="white" // #56698c
                  toggled={isOpen}
                  toggle={setOpen}
                />
              </div>
            </div>
            <div className={styles["colour-row"]}>
              <button
                aria-label="Canary colour"
                onClick={() => dispatch(colourActions.colourCanary())}
                className={styles["canary-bg"]}
              >
                {storeColour.colour === "canary" && checkMark}
              </button>
              <button
                aria-label="Ocean colour"
                onClick={() => dispatch(colourActions.colourOcean())}
                className={styles["ocean-bg"]}
              >
                {storeColour.colour === "ocean" && checkMark}
              </button>
              <button
                aria-label="Magenta colour"
                onClick={() => dispatch(colourActions.colourMagenta())}
                className={styles["magenta-bg"]}
              >
                {storeColour.colour === "magenta" && checkMark}
              </button>
              <button
                aria-label="Leaf colour"
                onClick={() => dispatch(colourActions.colourLeaf())}
                className={styles["leaf-bg"]}
              >
                {storeColour.colour === "leaf" && checkMark}
              </button>
            </div>
            <ul>
              <li>
                <NavLink
                  activeClassName={`${styles[`${storeColour.colour}`]} ${
                    styles.active
                  }`}
                  style={{ width: "100%" }}
                  to="/projects"
                >
                  {storeLanguage === "EN" ? "Projects" : "Progetti"}
                </NavLink>
              </li>
              <li>
                {storeLanguage === "EN" && (
                  <NavLink
                    to="/"
                    onClick={changeLanguageHandler}
                    style={{ width: "100%" }}
                  >
                    Switch to
                    <span
                      style={{
                        color: `var(--${storeColour.colour}-primary-color${
                          isOcean ? "-lighter" : ""
                        })`,
                      }}
                    >
                      {" "}
                      Italian{" "}
                    </span>
                    [IT]
                  </NavLink>
                )}
                {storeLanguage === "IT" && (
                  <NavLink
                    to="/"
                    onClick={changeLanguageHandler}
                    style={{ width: "100%" }}
                  >
                    Visualizza in
                    <span
                      style={{
                        color: `var(--${storeColour.colour}-primary-color${
                          isOcean ? "-lighter" : ""
                        })`,
                      }}
                    >
                      {" "}
                      Inglese{" "}
                    </span>
                    [EN]
                  </NavLink>
                )}
              </li>
            </ul>
            <div className={styles["sidebar-separator"]}></div>
          </div>
          {/* create a footer */}
          <div className={styles["sidebar-footer"]}>
            <div className={styles["sidebar-footer-content"]}>
              <p className={styles["sidebar-text"]}>
                {storeLanguage === "EN"
                  ? "Made with ❤️ Francesco Gruosso"
                  : "Creato con ❤️ Francesco Gruosso"}
              </p>
            </div>
          </div>
        </div>,
        portalElement
      )}
    </>
  );
};

export default HamburgerMenu;
