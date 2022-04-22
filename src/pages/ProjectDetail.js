import useKeypress from "../hooks/useKeyPress";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../components/UI/BackButton";
import { useMediaQuery } from "react-responsive";

import { useSelector } from "react-redux";
import { FaGithub } from "react-icons/fa";

import styles from "./ProjectDetail.module.css";

import WorksList from "../settings/WorksList";
import ColourSelector from "../components/UI/ColourSelector";
import Transition from "../components/UI/Transition";

const ProjectDetail = () => {
  const params = useParams();
  const storeColour = useSelector(state => state.colours);
  const storeLanguage = useSelector(state => state.languages.language);

  const isSmallScreen = useMediaQuery({ query: "(max-width: 900px)" });
  const verySmallScreen = useMediaQuery({ query: "(max-width: 400px)" });

  const [isOpen, setIsOpen] = useState(false);

  const currentProject = WorksList.find(
    project => project.endpoint === params.projectID
  );

  const closeHandler = () => {
    setIsOpen(false);
  };

  // If the lightbox is open, close it. If it's closed, go back to projects
  const backCondition = !isOpen ? "goBack" : closeHandler;
  useKeypress("Escape", backCondition);

  // Project validation
  if (currentProject === undefined) {
    return (
      <section style={{ color: "white", padding: "6rem", fontSize: "3rem" }}>
        <h1 style={{ color: "violet" }}>No project found</h1>
      </section>
    );
  }

  return (
    <>
      <Transition />
      {!isSmallScreen && <BackButton endpoint="/projects" />}
      <section className={styles["project-section"]}>
        <div
          className={styles.design}
          style={{
            background: `linear-gradient(45deg, ${storeColour.hex} 60%, #555)`,
          }}
        />
      </section>
      {/* Full page wrapper */}
      <div className={styles["project-container"]}>
        {/* Card */}
        <div className={styles["project-card"]}>
          <div className={styles["information-wrapper"]}>
            <div className={styles["project-header"]}>
              <h1>{currentProject[`${storeLanguage}`].name}</h1>
            </div>

            <div className={styles.info}>
              {currentProject[`${storeLanguage}`].description && (
                <p>{currentProject[`${storeLanguage}`].description}</p>
              )}
              <div className={styles.logos}>
                {currentProject.icons &&
                  !isSmallScreen &&
                  currentProject.icons.map(el => {
                    return (
                      <div key={el.id} className={styles.logo}>
                        <div
                          className={styles["logo-wrap"]}
                          style={{ margin: ".3rem 0" }}
                        >
                          {el.icon}
                          <p>{el.tag}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className={styles["button-container"]}>
              <a
                href={currentProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles["git-btn"]}
              >
                <FaGithub
                  size="3rem"
                  style={{
                    alignSelf: "flex-start",
                    color: `var(--${storeColour.colour}-active)`,
                    cursor: "pointer",
                  }}
                />
              </a>
            </div>
          </div>
        </div>

        <ColourSelector backgroundColor="#0a0f20" />
      </div>
    </>
  );
};

export default ProjectDetail;
