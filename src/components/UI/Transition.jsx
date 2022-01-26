import { useState, useEffect } from "react";
import styles from "./Transition.module.css";

const Transition = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 600);
  }, []);

  return (
    <>
      {!hasLoaded && <div className={styles.scrollIn}></div>}
      {!hasLoaded && <div className={styles.fadeOut}></div>}
    </>
  );
};

export default Transition;
