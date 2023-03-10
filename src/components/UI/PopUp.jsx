import styles from "./PopUp.module.css";

import { useState, useEffect } from "react";
import { VscChromeClose } from "react-icons/vsc";

const PopUp = ({ onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(window.devicePixelRatio);

  const zoomLevelPercents = () => {
    return Math.round(zoomLevel * 100);
  };

  useEffect(() => {
    const handleZoom = () => {
      setZoomLevel(window.devicePixelRatio);
    };
    window.addEventListener("resize", handleZoom);
    return () => window.removeEventListener("resize", handleZoom);
  }, []);

  return (
    <div className={styles.wrap}>
      <button className={styles.popup__close} onClick={onClose}>
        {" "}
        <VscChromeClose />{" "}
      </button>
      <h1 className={styles.zoom__h1}>
        Zoom level: {`${zoomLevelPercents()}%`}
      </h1>
      <p className={styles.zoom__p}>
        Your modal was open! Zoom out 🦆 if you wish to see it again :^)
      </p>
    </div>
  );
};

export default PopUp;
