import styles from "./ProjectsContent.module.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

const stripEmojis = (text) => {
  const regex = /\p{Emoji_Presentation}/gu;
  return text.replace(regex, "");
};

const sortProjects = (projects, order, storeLanguage) => {
  return [...projects].sort((a, b) => {
    if (order === "name") {
      const nameA = stripEmojis(a[storeLanguage].name.toUpperCase());
      const nameB = stripEmojis(b[storeLanguage].name.toUpperCase());
      return nameA.localeCompare(nameB);
    } else {
      // default to sorting by 'order' property
      return a.order - b.order;
    }
  });
};

const ProjectsContent = (props) => {
  const storeLanguage = useSelector((state) => state.languages.language);
  const storeColour = useSelector((state) => state.colours);

  const isMediumScreen = useMediaQuery({ query: "(min-width: 1200px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 870px)" });

  const smallScreenPadding = isSmallScreen ? "8px" : "16px";

  // Load the user's sorting preference from local storage, or default to "order"
  const savedOrder = localStorage.getItem("sortingOrder") || "order";

  // create filter state
  const [order, setOrder] = useState(savedOrder);
  const [sortedProjects, setSortedProjects] = useState(props.projects);

  useEffect(() => {
    setSortedProjects(sortProjects(props.projects, order, storeLanguage));
  }, [props.projects, order, storeLanguage]);

  // Save the user's sorting preference to local storage
  const handleOrderChange = (e) => {
    const newOrder = e.target.value;
    setOrder(newOrder);

    // Save the user's sorting preference to local storage
    localStorage.setItem("sortingOrder", newOrder);
  };

  const stopEvent = (event) => event.stopPropagation();

  return (
    <>
      <div
        className={
          isMobile
            ? styles["projects-section-mobile"]
            : styles["projects-section"]
        }>
        <div className={styles.projects}>
          <div
            className={`${
              isMobile ? styles["items-mobile"] : styles["items"]
            } ${styles[`${storeColour.colour}`]}`}
            style={{ paddingRight: smallScreenPadding }}>
            {sortedProjects.map((project) => {
              return (
                <div
                  className={styles["project-git"]}
                  key={project.id + "git"}>
                  <Link
                    key={project.id}
                    to={`/projects/${project.endpoint}`}
                    className={styles["list-container"]}>
                    <div
                      className={`${styles["list-item"]} ${
                        styles[`${storeColour.colour}`]
                      }`}
                      style={{
                        background: isMediumScreen
                          ? `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${project.image}) no-repeat center center/cover`
                          : `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.65)), url(${project.image}) no-repeat center center/cover`,
                      }}>
                      {!isMobile && (
                        <div className={styles["image-container"]}>
                          <img
                            src={project.image}
                            alt={project.name}
                          />
                        </div>
                      )}
                      <div className={styles["title-container"]}>
                        <p>{project[`${storeLanguage}`].name}</p>
                        <p className={styles.short}>
                          {" "}
                          {project[`${storeLanguage}`].short}{" "}
                        </p>
                      </div>
                      {isMediumScreen && (
                        <a
                          rel="noreferrer"
                          href={project.githubLink}
                          onClick={stopEvent}
                          target="_blank"
                          aria-label={project[`${storeLanguage}`].name}>
                          <FaGithub
                            className={`${styles.git} ${styles.github}`}
                            color="white"
                          />
                        </a>
                      )}
                    </div>
                  </Link>

                  {isMediumScreen && (
                    <div className={styles.description}>
                      <p className={` ${styles.short}`}>
                        {project[`${storeLanguage}`].short}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className={styles["filter-container"]}>
            <div
              className={styles["filter-wrapper"]}
              style={{
                borderColor: `${storeColour.hex}`,
              }}>
              <select
                name="filter"
                id="filter"
                value={order}
                onChange={handleOrderChange}>
                {/* @todo: do proper internationalisation */}
                <option value="order">
                  {storeLanguage === "EN" ? "Featured" : "In evidenza"}
                </option>
                <option value="name">
                  {storeLanguage === "EN" ? "Name" : "Nome"}
                </option>
                {/* <option value="order">Date</option> */}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsContent;
