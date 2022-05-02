import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Sidebar = props => {
  const storeColour = useSelector(state => state.colours.colour);
  const location = useLocation();

  console.log(location.pathname, "location");

  return (
    <div className={styles.sidebar}>
      <div className={styles["concat-container"]}>{props.concatContent}</div>
      <NavLink
        to="/portfolio"
        className={styles["sidebar-home-link"]}
        activeClassName={styles[`${storeColour}`]}
      >
        {location.pathname === "/portfolio" ? "Homepage" : "Francesco"}
      </NavLink>
      <div className={styles.design}></div>
    </div>
  );
};

export default Sidebar;
