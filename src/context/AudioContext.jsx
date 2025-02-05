/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import songBackground from "../music/musicLoop.mp3";

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [audio] = useState(new Audio(songBackground));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio.volume = 0.3;
    audio.loop = true;

    const startAudioOnInteraction = () => {
      audio.play().catch(() => {});
      setIsPlaying(true);
      document.removeEventListener("click", startAudioOnInteraction);
    };

    document.addEventListener("click", startAudioOnInteraction);

    return () => {
      audio.pause();
      document.removeEventListener("click", startAudioOnInteraction);
    };
  }, [audio]);

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <AudioContext.Provider value={{ isPlaying, toggleAudio }}>
      {children}
    </AudioContext.Provider>
  );
};
