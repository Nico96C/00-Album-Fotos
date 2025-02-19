import { useState } from "react";
import PhotoAlbum from "./PhotoAlbum";
import "./MainOptions.css";
import FFXaudio from "../music/FFXIn.mp3";

const MainOptions = () => {
  const [activeOption, setActiveOption] = useState(null);
  const [hoveredOption, setHoveredOption] = useState(null);

  const handleClick = (option) => {
    setActiveOption((prev) => (prev === option ? null : option));
  };

  const playFFXSound = () => {
    const audio = new Audio(FFXaudio);
    audio.volume = 0.5;
    audio.play();
  };

  return (
    <div className={`main-options-wrapper ${activeOption ? "active" : ""}`}>
      <div className="wave-container">
      <svg
        className="wave"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#6b5b95" />
      <stop offset="100%" stopColor="#957dad" />
    </linearGradient>
  </defs>
        <path
          d="M 0 100 Q 100 100, 100 0 L 100 100 L 0 100 Z"
          fill="url(#waveGradient)"
        />
      </svg>
    </div>
      
      <div className={`main-options-container ${activeOption ? "active" : ""}`}>
        {["album", "carta", "nosotros"].map((option, index) => (
          <div
            key={option}
            className={`option-card ${option} ${
              hoveredOption === option ? "hovered" : ""
            } ${activeOption === option ? "selected" : ""}`}
            onMouseEnter={() => {
              setHoveredOption(option);
            }}
            onMouseLeave={() => setHoveredOption(null)}
            onClick={() => {
              handleClick(option);
              playFFXSound();
            }}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="circle">{index + 1}</div>
            <div className="option-content">
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </div>
            {hoveredOption === option && (
              <div className="preview">
                {option === "album"
                  ? "📷 Ver álbum"
                  : option === "carta"
                  ? "📜 Ver carta"
                  : "ℹ️ Sobre nosotros"}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Componente Expandido */}
      {activeOption && (
        <div className="expanded-component">
          {activeOption === "album" ? (
            <PhotoAlbum />
          ) : activeOption === "carta" ? (
            <h2>Carta</h2>
          ) : (
            <h2>Nosotros</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default MainOptions;
