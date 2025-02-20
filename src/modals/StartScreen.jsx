/* eslint-disable react/prop-types */
import { useState } from "react";
import "./StartScreen.css";

const StartScreen = ({ onStart }) => {
  const initialText = "Click Para Empezar"; // Texto inicial en Albhed
  const targetText = "Click Para Empezar"; // Texto final en Jacquard 12
  const [displayText, setDisplayText] = useState(initialText);
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayText(
        targetText
          .split("")
          .map((letter, index) => {
            if (index < iteration) return targetText[index]; 
            return String.fromCharCode(65 + Math.random() * 26); 
          })
          .join("")
      );

      iteration++;
      if (iteration > targetText.length) clearInterval(interval);
    }, 70);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setDisplayText(initialText); // Vuelve al texto encriptado
  };

  return (
    <div className="start-screen" onClick={onStart}>
      <p 
        className={`blockScreen ${hovered ? "decoded" : ""}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave} // Reinicia cuando el mouse sale
      >
        {displayText}
      </p>
    </div>
  );
};

export default StartScreen;

