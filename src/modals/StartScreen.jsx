/* eslint-disable react/prop-types */
import { useState } from "react";
import "./StartScreen.css";

const StartScreen = ({ onStart }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      onStart();
    }, 500);
  };

  return (
    <div
      className={`start-screen ${fadeOut ? "fade-out" : ""}`}
      onClick={handleClick}
    >
      <p className="blockScreen">Click Para Empezar</p>
    </div>
  );
};

export default StartScreen;
