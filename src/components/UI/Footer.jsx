import styles from "./Footer.module.css";
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["footer-content"]}>
        <p>Francesco Gruosso &copy; {currentYear}</p>
        <div>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
