/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./PhotoAlbumModal.css";
import pageSound from "../music/page.wav";
import PageFlip from "react-pageflip";

const pages = [
  {
    src: "https://ik.imagekit.io/m3g4ID/WhatsApp%20Image%202024-08-30%20at%2015.05.12%20(1).jpeg?updatedAt=1739201799584",
    title: "Título",
    description: "Descripción de portada",
  },
  {
    src: "https://ik.imagekit.io/m3g4ID/Category1/1.png?updatedAt=1727977637217",
    title: "Título 1",
    description: "Descripción de la página 1",
  },
  {
    src: "https://ik.imagekit.io/m3g4ID/Category1/2.png?updatedAt=1727977630354",
    title: "Título 2",
    description: "Descripción de la página 2",
  },
  {
    src: "https://ik.imagekit.io/m3g4ID/Category1/3.png?updatedAt=1727977629481",
    title: "Título 3",
    description: "Descripción de la página 3",
  },
  {
    src: "https://ik.imagekit.io/m3g4ID/Category1/4.webp?updatedAt=1727977627844",
    title: "Título 4",
    description: "Descripción de la página 4",
  },
  {
    src: "https://picsum.photos/300/400?random=5",
    title: "Título 5",
    description: "Descripción de la página 5",
  },
  {
    src: "https://picsum.photos/300/400?random=6",
    title: "Título 6",
    description: "Descripción de la página 6",
  },
  {
    src: "https://ik.imagekit.io/m3g4ID/WhatsApp%20Image%202024-08-30%20at%2015.05.13.jpeg?updatedAt=1739201652788",
    title: "Título 7",
    description: "Descripción de la página 7",
  },
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
            {pages.map((page, index) => (
              <div key={index} className="page">
                <img src={page.src} alt={`Page ${index + 1}`} />
                <h2 className="img-title">{page.title}</h2>
                <p className="img-description">{page.description}</p>
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
