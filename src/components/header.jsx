import "./header.css";
import buttonSound from "../music/buttonSound.wav";
import { useContext } from "react";
import { AudioContext } from "../context/AudioContext";
import AudioOff from "../img/sound-off.svg";
import AudioOn from "../img/sound-on.svg";

const HeaderNav = () => {
  const { isPlaying, toggleAudio } = useContext(AudioContext);

  const playSound = () => {
    const audio = new Audio(buttonSound);
    audio.volume = 0.35;
    audio.play();
  };

  return (
    <nav className="navbar">
      <p className="navbar-title">Header</p>
      <div className="navbar-links">
        <button onClick={toggleAudio}>
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
          More
        </a>
        <a className="navbar-brand" href="#" onMouseEnter={playSound}>
          Section
        </a>
        <a className="navbar-brand" href="#" onMouseEnter={playSound}>
          End
        </a>
      </div>
    </nav>
  );
};

export default HeaderNav;
