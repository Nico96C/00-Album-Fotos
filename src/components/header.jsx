import "./header.css";
import buttonFFX from "../music/FFXIn.mp3";
import { useContext } from "react";
import { AudioContext } from "../context/AudioContext";
import AudioOff from "../img/sound-off.svg";
import AudioOn from "../img/sound-on.svg";

const HeaderNav = () => {
  const { isPlaying, toggleAudio } = useContext(AudioContext);

  const playSound = () => {
    const audio = new Audio(buttonFFX);
    audio.volume = 0.35;
    audio.play();
  };

  return (
    <nav className="navbar">
      <p className="navbar-title">Album</p>
      <div className="navbar-links">
        <button className="navbar-btn" onClick={toggleAudio}>
          {isPlaying ? (
            <img src={AudioOn} width={24} height={24} />
          ) : (
            <img src={AudioOff} width={24} height={24} />
          )}
        </button>
        <a className="navbar-brand" href="#" onMouseEnter={playSound}>
          Home
        </a>
        <a className="navbar-brand" href="#" onMouseEnter={playSound}>
          Sobre este Regalo
        </a>
      </div>
    </nav>
  );
};

export default HeaderNav;
