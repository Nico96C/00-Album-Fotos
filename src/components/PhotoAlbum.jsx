import { useState } from "react";
import "./PhotoAlbum.css";
import PhotoAlbumModal from "./PhotoAlbumModal";
import openSound from "../music/open.wav";

const PhotoAlbum = () => {
  const [isOpen, setIsOpen] = useState(false);

  const playOpenSound = () => {
    const audio = new Audio(openSound);
    audio.volume = 0.7;
    audio.play();
  };

  const handleOpen = () => {
    playOpenSound();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`photo-album ${isOpen ? "hidden" : ""}`}
        onClick={handleOpen}
      >
        <p>Álbum de Fotos</p>
      </div>
      {isOpen && <PhotoAlbumModal onClose={handleClose} />}
    </>
  );
};

export default PhotoAlbum;
