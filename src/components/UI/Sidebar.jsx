import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = props => {
  const storeColour = useSelector(state => state.colours.colour);

  return (
    <div className={styles.sidebar}>
      <div className={styles.concatContainer}>{props.concatContent}</div>
      <NavLink
        to="/portfolio"
        className={styles["sidebar-home-link"]}
        activeClassName={styles[`${storeColour}`]}
      >
        {" "}
        Francesco Gruosso
      </NavLink>
      <div className={styles.design}></div>
    </div>
  );
};

export default Sidebar;
