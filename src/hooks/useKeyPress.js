/**
 * useKeyPress
 * @param {string} key - The name of the key to respond to, compared against event.key
 * @param {function} action - The action to perform on key press
 * @param {string} action - Can also be a predefined action - works like a reducer
 */

import { useEffect } from "react";
import { useHistory } from "react-router";

export default function useKeypress(key, action) {
  const history = useHistory();

  useEffect(() => {
    const onKeyup = e => {
      if (e.key === key && action === "goBack") {
        history.push("/projects");
      } else if (e.key === key) action();
    };

    window.addEventListener("keyup", onKeyup);

    return () => window.removeEventListener("keyup", onKeyup);
  }, [action, history, key]);
}
