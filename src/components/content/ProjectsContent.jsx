import styles from "./ProjectsContent.module.css";

import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";

const ProjectsContent = props => {
  const storeLanguage = useSelector(state => state.languages.language);
  const storeColour = useSelector(state => state.colours);

  const isMediumScreen = useMediaQuery({ query: "(min-width: 1200px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 870px)" });

  const smallScreenPadding = isSmallScreen ? "0px" : "16px";

  let items = props.projects;

  const hoverHandler = e => {
    e.target.classList.toggle(styles[`${storeColour.colour}-hover`]);
  };

  const stopEvent = event => event.stopPropagation();

  return (
    <>
      <div className={styles["projects-section"]}>
        <div className={styles.projects}>
          <div
            className={`${styles.items} ${styles[`${storeColour.colour}`]}`}
            style={{ paddingRight: smallScreenPadding }}
          >
            {items.map(project => {
              return (
                <div
                  className={styles["project-git"]}
                  key={project.id + "git"}
                  onMouseOver={hoverHandler}
                  onMouseOut={hoverHandler}
                  onTouchStart={hoverHandler}
                  onTouchEnd={hoverHandler}
                >
                  <Link key={project.id} to={`/projects/${project.endpoint}`}>
                    <div
                      className={`${styles.list}`}
                      style={{
                        background: `url(${project.image}) no-repeat center center/cover`,
                      }}
                    >
                      <div className={styles["title-container"]}>
                        <p>{project[`${storeLanguage}`].name}</p>
                        <p className={styles.short}>
                          {" "}
                          {project[`${storeLanguage}`].short}{" "}
                        </p>
                      </div>
                    </div>
                  </Link>

                  {isMediumScreen && (
                    <a
                      rel="noreferrer"
                      href={project.githubLink}
                      onClick={stopEvent}
                      target="_blank"
                      tabIndex="-1" // Unfocusable
                      aria-label={project[`${storeLanguage}`].name}
                    >
                      <FaGithub
                        className={`${styles.git} ${styles.github}`}
                        color="white"
                      />
                    </a>
                  )}
                  {isMediumScreen && (
                    <div className={styles.tags}>
                      <p className={` ${styles.short}`}>
                        {project[`${storeLanguage}`].short}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsContent;
