import useKeypress from "../../hooks/useKeyPress";
import parse from "html-react-parser";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../UI/BackButton";
import { useMediaQuery } from "react-responsive";

import { useSelector } from "react-redux";
import { FaGithub } from "react-icons/fa";
import { FcDocument, FcSlrBackSide } from "react-icons/fc";

import VolumeControl from "../UI/VolumeControl";

import styles from "./ProjectDetail.module.css";

import WorksList from "../../settings/WorksList";
import ColourSelector from "../UI/ColourSelector";
import Transition from "../UI/Transition";

const ProjectDetail = () => {
  const params = useParams();
  const storeColour = useSelector((state) => state.colours);
  const storeLanguage = useSelector((state) => state.languages.language);

  const isSmallScreen = useMediaQuery({ query: "(max-width: 900px)" });

  const [isOpen, setIsOpen] = useState(false);

  const currentProject = WorksList.find(
    (project) => project.endpoint === params.projectID
  );

  const closeHandler = () => {
    setIsOpen(false);
  };

  const backCondition = !isOpen ? "goBack" : closeHandler;
  useKeypress("Escape", backCondition);

  // Project validation
  if (currentProject === undefined) {
    return (
      <section style={{ color: "white", padding: "6rem", fontSize: "3rem" }}>
        <h1 style={{ color: "violet" }}>No project found</h1>
        <p>
          The project you are looking for does not exist or has been removed.
        </p>

        <BackButton endpoint="/projects" />
      </section>
    );
  }

  return (
    <>
      <Transition />
      <ColourSelector backgroundColor="#0a0f20" />
      <VolumeControl />
      <BackButton endpoint="/projects" />

      <section className={styles["project-card-section"]}>
        {/* Card */}
        <div className={styles["project-card"]}>
          <div className={styles["information-wrapper"]}>
            {/* Project Header (name) */}
            <h1 className={styles["project-title"]}>
              {currentProject[`${storeLanguage}`].name}
            </h1>
            <div className={styles.info}>
              <div className={styles.description}>
                {currentProject[`${storeLanguage}`].description && (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {parse(currentProject[`${storeLanguage}`].description)}
                  </div>
                )}
              </div>

              {/* Technologies utilised logos */}
              <div className={styles.logos}>
                {currentProject.icons &&
                  !isSmallScreen &&
                  currentProject.icons.map((el) => {
                    return (
                      <div
                        key={el.id}
                        className={styles.logo}>
                        <div className={styles["logo-wrap"]}>
                          {el.icon}
                          <p>{el.tag}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* External links */}
            <div
              style={{
                justifyContent: currentProject.extraLink
                  ? "space-between"
                  : "flex-end",
              }}
              className={styles["buttons-container"]}>
              {/* Extra link on the left if present */}
              {currentProject.extraLink && (
                <div className={styles["project-btn__wrapper"]}>
                  <a
                    href={currentProject.extraLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["git-btn"]}>
                    {currentProject.extraLink.buttonText === "Docs" ? (
                      <FcDocument
                        size="3rem"
                        style={{
                          color: `var(--${storeColour.colour}-active)`,
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <FcSlrBackSide
                        size="3rem"
                        style={{
                          color: `var(--${storeColour.colour}-active)`,
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </a>
                  <p>{currentProject.extraLink.buttonText} </p>
                </div>
              )}
              {/* GitHub link */}
              <div className={styles["project-btn__wrapper"]}>
                <a
                  href={currentProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["git-btn"]}>
                  <FaGithub
                    size="3rem"
                    style={{
                      color: `var(--${storeColour.colour}-active)`,
                      cursor: "pointer",
                    }}
                  />
                </a>
                <p>GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles["design-section"]}>
        <div
          className={styles.design}
          style={{
            background: `linear-gradient(45deg, ${storeColour.hexDarker} 60%, #555)`,
          }}
        />
      </section>
    </>
  );
};

export default ProjectDetail;
