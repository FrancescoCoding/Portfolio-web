import styles from "./ProjectsContent.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FaChevronDown, FaChevronUp, FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
import Loader from "../UI/Loader";

const ProjectsContent = props => {
  const storeLanguage = useSelector(state => state.languages.language);
  const storeColour = useSelector(state => state.colours);

  const [renderedItems, setRenderedItems] = useState(props.projects.length);
  const [isLoading, setIsLoading] = useState(true);

  const isBigScreen = useMediaQuery({ query: "(min-width: 1825px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 1200px)" });

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

  console.log(isLoading ? "Loading..." : "Loaded");

  useEffect(() => {
    // Once the .list background image is loaded, set the isLoading state to false
    const img = document.querySelectorAll(`.${styles.list}`);
    console.log(img);

    img.forEach(image => {
      // If the backgroundImage is still loading, wait for it to load
      if (image.style.backgroundImage === "none") {
        return;
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <div className={styles["projects-section"]}>
        <div className={styles.projects}>
          <div className={styles.items} style={{ paddingRight: "16px" }}>
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
                      onLoadedData={() => setIsLoading(false)}
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
