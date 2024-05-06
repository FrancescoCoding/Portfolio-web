import styles from "./BackButton.module.css";
import { useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

// Custom hook to use back navigation
export const useGoBack = () => {
  const history = useHistory();
  return () => history.goBack();
};

export const BackButton = (props) => {
  const goBack = useGoBack();
  const history = useHistory();

  if (props.endpoint === undefined) {
    return (
      <FaArrowLeft
        className={styles.backButton}
        onClick={goBack}
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
