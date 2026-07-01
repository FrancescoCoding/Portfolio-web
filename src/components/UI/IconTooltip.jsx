import { useRef } from "react";

/**
 * Lightweight tooltip anchored to its child. Positioning is CSS-based
 * (see .icon-tooltip in index.css) so it can't drift inside scrolling or
 * fixed containers; on hover the bubble measures itself and shifts
 * horizontally just enough to stay inside the viewport.
 */
const IconTooltip = ({ text, children }) => {
  const bubbleRef = useRef(null);

  const keepOnScreen = () => {
    const bubble = bubbleRef.current;
    if (!bubble) return;

    bubble.style.setProperty("--shift", "0px");
    const rect = bubble.getBoundingClientRect();
    const margin = 10;
    let shift = 0;

    if (rect.left < margin) {
      shift = margin - rect.left;
    } else if (rect.right > window.innerWidth - margin) {
      shift = window.innerWidth - margin - rect.right;
    }

    bubble.style.setProperty("--shift", `${shift}px`);
  };

  return (
    <span
      className="icon-tooltip"
      onMouseEnter={keepOnScreen}
      onFocus={keepOnScreen}
    >
      {children}
      <span className="icon-tooltip__bubble" role="tooltip" ref={bubbleRef}>
        {text}
      </span>
      <span className="icon-tooltip__arrow" aria-hidden="true" />
    </span>
  );
};

export default IconTooltip;
