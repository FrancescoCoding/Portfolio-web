import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = props => {
  return <div onClick={props.onClose} className={styles.backdrop}></div>;
};

const ModalOverlay = props => {
  return <div className={styles.modal}>{props.children}</div>;
};

const portalElement = document.getElementById("overlays");

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
