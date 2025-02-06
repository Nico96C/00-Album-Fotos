/* eslint-disable react/prop-types */
import { useState } from "react";
import "./PhotoAlbumModal.css";
import pageSound from "../music/page.wav";

const pages = [
  { left: "Página 1 - Izquierda", right: "Página 1 - Derecha" },
  { left: "Página 2 - Izquierda", right: "Página 2 - Derecha" },
  // Agrega más páginas según sea necesario
];

const PhotoAlbumModal = ({ onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const playPageSound = () => {
    const audio = new Audio(pageSound);
    audio.volume = 1;
    audio.play();
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      playPageSound();
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      playPageSound();
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="photo-album-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="page">
          <div className="page-left">{pages[currentPage].left}</div>
          <div className="page-right">{pages[currentPage].right}</div>
        </div>
        <div className="navigation">
          <button onClick={handlePrev} disabled={currentPage === 0}>
            Anterior
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === pages.length - 1}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoAlbumModal;
