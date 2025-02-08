/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./PhotoAlbumModal.css";
import pageSound from "../music/page.wav";
import PageFlip from "react-pageflip";

const pages = [
  "https://ik.imagekit.io/m3g4ID/Category1/1.png?updatedAt=1727977637217",
  "https://ik.imagekit.io/m3g4ID/Category1/2.png?updatedAt=1727977630354",
  "https://ik.imagekit.io/m3g4ID/Category1/3.png?updatedAt=1727977629481",
  "https://ik.imagekit.io/m3g4ID/Category1/4.webp?updatedAt=1727977627844",
  "https://picsum.photos/300/400?random=5",
  "https://picsum.photos/300/400?random=6",
];

const PhotoAlbumModal = ({ onClose }) => {
  const flipBook = useRef(null);

  const playPageSound = () => {
    const audio = new Audio(pageSound);
    audio.volume = 1;
    audio.play();
  };

  return (
    <div className="photo-album-background">
      <div className="photo-album-modal">
        <div className="modal-content">
          <PageFlip
            ref={flipBook}
            width={1000}
            height={1200}
            size="stretch"
            mobileScrollSupport={true}
            onFlip={playPageSound}
          >
            {pages.map((src, index) => (
              <div key={index} className="page">
                <img src={src} alt={`Page ${index + 1}`} />
              </div>
            ))}
          </PageFlip>
  
          <div className="navigation">
            <button onClick={() => flipBook.current.pageFlip().flipPrev()}>
              Anterior
            </button>
            <button onClick={() => flipBook.current.pageFlip().flipNext()}>
              Siguiente
            </button>
            <button className="close-button" onClick={onClose}>
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoAlbumModal;
