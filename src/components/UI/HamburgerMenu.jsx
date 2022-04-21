import styles from "./HamburgerMenu.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { languageActions, colourActions } from "../../store/store";
import { FaCheck } from "react-icons/fa";
const checkMark = (
  <FaCheck
    size="0.68rem"
    style={{ transform: "translateY(.06rem) translateX(-.01rem)" }}
  />
);

const currentYear = new Date().getFullYear();

const HamburgerMenu = props => {
  const dispatch = useDispatch();

  const storeColour = useSelector(state => state.colours);
  const storeLanguage = useSelector(state => state.languages.language);

  const isBigScreen = useMediaQuery({ query: "(min-width: 700px)" });

  const [isOpen, setOpen] = useState(false);

  let showMenu;
  let menuBorderSlide;

  if (props.isMounted) {
    if (isBigScreen) {
      showMenu = styles["slide-in"];
      menuBorderSlide = {
        borderRight: `9px solid var(--${storeColour.colour}-active)`,
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
    } else {
      showMenu = styles["slide-up"];
    }
  }

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
      <div style={menuBorderSlide} className={`${styles.sidebar} ${showMenu}`}>
        <div className={styles["sidebar-content"]}>
          <div className={styles["sidebar-brand"]}>
            <NavLink
              className={styles.home}
              to="/portfolio"
              activeClassName={styles[`${storeColour.colour}`]}
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
              aria-label="Leaf colour"
              onClick={() => dispatch(colourActions.colourLeaf())}
              className={styles["leaf-bg"]}
            >
              {storeColour.colour === "leaf" && checkMark}
            </button>
            <button
              aria-label="Magenta colour"
              onClick={() => dispatch(colourActions.colourMagenta())}
              className={styles["magenta-bg"]}
            >
              {storeColour.colour === "magenta" && checkMark}
            </button>
          </div>
          <ul>
            <li>
              <NavLink
                activeClassName={`${styles[`${storeColour.colour}`]} ${
                  styles.active
                }`}
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li>
              {storeLanguage === "EN" && (
                <NavLink to="/" onClick={changeLanguageHandler}>
                  Italian
                </NavLink>
              )}
              {storeLanguage === "IT" && (
                <NavLink to="/" onClick={changeLanguageHandler}>
                  English
                </NavLink>
              )}
            </li>
          </ul>
          <div className={styles["sidebar-separator"]}></div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
