import Modal from "../UI/Modal";
import { ContactMeForm } from "../UI/ContactMeForm";
import { useState, useMemo } from "react";

import copy from "copy-text-to-clipboard";
import { Mail } from "../../assets/Animations";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

import { useSelector } from "react-redux";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import useKeypress from "../../hooks/useKeyPress";

import styles from "./Contact.module.css";
import { mapStyles } from "../UI/MapsStyles";

const Contact = props => {
  const containerStyle = useMemo(() => {
    return {
      width: "100%",
      height: "520px",
      maxHeight: " 100%",
      borderBottomRightRadius: "1.19rem",
      borderTopRightRadius: "1.19rem",
    };
  }, []);

  const storeColour = useSelector(state => state.colours);

  const [textCopied, setTextCopied] = useState(false);
  const [showMessageSection, setShowMessageSection] = useState(false);

  useKeypress("Escape", props.onClose);

  const options = {
    styles: mapStyles[`${storeColour.colour}`],
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDKi9ePWObhV1pQpOCfBMVKAmb1CkhSeuM",
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return ""; // Loading

  const center = {
    lat: 57.14891090503782,
    lng: -2.0964244758753043,
  };
  const markerCoors = {
    lat: 57.14768038612096,
    lng: -2.0960869955164676,
  };

  const textWasCopiedPopup = () => {
    let timeout = setTimeout(() => {
      setTextCopied(false);
    }, 2000);
    if (textCopied) {
      clearTimeout(timeout);
      setTextCopied(true);
    } else {
      setTextCopied(true);
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={styles["contact-container"]}>
        <div
          className={styles.mail}
          onClick={() => setShowMessageSection(!showMessageSection)}
        >
          <Mail />
        </div>
        <div className={styles.close} onClick={props.onClose}>
          <IoCloseOutline />
        </div>
        {showMessageSection && (
          <div
            className={styles.back}
            onClick={() => setShowMessageSection(!showMessageSection)}
          >
            <AiOutlineArrowLeft />
          </div>
        )}

        {/* INFO */}
        {!showMessageSection && (
          <div
            className={styles.info}
            style={{
              border: `9px solid var(--${storeColour.colour}-active)`,
              borderRight: `9px solid var(--${storeColour.colour}-active)`,
            }}
          >
            <h1
              style={{ borderBottom: `${storeColour.hex} 2px` }}
              onClick={() => {
                copy("Francesco Gruosso");
                textWasCopiedPopup();
              }}
            >
              Francesco Gruosso
            </h1>
            <p
              onClick={() => {
                copy(
                  "I am an Italian Computing Science BSc (Hons) student with an interest in Full Stack Web Development, Graphics Design, UX & AI."
                );
                textWasCopiedPopup();
              }}
              style={{
                marginBottom: "1rem",
                border: `${storeColour.hex} solid 2px`,
              }}
            >
              I am an Italian Computing Science BSc (Hons) student with an
              interest in Full Stack Web Development, Graphics Design, UX & AI.
            </p>

            <p
              onClick={() => {
                copy(
                  "Currently open to work part-time as a frontend developer."
                );
                textWasCopiedPopup();
              }}
              style={{
                marginBottom: "1rem",
                border: `${storeColour.hex} solid 2px`,
              }}
            >
              Currently open to work part-time as a frontend developer.
            </p>
            {textCopied && (
              <p className={styles.copied}>Text copied to clipboard</p>
            )}
            <button
              className={styles["action-button"]}
              onClick={() => setShowMessageSection(true)}
            >
              Send me a message!{" "}
              <FaChevronDown style={{ transform: "translateY(4px)" }} />
            </button>
          </div>
        )}
        {showMessageSection && (
          <>
            <div
              className={styles.info}
              style={{
                border: `9px solid var(--${storeColour.colour}-active)`,
                borderRight: `9px solid var(--${storeColour.colour}-active)`,
              }}
            >
              <ContactMeForm />
            </div>
          </>
        )}

        {/* MAP */}
        <div
          className={styles.map}
          style={{
            border: `9px solid ${storeColour.hex}`,
            borderLeft: `9px solid ${storeColour.hex}`,
          }}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            options={options}
          >
            <Marker position={markerCoors} title="Francesco G" />
          </GoogleMap>
        </div>
      </div>
    </Modal>
  );
};

export default Contact;
