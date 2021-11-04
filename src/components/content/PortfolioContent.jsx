import Contact from "./Contact";
import Separator from "../../assets/Separator";
import RubberDuck from "../../assets/RubberDuck";
import { Astronaut } from "../../assets/Animations";
import { FaChevronDown } from "react-icons/fa";

import styles from "./PortfolioContent.module.css";

import { useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

const PortfolioContent = props => {
  const storeColour = useSelector(state => state);
  const [showModal, setShowModal] = useState(false);

  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const clickSoundHandler = () => {
    let clickSound = new Audio("https://files.catbox.moe/ptskhe.wav");
    clickSound.play();
    setShowModal(true);
  };

  // Convert "0.7s to ms"
  let delayMS;
  if (props.astronautDelaySec) {
    let delay = props.astronautDelaySec.replace(/[^0-9\\.]+/g, "");
    delayMS = delay * 1000;
  }

  return (
    <main className={styles["main-content"]}>
      {showModal && <Contact onClose={hideModalHandler} />}

      {isBigScreen && (
        <div className={styles["main-text"]}>
          <h1>
            Stand the{" "}
            <RubberDuck className={styles.quack} colour={storeColour.hex} /> out
          </h1>
          <p>
            ... as a frontend developer, UX designer,
            <br />
            initiator of horrible puns.
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
        </div>
      )}
      {isBigScreen && <Separator styles={styles.separator} />}
      <div className={styles["astronaut-container"]}>
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
      </div>
    </main>
  );
};

export default PortfolioContent;
