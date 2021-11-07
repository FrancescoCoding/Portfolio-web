import useKeypress from "../hooks/useKeyPress";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../components/UI/BackButton";
import { useMediaQuery } from "react-responsive";

import { useSelector } from "react-redux";
import { BsImageFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import styles from "./ProjectDetail.module.css";

import Viewer from "react-viewer";
import Footer from "../components/UI/Footer";
import WorksList from "../settings/WorksList";
import ColourSelector from "../components/UI/ColourSelector";

const ProjectDetail = () => {
  const params = useParams();
  const storeColour = useSelector(state => state);
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 900px)" });

  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);

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
      {!isSmallScreen && <BackButton endpoint="/projects" />}
      <Viewer
        visible={visible}
        rotatable={false}
        noImgDetails={true}
        scalable={false}
        onMaskClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        images={[
          {
            src: "https://i.imgur.com/fsyrScY.jpg",
          },
          {
            src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
          },
        ]}
      />
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
              <h1>{currentProject["EN"].name}</h1>
              {/* IMAGE TOGGLE */}
              {currentProject.gallery && currentProject.gallery.length !== 0 && (
                <button
                  className={styles["img-btn"]}
                  onClick={() => {
                    setVisible(true);
                    setIsOpen(true);
                  }}
                >
                  <BsImageFill
                    className={styles.imageFill}
                    size="2rem"
                    style={{
                      alignSelf: "flex-start",
                      // color: `${storeColour.hex} `,
                      cursor: "pointer",
                    }}
                  />
                </button>
              )}
            </div>

            <div className={styles.info}>
              {currentProject["EN"].description && (
                <p>{currentProject["EN"].description}</p>
              )}
              <div className={styles.logos}>
                {/* {currentProject.icons && currentProject.icons.length < 4 && (
                  <h2>Project stack:</h2>
                )} */}
                {currentProject.icons &&
                  !isSmallScreen &&
                  currentProject.icons.map(el => {
                    return (
                      <div key={el.id} className={styles.logo}>
                        <div
                          className={styles["logo-wrap"]}
                          style={{ margin: ".3rem 0" }}
                        >
                          <div>{el.icon}</div>
                          <p>{el.tag}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className={styles["button-container"]}>
              <a
                target="_blank"
                rel="noreferrer"
                href={currentProject.githubLink}
                className={styles.btn}
              >
                <FaGithub
                  size="1.6rem"
                  style={{ transform: "translateY(.32rem) translateX(-.3rem)" }}
                />{" "}
                GitHub page
              </a>
            </div>
          </div>
        </div>
        <ColourSelector backgroundColor="#0a0f20" />
      </div>
      {!visible && isBigScreen && <Footer />}
    </>
  );
};

export default ProjectDetail;