import { useState } from "react";
import styles from "./ImageWithLoader.module.css";

/**
 * Drop-in <img> replacement that shows a shimmering skeleton while the
 * image loads and fades the image in once ready. Width can be passed as
 * an HTML attribute (e.g. "60%") and is applied to the wrapper.
 */
const ImageWithLoader = ({ width, alt = "", style, ...imgProps }) => {
  const [status, setStatus] = useState("loading");

  return (
    <span
      className={styles.wrapper}
      style={{ width: width || "100%" }}
    >
      {status === "loading" && (
        <span className={styles.skeleton} aria-hidden="true" />
      )}
      {status === "error" && (
        <span className={styles.error} role="img" aria-label={alt}>
          ⚠ {alt || "Image failed to load"}
        </span>
      )}
      <img
        {...imgProps}
        alt={alt}
        loading="lazy"
        ref={(img) => {
          // Cached images can finish before onLoad is attached
          if (img && img.complete && img.naturalWidth > 0) {
            setStatus((s) => (s === "loading" ? "loaded" : s));
          }
        }}
        style={style}
        className={`${styles.image} ${status === "loaded" ? styles.loaded : ""}`}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
      />
    </span>
  );
};

export default ImageWithLoader;
