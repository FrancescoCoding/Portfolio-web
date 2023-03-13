import { useState, useEffect } from "react";
import styles from "./Transition.module.css";

const Transition = ({ reverse }) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  const directionHandler = reverse ? "scrollIn" : "scrollOut";

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 600);
  }, []);

  return (
    <>
      {!hasLoaded && <div className={styles[`${directionHandler}`]}></div>}
      {!hasLoaded && <div className={styles.fadeOut}></div>}
    </>
  );
};

export default Transition;
