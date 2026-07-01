import styles from "./ProjectsContent.module.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

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

  // Load the user's sorting preference from local storage, or default to "order"
  const savedOrder = localStorage.getItem("sortingOrder") || "order";

  const [order, setOrder] = useState(savedOrder);
  const [sortedProjects, setSortedProjects] = useState(props.projects);
  const [centerCardIndex, setCenterCardIndex] = useState(0);

  useEffect(() => {
    setSortedProjects(sortProjects(props.projects, order, storeLanguage));
  }, [props.projects, order, storeLanguage]);

  // On touch/mobile layouts, highlight the card closest to the viewport centre
  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    if (!mobileQuery.matches) return;

    let ticking = false;

    const updateCenterCard = () => {
      ticking = false;
      const cards = document.querySelectorAll("[data-card-index]");
      if (cards.length === 0) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop <= 50) {
        setCenterCardIndex(0);
        return;
      }

      if (scrollTop + windowHeight >= documentHeight - 50) {
        setCenterCardIndex(cards.length - 1);
        return;
      }

      const viewportCenter = windowHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCenterCardIndex(closestIndex);
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateCenterCard);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sortedProjects]);

  // Save the user's sorting preference to local storage
  const handleOrderChange = (e) => {
    const newOrder = e.target.value;
    setOrder(newOrder);
    localStorage.setItem("sortingOrder", newOrder);
  };

  const stopEvent = (event) => event.stopPropagation();

  return (
    <div
      className={styles["projects-section"]}
      style={{ "--accent": storeColour.hex }}
    >
      <div className={styles.projects}>
        {/* Filter */}
        <div className={styles["filter-container"]}>
          <div className={styles["filter-wrapper"]}>
            <select name="filter" id="filter" value={order} onChange={handleOrderChange}>
              <option value="order">
                {storeLanguage === "EN" ? "Featured" : "In evidenza"}
              </option>
              <option value="name">
                {storeLanguage === "EN" ? "Name" : "Nome"}
              </option>
            </select>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`${styles["items"]} ${styles[storeColour.colour]}`}>
          {sortedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`${styles["project-card"]} ${index === centerCardIndex ? styles["center-card"] : ""}`}
              data-card-index={index}
            >
              <Link to={`/projects/${project.endpoint}`} className={styles["card-link"]}>
                <div
                  className={`${styles["card"]} ${styles[storeColour.colour]}`}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${project.image})`,
                  }}
                >
                  <div className={styles["card-content"]}>
                    <h3 className={styles["card-title"]}>
                      {project[storeLanguage].name}
                    </h3>
                    <p className={styles["card-description"]}>
                      {project[storeLanguage].short}
                    </p>
                  </div>

                  <a
                    href={project.githubLink}
                    onClick={stopEvent}
                    target="_blank"
                    rel="noreferrer"
                    className={styles["github-link"]}
                    aria-label={`View ${project[storeLanguage].name} on GitHub`}
                  >
                    <FaGithub className={styles["github-icon"]} />
                  </a>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;
