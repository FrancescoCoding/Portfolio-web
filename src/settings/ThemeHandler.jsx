// ThemeHandler.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { effectActions } from "../store/store";

const ThemeHandler = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const currentEffect = useSelector((state) => state.effects.currentEffect);

  useEffect(() => {
    const body = document.body;

    // Remove previous effect class
    body.className = "";

    // Apply the 'retro' effect only on the 404 page
    if (location.pathname === "/404") {
      body.classList.add("grayscale", "retro");
      dispatch(effectActions.setRetroEffect());
    } else {
      // If the currentEffect is not set (initial load or empty), then set it to 'noise'
      dispatch(effectActions.setNoiseEffect());

      // Apply the current effect from Redux, or 'noise' by default
      body.classList.add(currentEffect);
    }
  }, [currentEffect, location.pathname, dispatch]);

  // Render nothing; this component is only for side effects
  return null;
};

export default ThemeHandler;
