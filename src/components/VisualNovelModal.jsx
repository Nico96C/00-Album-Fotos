/* eslint-disable react/prop-types */
import { useState } from "react";
import "./VisualNovelModal.css";
import characterImage from "../img/character.png";
import nextIcon from "../img/next.svg";

const dialogues = [
  "Bienvenido a nuestra aplicación.",
  "Esta es una demostración de una novela visual.",
  "Haz clic para avanzar el texto.",
  "¡Disfruta de la experiencia!",
];

const VisualNovelModal = ({ onClose }) => {
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleClick = () => {
    if (currentDialogueIndex < dialogues.length - 1) {
      setFade(true);
      setTimeout(() => {
        setCurrentDialogueIndex(currentDialogueIndex + 1);
        setFade(false);
      }, 500);
    } else {
      onClose();
    }
  };

  return (
    <div className="visual-novel-modal" onClick={handleClick}>
      <img src={characterImage} alt="Character" className="character-image" />
      <div className={`dialogue-box ${fade ? "fade-out" : ""}`}>
        <p>{dialogues[currentDialogueIndex]}</p>
        <p className="click-to-continue">Siguiente <img src={nextIcon} alt="siguiente" width={14} height={14}/></p>
      </div>
    </div>
  );
};

export default VisualNovelModal;
