import styles from "./ProjectsContent.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FaChevronDown, FaChevronUp, FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";

const ProjectsContent = props => {
  const storeColour = useSelector(state => state);
  const [renderedItems, setRenderedItems] = useState(9);

  const isBigScreen = useMediaQuery({ query: "(min-width: 1825px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 1200px)" });

  let items;
  if (isBigScreen) {
    items = props.projects.slice(0, renderedItems);
  } else {
    items = props.projects;
  }

  const stopEvent = event => event.stopPropagation();

  return (
    <div className={styles["projects-section"]}>
      <div className={styles.projects}>
        <div className={styles.items} style={{ paddingRight: "12px" }}>
          {items.map(project => {
            return (
              <div className={styles["project-git"]} key={project.id + "git"}>
                <Link key={project.id} to={`/projects/${project.endpoint}`}>
                  <div
                    className={styles.list}
                    style={{
                      background: `url(${project.image}) no-repeat center center/cover`,
                    }}
                  >
                    <div className={styles["title-container"]}>
                      <p>{project["EN"].name}</p>
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
                    <p className={` ${styles.short}`}>{project["EN"].short}</p>
                    {/* <p className={` ${styles.tag}`}>{project["EN"].tags}</p> */}
                    {/* Previous logic for singular tag boxes */}
                    {/* {project["EN"].tags &&
                      project["EN"].tags.map(tag => (
                        <p
                          key={
                            project.id +
                            "tag" +
                            Math.floor(Math.random() * 1000)
                          }
                          className={` ${styles.tag}`}
                        >
                          {tag}
                        </p>
                      ))} */}
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
                // color: `${storeColour.hex}`,
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
                // color: `${storeColour.hex}`,
              }}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectsContent;
