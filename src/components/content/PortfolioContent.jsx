import PopUp from "../UI/PopUp";
import Contact from "./Contact";
import Separator from "../../assets/Animations/Separator";
import RubberDuck from "../../assets/Animations/RubberDuck";
import { Astronaut } from "../../assets/Animations/Animations";
import { FaChevronDown } from "react-icons/fa";
import About from "./About";

import styles from "./PortfolioContent.module.css";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { isMobile } from "react-device-detect";

import clickSoundWav from "../../assets/Sounds/ClickSound.wav";
const clickSound = new Audio(clickSoundWav);

const PortfolioContent = props => {
  const storeColour = useSelector(state => state.colours);
  const storeLanguage = useSelector(state => state.languages.language);

  const [showModal, setShowModal] = useState(false);
  const [showModalTouched, setShowModalTouched] = useState(false);

  const isBigScreen = useMediaQuery({ query: "(min-width: 1524px)" });

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

  const clickSoundHandler = () => {
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
                onClick={clickSoundHandler}
                className={`${styles.btn} ${styles[`${storeColour.colour}`]}`}
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
                onClick={clickSoundHandler}
                className={`${styles.btn} ${styles[`${storeColour.colour}`]}`}
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
        {isBigScreen && <Separator styles={styles.separator} />}
        <section className={styles["astronaut-container"]}>
          <Astronaut delay={delayMS} />
          {!isBigScreen && (
            <div className={styles["astronaut-text"]}>
              <h1
                style={{
                  fontSize: "4rem",
                  color: `${storeColour.hex}`,
                }}
              >
                Francesco Gruosso
              </h1>
              <p style={{ fontSize: "2rem", color: "white" }}>Web dev etc.</p>
            </div>
          )}
        </section>
      </main>
      <About />
    </>
  );
};

export default PortfolioContent;
