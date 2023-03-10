import styles from "./ColourSelector.module.css";
import { colourActions } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

import { FaCheck } from "react-icons/fa";
const checkMark = (
  <FaCheck
    size="50%"
    style={{
      transform: "translateY(.12rem) translateX(.04em)",
    }}
  />
);

const ColourSelector = ({ backgroundColor }) => {
  const storeColour = useSelector((state) => state.colours.colour);
  const dispatch = useDispatch();

  const canaryThemeHandler = () => {
    dispatch(colourActions.colourCanary());
  };
  const oceanThemeHandler = () => {
    dispatch(colourActions.colourOcean());
  };
  const magentaThemeHandler = () => {
    dispatch(colourActions.colourMagenta());
  };
  const leafThemeHandler = () => {
    dispatch(colourActions.colourLeaf());
  };

  return (
    <section className={styles["colours-section"]}>
      <div className={styles["colours-wrapper"]}>
        <div
          className={styles["colours-container"]}
          style={{ backgroundColor: `${backgroundColor}` }}
        >
          <button
            aria-label="Canary colour"
            onClick={canaryThemeHandler}
            className={styles.canary}
          >
            {storeColour === "canary" && checkMark}
          </button>
          <button
            aria-label="Ocean colour"
            onClick={oceanThemeHandler}
            className={styles.ocean}
          >
            {storeColour === "ocean" && checkMark}
          </button>
          <button
            aria-label="Magenta colour"
            onClick={magentaThemeHandler}
            className={styles.magenta}
          >
            {storeColour === "magenta" && checkMark}
          </button>
          <button
            aria-label="Leaf colour"
            onClick={leafThemeHandler}
            className={styles.leaf}
          >
            {storeColour === "leaf" && checkMark}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ColourSelector;
