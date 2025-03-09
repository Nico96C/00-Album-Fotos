/* eslint-disable react/prop-types */
import { useState } from "react";
import Letter from "./Letter";
import "./Letter.css";

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
    } else if (trimmed !== "amor") {
      setError("Palabra incorrecta. Intenta con la correcta 💌.");
    } else {
      setError("");
      setIsModalOpen(false);
      setShowLetter(true);
    }
  };

  const handleCloseModal = () => {
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
        <div className="modal romantic-fade">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>
              &times;
            </button>
            <h2>¿Estás list@ para leer esta carta?</h2>
            <input
              type="text"
              value={textField}
              onChange={(e) => {
                setTextField(e.target.value);
                setError("");
              }}
              placeholder="Ingresa la palabra mágica..."
            />
            {error && <p className="error-message">{error}</p>}
            <button onClick={handleAccept} className="accept-btn">
              Leer carta
            </button>
          </div>
        </div>
      )}

      {showLetter && <Letter />}

      {!isModalOpen && !showLetter && closedCompletely && (
        <RetryMessage onRetry={handleRetry} />
      )}
    </div>
  );
};

export default LetterWrapper;
