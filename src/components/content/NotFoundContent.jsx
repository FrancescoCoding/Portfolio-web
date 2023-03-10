import styles from "./NotFoundContent.module.css";
import { useSelector } from "react-redux";
import { Nessie, Robot, Car, NoData } from "../../assets/Animations/Animations";
// import { useMediaQuery } from "react-responsive";

const NotFoundContent = ({ message }) => {
  const storeColour = useSelector((state) => state.colours.colour);
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1200px)" });

  return (
    <div className={styles["notFound-container"]}>
      <div className={styles["notFound-content"]}>
        <div className={`${styles[`${storeColour}`]}`}>
          <h1>{message || "You're not supposed to be here}"}</h1>
        </div>
        <div className="notFound-animation">
          {storeColour === "magenta" && <Nessie />}
          {storeColour === "leaf" && <NoData width="550" height="550" />}
          {storeColour === "canary" && <Car height="450" />}
          {storeColour === "ocean" && <Robot width="500" height="500" />}
        </div>
      </div>
    </div>
  );
};

export default NotFoundContent;
