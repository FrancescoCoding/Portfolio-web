import About from "../UI/About";
import PopUp from "../UI/PopUp";
import Contact from "./Contact";
import Separator from "../../assets/Animations/Separator";
import RubberDuck from "../../assets/Animations/RubberDuck";

import { Astronaut } from "../../assets/Animations/Animations";
import { FaChevronDown } from "react-icons/fa";

import styles from "./PortfolioContent.module.css";

import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { isMobile } from "react-device-detect";

import clickSoundWav from "../../assets/Sounds/ClickSound.wav";
const clickSound = new Audio(clickSoundWav);

// @todo: Sort out internationalisation for this component by using a /locales en and it
const PortfolioContent = props => {
  const storeColour = useSelector(state => state.colours);
  const storeLanguage = useSelector(state => state.languages.language);

  const [showModal, setShowModal] = useState(false);
  const [showModalTouched, setShowModalTouched] = useState(false);

  // @todo this query is not very good, it controls when the main content
  // @todo changes to a stacked layout
  const isBigScreen = useMediaQuery({ query: "(min-width: 1524px)" });

  const actionButtonStyle = useMemo(
    () => ({ backgroundColor: `${storeColour.hex}` }),
    [storeColour.hex]
  );

  // Ensuring the modal appears and disappears when the screen size changes if it has been touched
  useEffect(() => {
    if (showModalTouched && !isBigScreen) {
      setShowModal(false);
    } else if (showModalTouched && isBigScreen) {
      setShowModal(true);
    }
  }, [isBigScreen, showModalTouched]);

  const hideModalHandler = () => {
    setShowModalTouched(false);
    setShowModal(false);
  };

  const showModalWithSoundHandler = () => {
    clickSound.play();

    setShowModal(true);
    setShowModalTouched(true);
  };

  // Convert "0.7s to ms"
  let delayMS;
  if (props.astronautDelaySec) {
    let delay = props.astronautDelaySec.replace(/[^0-9\\.]+/g, "");
    delayMS = delay * 1000;
  }

  return (
    <>
      {!showModal && showModalTouched && !isBigScreen && (
        <PopUp onClose={hideModalHandler} />
      )}

      <main
        className={`${
          isMobile ? styles["main-content-mobile"] : styles["main-content"]
        }`}
      >
        {showModal && <Contact onClose={hideModalHandler} />}

        {storeLanguage === "EN" && isBigScreen && (
          <section className={styles["main-text"]}>
            <h1>
              Stand the{" "}
              <RubberDuck className={styles.quack} colour={storeColour.hex} />{" "}
              out
            </h1>
            <p>
              ... as a Full-Stack developer, UX designer,
              <br />
              engineer of terrible puns.
            </p>
            <div className={styles["btn-container"]}>
              <button
                onClick={showModalWithSoundHandler}
                className={`${styles.btn}`}
                style={actionButtonStyle}
              >
                Find out more{" "}
                <FaChevronDown
                  style={{
                    transform: "translateY(3px)",
                    fontSize: " 1.1rem",
                    marginLeft: "",
                  }}
                />
              </button>
            </div>
          </section>
        )}
        {storeLanguage === "IT" && isBigScreen && (
          <section className={styles["main-text"]}>
            <h1>
              Fatti nuotare{" "}
              <RubberDuck className={styles.quack} colour={storeColour.hex} />
            </h1>
            <p>
              ... come Full-Stack developer, designer di UX
              <br />e di terribili giochi di parole.
            </p>
            <div className={styles["btn-container"]}>
              <button
                onClick={showModalWithSoundHandler}
                className={`${styles.btn}`}
                style={actionButtonStyle}
              >
                Scopri altro{" "}
                <FaChevronDown
                  style={{
                    transform: "translateY(3px)",
                    fontSize: " 1.1rem",
                    marginLeft: "",
                  }}
                />
              </button>
            </div>
          </section>
        )}
        {/* Red and Blue separator only on big screens  */}
        {isBigScreen && <Separator styles={styles.separator} />}
        {/* Astronaut + zoomed in text */}
        <section className={styles["astronaut-container"]}>
          <Astronaut
            delay={delayMS}
            width={isBigScreen ? 600 : 450}
            height={isBigScreen ? 600 : 450}
          />
          {!isBigScreen && (
            <div className={styles["astronaut-text"]}>
              <h1
                style={{
                  fontSize: "4rem",
                  color: `${storeColour.hex}`,
                }}
              >
                Gruosso Francesco
              </h1>
              <p style={{ fontSize: "2rem", color: "white" }}>Web dev etc.</p>
              <NavLink
                className={`${styles["btn-mobile"]}`}
                activeClassName={styles.active}
                to="/projects"
                exact={true}
              >
                <button
                  style={actionButtonStyle}
                  className={`${styles["btn-mobile"]}`}
                >
                  {(storeLanguage === "EN" && "Find out more") ||
                    (storeLanguage === "IT" && "Scopri altro")}
                  <FaChevronDown
                    style={{
                      transform: "translateY(6px)",
                      marginLeft: ".5rem",
                    }}
                  />
                </button>
              </NavLink>
            </div>
          )}
        </section>
      </main>
      {isBigScreen && <About />}
    </>
  );
};

export default PortfolioContent;
