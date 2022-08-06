import styles from "./BackButton.module.css";
import { useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const BackButton = props => {
  const history = useHistory();

  if (props.endpoint === undefined) {
    return (
      <FaArrowLeft
        className={styles.backButton}
        onClick={() => history.goBack()}
      />
    );
  }

  return (
    <FaArrowLeft
      className={styles.backButton}
      onClick={() => history.push(`${props.endpoint}`)}
    />
  );
};
