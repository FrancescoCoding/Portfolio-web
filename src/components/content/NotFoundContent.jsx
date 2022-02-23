import styles from "./NotFoundContent.module.css";
import { useSelector } from "react-redux";
import { Nessie, Robot, Car, NoData } from "../../assets/Animations";
import { useMediaQuery } from "react-responsive";

const NotFoundContent = ({ message }) => {
  const storeColour = useSelector(state => state.colours.colour);
  const isBigScreen = useMediaQuery({ query: "(min-width: 1200px)" });

  // Create marginTop responsive
  // If the page width is mobile, then the marginTop is -30


  let animationsMarginTop;

    if (isBigScreen) {
      animationsMarginTop = 80;
    } else {
      animationsMarginTop = -100;
    }

  return (
    <div className={styles["notFound-container"]}>
      <div className={styles["notFound-content"]}>
        <div className={`${styles[`${storeColour}`]}`}>
          {message || <h1>You're not supposed to be here</h1>}
        </div>
        {storeColour === "magenta" && <Nessie />}
        {storeColour === "leaf" && <NoData width="550" height="550" />}
        {storeColour === "canary" && <Car marginTop={animationsMarginTop} height="440" />}
        {storeColour === "ocean" && <Robot width="500" height="500" />}
      </div>
    </div>
  );
};

export default NotFoundContent;
