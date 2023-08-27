import { useDispatch } from "react-redux";
import { audioActions } from "../store/store";

export const useVolumeConfig = (isPlaying, isMuted) => {
  const dispatch = useDispatch();

  const setVolume = (newVolume, displayFeedback = false, callback) => {
    dispatch(audioActions.setVolume(newVolume));
    if (newVolume > 0 && !isPlaying) dispatch(audioActions.togglePlay());
    if (newVolume === 0) dispatch(audioActions.toggleMute());
    else dispatch(audioActions.setLastVolume(newVolume));
    if (displayFeedback) callback(`Volume: ${Math.round(newVolume * 100)}%`);
  };

  const toggleMute = (callback) => {
    dispatch(audioActions.toggleMute());
    callback(isMuted ? "[M] Music Unmuted" : "[M] Music Muted");
  };

  const togglePlayPause = (callback) => {
    dispatch(audioActions.togglePlay());
    callback(isPlaying ? "[P] Music Paused" : "[P] Music Playing");
  };

  return { setVolume, toggleMute, togglePlayPause };
};
