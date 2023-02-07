import Modal from "../UI/Modal";
import { ContactMeForm } from "../UI/ContactMeForm";
import { useState, useMemo } from "react";

import copy from "copy-text-to-clipboard";
import { Mail } from "../../assets/Animations/Animations";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

import { useSelector } from "react-redux";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


import styles from "./Contact.module.css";
import { mapStyles } from "../UI/MapsStyles";

const Contact = props => {

  const containerStyle = useMemo(() => {
    return {
      width: "100%",
      height: "100%",
      maxHeight: " 100%",
      borderBottomRightRadius: "1.19rem",
      borderTopRightRadius: "1.19rem",
    };
  }, []);

  const storeColour = useSelector(state => state.colours);
  const storeLanguage = useSelector(state => state.languages.language);
  const isEnglish = storeLanguage === "EN";

  const [textCopied, setTextCopied] = useState(false);
  const [showMessageSection, setShowMessageSection] = useState(false);


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

        {/* /////////////////////////////// */}
        {/* // -- INFO SECTION -- */}
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
                copy("🐸 Francesco Gruosso 🐸");
                textWasCopiedPopup();
              }}
            >
              Francesco Gruosso
            </h1>
            <p
              onClick={() => {
                isEnglish
                  ? copy(
                    "I am an Italian Computing Science BSc (Hons) student at Robert Gordon University with an interest in Full-Stack Web Development, Graphics Design, UX & AI."
                  )
                  : copy(
                    "Sono uno studente di Informatica di terzo anno alla Robert Gordon University (RGU) con interesse in Full-Stack Web Development, Design Grafico, UX & AI."
                  );
                textWasCopiedPopup();
              }}
              className={styles.paragraph}
              style={{
                marginBottom: "1rem",
                border: `${storeColour.hex} solid 2px`,
              }}
            >
              {isEnglish
                ? "I am an Italian Computing Science BSc (Hons) student with an interest in Full-Stack Web Development, Graphics Design, UX & AI."
                : "Sono uno studente di Informatica di terzo anno alla Robert Gordon University (RGU) con interesse in Full-Stack Web Development, Design Grafico, UX & AI."}
            </p>

            <p
              onClick={() => {
                isEnglish
                  ? copy(
                    copy(
                      "Currently working as a software developer @ eCERTO."
                    )
                  )
                  : copy(
                    "Attualmente lavoro come software developer @ eCERTO."
                  );
                textWasCopiedPopup();
              }}
              className={styles.paragraph}
              style={{
                marginBottom: "1rem",
                border: `${storeColour.hex} solid 2px`,
              }}
            >
              {isEnglish
                ? "Currently working as a software developer @ eCERTO."
                : "Attualmente lavoro come software developer @ eCERTO."}
            </p>
            {textCopied && (
              <p className={styles.copied}>
                {isEnglish
                  ? "Text copied to clipboard"
                  : "Testo copiato negli appunti"}
              </p>
            )}
            <button
              className={styles["action-button"]}
              onClick={() => setShowMessageSection(true)}
            >
              {isEnglish ? "Send me a message! " : "Invia un messaggio! "}
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

        {/* /////////////////////////////// */}
        {/* // -- MAP SECTION -- */}
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
