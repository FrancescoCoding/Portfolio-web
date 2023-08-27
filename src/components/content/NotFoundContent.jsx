import styles from "./NotFoundContent.module.css";
import { useSelector } from "react-redux";
import { Nessie, Robot, Car, NoData } from "../../assets/Animations/Animations";
import { useMediaQuery } from "react-responsive";

const NotFoundContent = ({ message }) => {
  const storeColour = useSelector((state) => state.colours.colour);

  const isBigScreen = useMediaQuery({ query: "(min-width: 1200px)" });
  return (
    <div className={styles["notFound-container"]}>
      <div className={styles["notFound-content"]}>
        <div className={`${styles[`${storeColour}`]}`}>
          <h1>{message || "You're not supposed to be here"}</h1>
        </div>
        <div className="notFound-animation">
          {storeColour === "magenta" && (
            <Nessie
              width={isBigScreen ? 600 : 300}
              height={isBigScreen ? 600 : 300}
            />
          )}
          {storeColour === "leaf" && (
            <NoData
              width={isBigScreen ? 600 : 600}
              height={isBigScreen ? 600 : 600}
            />
          )}
          {storeColour === "canary" && (
            <Car
              width={isBigScreen ? 600 : 300}
              height={isBigScreen ? 600 : 300}
            />
          )}
          {storeColour === "ocean" && (
            <Robot
              width={isBigScreen ? 600 : 300}
              height={isBigScreen ? 600 : 300}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFoundContent;
