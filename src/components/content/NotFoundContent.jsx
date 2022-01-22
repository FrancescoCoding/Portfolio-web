import styles from "./NotFoundContent.module.css";
import { useSelector } from "react-redux";
import { Nessie, Robot, Car, NoData } from "../../assets/Animations";

const NotFoundContent = ({ message }) => {
  const storeColour = useSelector(state => state.colours.colour);

  return (
    <div className={styles["notFound-container"]}>
      <div className={styles["notFound-content"]}>
        <div className={`${styles[`${storeColour}`]}`}>
          {message || <h1>You're not supposed to be here</h1>}
        </div>
        {storeColour === "magenta" && <Nessie width="30%" />}
        {storeColour === "leaf" && <NoData width="550" height="550" />}
        {storeColour === "canary" && <Car width="600" height="600" />}
        {storeColour === "ocean" && <Robot width="500" height="500" />}
      </div>
    </div>
  );
};

export default NotFoundContent;
