import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import useKeypress from "../../hooks/useKeyPress";

export const Backdrop = props => {
  return <div onClick={props.onClose} className={styles.backdrop}></div>;
};

const ModalOverlay = props => {
  return <div className={styles.modal}>{props.children}</div>;
};

const portalElement = document.getElementById("overlays");

const Modal = props => {

  useKeypress("Escape", props.onClose);

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
