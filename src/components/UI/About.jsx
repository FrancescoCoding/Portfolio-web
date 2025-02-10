import React from "react";
import { FoliageRightSide } from "../../assets/Animations/Animations";
import { RiMapPin2Line, RiBuilding4Line, RiComputerLine } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";

import styles from "./About.module.css";

const About = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1424px)" });
  return (
    <>
      {isBigScreen && <FoliageRightSide width="38%" />}
      {/* ABOUT TEXT */}
      <section className={styles.about}>
        <div className={styles.about__content}>
          <h1>Gruosso Francesco 🦁</h1>
          <span className={styles.about__content__info}>
            <p>
              <RiMapPin2Line /> Aberdeen, Scotland <br />
              <RiBuilding4Line /> Software, Research, UX <br />
              <span>
                <RiComputerLine />
                &nbsp;Computer Science BSc (Hons)
              </span>
            </p>
          </span>
        </div>
      </section>
    </>
  );
};

export default About;
