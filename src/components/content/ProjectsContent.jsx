import styles from "./ProjectsContent.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FaChevronDown, FaChevronUp, FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";

const ProjectsContent = props => {
  const storeLanguage = useSelector(state => state.languages.language);
  const storeColour = useSelector(state => state.colours);

  const [renderedItems, setRenderedItems] = useState(props.projects.length);

  const isBigScreen = useMediaQuery({ query: "(min-width: 1825px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 1200px)" });

  console.log(navigator.userAgent);
  // If navigator.userAgent says it's an iOS device, set variable to "10px"
  // Else, set variable to "0px"
  const runsiOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const iOSPadding = runsiOS ? "0px" : "16px";

  let items;
  if (isBigScreen) {
    items = props.projects.slice(0, renderedItems);
  } else {
    items = props.projects;
  }

  const hoverHandler = e => {
    e.target.classList.toggle(styles[`${storeColour.colour}-hover`]);
  };

  const hoverOutHandler = e => {
    e.target.classList.toggle(styles[`${storeColour.colour}-hover`]);
  };

  const stopEvent = event => event.stopPropagation();

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <div className={styles["projects-section"]}>
        <div className={styles.projects}>
          <div
            className={`${styles.items} ${styles[`${storeColour.colour}`]}`}
            style={{ paddingRight: iOSPadding }}
          >
            {items.map(project => {
              return (
                <div
                  className={styles["project-git"]}
                  key={project.id + "git"}
                  onMouseOver={hoverHandler}
                  onMouseOut={hoverOutHandler}
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
          {props.projects.length && renderedItems === 9 && isBigScreen && (
            <button
              onClick={() => setRenderedItems(props.projects.length)}
              className={styles["view-more"]}
            >
              View more
              <FaChevronDown
                color="rgb(237, 236, 236)"
                style={{
                  transform: "translateY(2.3px) translateX(.3rem)",
                  fontSize: ".9rem",
                }}
              />
            </button>
          )}
          {renderedItems > 9 && isBigScreen && (
            <button
              onClick={() => setRenderedItems(9)}
              className={styles["view-more-active"]}
            >
              View more
              <FaChevronUp
                color="rgb(237, 236, 236)"
                style={{
                  transform: "translateY(2.3px) translateX(.3rem)",
                  fontSize: ".9rem",
                }}
              />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectsContent;
