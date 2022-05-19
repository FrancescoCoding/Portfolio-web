import styles from "./Loader.module.css";
import { Loading } from "../../assets/Animations/Animations";

const Loader = props => {
  return (
    <div
      className={styles["loader-container"]}
      style={{ animationDuration: props.duration || 1000 }}
    >
      <Loading />
    </div>
  );
};

export default Loader;
