import Modal from "../UI/Modal";
import { ContactMeForm } from "../UI/ContactMeForm";
import { useState, useMemo, useEffect } from "react";

import copy from "copy-text-to-clipboard";

import { Mail } from "../../assets/Animations/Animations";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

import { useSelector } from "react-redux";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import styles from "./Contact.module.css";
import { mapStyles } from "../UI/MapsStyles";
import { useLocation } from "react-router-dom";

const Contact = (props) => {
  const containerStyle = useMemo(() => {
    return {
      width: "100%",
      height: "100%",
      maxHeight: " 100%",
      borderBottomRightRadius: "1.19rem",
      borderTopRightRadius: "1.19rem",
    };
  }, []);

  const location = useLocation();
  const storeColour = useSelector((state) => state.colours);
  const storeLanguage = useSelector((state) => state.languages.language);
  const isEnglish = storeLanguage === "EN";

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "about/info") {
      setShowMessageSection(false);
    } else if (hash === "about/contact") {
      setShowMessageSection(true);
    }
  }, [location.hash]);

  const toggleMessageSection = () => {
    const newHash = showMessageSection ? "about/info" : "about/contact";
    window.location.hash = newHash;
  };

  const [textCopied, setTextCopied] = useState(false);
  const [showMessageSection, setShowMessageSection] = useState(false);

  const options = {
    styles: mapStyles[`${storeColour.colour}`],
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
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
          onClick={toggleMessageSection}>
          <Mail />
        </div>
        <div
          className={styles.close}
          onClick={props.onClose}>
          <IoCloseOutline />
        </div>
        {showMessageSection && (
          <div
            className={styles.back}
            onClick={toggleMessageSection}>
            <AiOutlineArrowLeft />
          </div>
        )}

        {/* /////////////////////////////// */}
        {/* // -- INFO SECTION -- */}
        {/* @todo proper internationalization */}
        {!showMessageSection && (
          <div
            className={styles.info}
            style={{
              border: `0.9vh solid var(--${storeColour.colour}-active)`,
              borderRight: `0.9vh solid var(--${storeColour.colour}-active)`,
            }}>
            <h1
              style={{ borderBottom: `${storeColour.hex} 2px` }}
              onClick={() => {
                copy("🐸 Francesco Gruosso 🐸");
                textWasCopiedPopup();
              }}
              className={styles.paragraph}>
              Francesco Gruosso
            </h1>
            <p
              onClick={() => {
                isEnglish
                  ? copy(
                      "I am an Italian Computer Science BSc (Hons) student at Robert Gordon University with an specialization in Full-Stack Development, Graphics Design, UX & AI."
                    )
                  : copy(
                      "Sono laureato in Informatica BSc (Hons) con lode alla Robert Gordon University (RGU). Sono specializzato in Full-Stack Development, Design Grafico, UX & AI."
                    );
                textWasCopiedPopup();
              }}
              className={styles.paragraph}
              style={{
                marginBottom: "1rem",
                border: `${storeColour.hex} solid 2px`,
              }}>
              {isEnglish
                ? "I am a Computer Science BSc (Hons) graduate (1st class) with an specialization in Full-Stack Development, Graphics Design, UX & AI."
                : "Sono laureato in Informatica BSc (Hons) con lode alla Robert Gordon University (RGU). Sono specializzato in Full-Stack Development, Design Grafico, UX & AI."}
            </p>

            <p
              onClick={() => {
                isEnglish
                  ? copy(
                      copy(
                        "If you're looking to improve an existing product or build something new, I'd love to hear from you!"
                      )
                    )
                  : copy(
                      "Attualmente lavoro come Full-Stack Developer @ eCERTO."
                    );
                textWasCopiedPopup();
              }}
              className={styles.paragraph}
              style={{
                marginBottom: "1rem",
                border: `${storeColour.hex} solid 2px`,
              }}>
              {isEnglish
                ? "If you're looking to improve an existing product or build something new, I'd love to hear from you!"
                : "Attualmente lavoro come Full-Stack Developer @ eCERTO."}
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
              onClick={toggleMessageSection}>
              {isEnglish ? "Send me a message! " : "Invia un messaggio! "}
              <FaChevronDown style={{ transform: "translateY(4px)" }} />
            </button>
          </div>
        )}
        {showMessageSection && (
          <>
            <div
              className={styles["form-container"]}
              style={{
                border: `0.9vh solid var(--${storeColour.colour}-active)`,
                borderRight: `0.9vh solid var(--${storeColour.colour}-active)`,
              }}>
              <ContactMeForm />
            </div>
          </>
        )}

        {/* /////////////////////////////// */}
        {/* // -- MAP SECTION -- */}
        <div
          className={styles.map}
          style={{
            border: `0.9vh solid ${storeColour.hex}`,
            borderLeft: `0.9vh solid ${storeColour.hex}`,
          }}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            options={options}>
            <Marker
              position={markerCoors}
              title="Francesco G"
            />
          </GoogleMap>
        </div>
      </div>
    </Modal>
  );
};

export default Contact;
