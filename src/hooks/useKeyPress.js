import { useEffect } from "react";

export default function useKeyPress(key, action, ctrlKey = false) {
  useEffect(() => {
    let intervalId;
    let isKeyHeldDown = false; // Flag to track if the key is being held down

    const onKeydown = (e) => {
      // Check if the target is an input, textarea, or select
      if (
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.tagName === "SELECT"
      ) {
        return; // If it's an input, textarea, or select, just return without invoking the action
      }

      if (
        e.key.toLowerCase() === key.toLowerCase() &&
        e.ctrlKey === ctrlKey &&
        !isKeyHeldDown
      ) {
        // If the key is held down and the interval is not already running,
        // call the action and start the interval
        action(e);
        intervalId = setInterval(() => action(e), 100);
        isKeyHeldDown = true; // Set the flag to true
      }
    };

    const onKeyup = (e) => {
      if (e.key.toLowerCase() === key.toLowerCase()) {
        // Clear the interval when the key is released, regardless of the ctrlKey state
        clearInterval(intervalId);
        isKeyHeldDown = false; // Reset the flag
      }
    };

    window.addEventListener("keydown", onKeydown);
    window.addEventListener("keyup", onKeyup);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("keydown", onKeydown);
      window.removeEventListener("keyup", onKeyup);
    };
  }, [action, key, ctrlKey]);
}
