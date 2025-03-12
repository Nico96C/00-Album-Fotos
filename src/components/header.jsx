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
      <p className="navbar-title">4toAniversario</p>
      <div className="navbar-links">
        <button className="navbar-btn" onClick={toggleAudio} onMouseEnter={playSound}>
          {isPlaying ? (
            <img src={AudioOn} width={30} height={30} />
          ) : (
            <img src={AudioOff} width={30} height={30} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default HeaderNav;
