/* eslint-disable react/prop-types */
import { useState } from "react";
import Letter from "./Letter";
import "./Letter.css";
import Draggable from "react-draggable";
import win98Sound from '../music/FFXOut.mp3';

const RetryMessage = ({ onRetry }) => {
  return (
    <div className="retry-message">
      <p>Puedes volver a intentar 💌</p>
      <button onClick={onRetry} className="retry-btn">
        Ver la carta
      </button>
    </div>
  );
};

const LetterWrapper = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [showLetter, setShowLetter] = useState(false);
  const [closedCompletely, setClosedCompletely] = useState(false);
  const [textField, setTextField] = useState("");
  const [error, setError] = useState("");

  const handleAccept = () => {
    const trimmed = textField.trim().toLowerCase();
    if (!trimmed) {
      setError("Por favor ingresa una palabra.");
    } else if (trimmed !== "pastelito") {
      setError("Palabra incorrecta. Intenta con la correcta 💌.");
    } else {
      setError("");
      setIsModalOpen(false);
      setShowLetter(true);
    }
  };

  const handleCloseModal = () => {
    const sound = new Audio(win98Sound);
    sound.play();
    setIsModalOpen(false);
    setShowLetter(false);
    setClosedCompletely(true);
  };

  const handleRetry = () => {
    setIsModalOpen(true);
    setClosedCompletely(false);
    setShowLetter(false);
    setTextField("");
  };

  return (
    <div className="letter-wrapper">
      {isModalOpen && (
        <Draggable handle=".modal-titlebar">
          <div className="modal-win95">
            <div className="modal-titlebar">
              <span className="title-text">💌 Carta Misteriosa</span>
              <button className="win95-close" onClick={handleCloseModal}>
                ✕
              </button>
            </div>
            <div className="modal-body">
              <h2>
                Para acceder a la carta, debes responder... <br />
                ¿Cómo te gusta decirle a tu novio?
              </h2>
              <input
                type="text"
                value={textField}
                onChange={(e) => {
                  setTextField(e.target.value);
                  setError("");
                }}
                placeholder="Ingresa la palabra..."
              />
              {error && <p className="error-message">{error}</p>}
              <button onClick={handleAccept} className="win95-btn">
                Leer carta
              </button>
            </div>
          </div>
        </Draggable>
      )}

      {showLetter && <Letter />}

      {!isModalOpen && !showLetter && closedCompletely && (
        <RetryMessage onRetry={handleRetry} />
      )}
    </div>
  );
};

export default LetterWrapper;

