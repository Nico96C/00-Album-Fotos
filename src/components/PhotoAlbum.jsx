import { useState } from "react";
import "./PhotoAlbum.css";
import PhotoAlbumModal from "./PhotoAlbumModal";
import openSound from "../music/open.wav";

const PhotoAlbum = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);

  const playOpenSound = () => {
    const audio = new Audio(openSound);
    audio.volume = 0.7;
    audio.play();
  };

  const handleOpen = () => {
    playOpenSound();
    setIsOpen2(true);
  };

  const handleClose = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div
        className={`photo-album ${isOpen ? "hidden" : ""}`}
        onClick={handleOpen}
      >
        <p>Álbum de Fotos</p>
      </div>
      {isOpen2 && <PhotoAlbumModal onClose={handleClose} />}
    </>
  );
};

export default PhotoAlbum;
