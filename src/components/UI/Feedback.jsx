import React from "react";
import styles from "./Feedback.module.css";

const Feedback = ({ message, isActive }) => {
  return (
    <div
      className={`${styles.feedbackAnimation} ${isActive ? styles.show : ""}`}>
      {message}
    </div>
  );
};

export default Feedback;
