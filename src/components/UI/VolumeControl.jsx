import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import Feedback from "./Feedback";
import {
  IoVolumeLow,
  IoVolumeMedium,
  IoVolumeMute,
  IoVolumeHigh,
  IoPlay,
  IoPause,
} from "react-icons/io5";
import styles from "./VolumeControl.module.css";
import useKeyPress from "../../hooks/useKeyPress";
import { useVolumeConfig } from "../../settings/VolumeConfig";

const VolumeControl = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1200px)" });

  const volume = useSelector((state) => state.audio.volume);
  const isPlaying = useSelector((state) => state.audio.isPlaying);
  const isMuted = useSelector((state) => state.audio.isMuted);
  const currentSongIndex = useSelector((state) => state.audio.currentSongIndex);
  const songs = useSelector((state) => state.audio.songs);

  const songTitle = songs[currentSongIndex]?.title || "No song selected";

  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showTitle, setShowTitle] = useState(false);
  const [fadeClass, setFadeClass] = useState("");

  const { setVolume, toggleMute, togglePlayPause } = useVolumeConfig(
    isPlaying,
    isMuted
  );

  const showFeedback = (message) => {
    setFeedbackMessage(message);
    setFeedbackVisible(true);
  };

  // Key toggle when [Enter] or [Space] keys on tab focus
  const handleKeyPress = (event, action) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return <IoVolumeMute />;
    if (volume < 0.3) return <IoVolumeLow />;
    if (volume < 0.7) return <IoVolumeMedium />;
    return <IoVolumeHigh />;
  };

  const changeVolumeHandler = (event) => {
    const newVolume = event.target.value / 100;
    setVolume(newVolume, true, showFeedback);
    if (isMuted && newVolume > 0) toggleMute(showFeedback);
  };

  useKeyPress("m", () => toggleMute(showFeedback));
  useKeyPress("p", () => togglePlayPause(showFeedback));

  useEffect(() => {
    if (!feedbackVisible) return;
    const timer = setTimeout(() => setFeedbackVisible(false), 3000);
    return () => clearTimeout(timer);
  }, [feedbackVisible, feedbackMessage]);

  useEffect(() => {
    if (isPlaying && volume === 0 && !isMuted) {
      setVolume(0.5, true, showFeedback);
    }
  }, [isPlaying, setVolume, volume, isMuted]);

  useEffect(() => {
    if (isPlaying) {
      setShowTitle(true);
      setFadeClass("songTitleFadeIn");
    } else {
      setFadeClass("songTitleFadeOut");
      const timer = setTimeout(() => setShowTitle(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  useKeyPress(
    "ArrowUp",
    () => {
      const newVolume = Math.min(volume + 0.05, 1);
      setVolume(newVolume, true, showFeedback);
    },
    true
  );

  useKeyPress(
    "ArrowDown",
    () => {
      const newVolume = Math.max(volume - 0.05, 0);
      setVolume(newVolume, true, showFeedback);
    },
    true
  );

  if (!isBigScreen) return null;

  return (
    <>
      <Feedback
        message={feedbackMessage}
        isActive={feedbackVisible}
        resetFeedback={() => setFeedbackVisible(false)}
      />
      <div className={styles.volumeControl}>
        {showTitle && (
          <div className={styles.songTitleContainer}>
            <div className={`${styles.songTitle} ${styles[fadeClass]}`}>
              {songTitle}
            </div>
          </div>
        )}
        <div
          className={styles.volumeIcon}
          onClick={() => toggleMute(showFeedback)}
          onKeyDown={(e) => handleKeyPress(e, () => toggleMute(showFeedback))}
          role="button"
          tabIndex="0"
          aria-label="Toggle Mute">
          {getVolumeIcon()}
        </div>
        <label
          htmlFor="volumeSlider"
          className={styles.accessibleLabel}>
          Adjust volume level
        </label>
        <input
          type="range"
          id="volumeSlider"
          min="0"
          max="100"
          value={volume * 100}
          className={styles.slider}
          onChange={changeVolumeHandler}
        />
        <div
          className={styles.playIcon}
          onClick={() => togglePlayPause(showFeedback)}
          onKeyDown={(e) =>
            handleKeyPress(e, () => togglePlayPause(showFeedback))
          }
          role="button"
          tabIndex="0"
          aria-label={isPlaying ? "Pause Music" : "Play Music"}>
          {isPlaying ? <IoPause /> : <IoPlay />}
        </div>
      </div>
    </>
  );
};

export default VolumeControl;
