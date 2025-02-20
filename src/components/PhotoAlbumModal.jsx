/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "./PhotoAlbumModal.css";
import pageSound from "../music/page.wav";
import PageFlip from "react-pageflip";

const pages = [
  {
    src: "https://ik.imagekit.io/m3g4ID/cover2.jpg?updatedAt=1739281224346",
    title: "Título Libro",
    description: "Este es un libro de prueba, haz clic para abrir.",
    isCover: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Category1/1front.png?updatedAt=1727977637376",
      "https://ik.imagekit.io/m3g4ID/Category1/1back.png?updatedAt=1727977637577",
    ],
    title: "Título 1",
    description: "Descripción de la página 1",
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Category1/1front.png?updatedAt=1727977637376",
      "https://ik.imagekit.io/m3g4ID/Category1/1back.png?updatedAt=1727977637577",
    ],
    title: "Título 2",
    description: "Descripción de la página 2",
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Category1/1front.png?updatedAt=1727977637376",
      "https://ik.imagekit.io/m3g4ID/Category1/1back.png?updatedAt=1727977637577",
    ],
    title: "Título 3",
    description: "Descripción de la página 3",
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Category1/1front.png?updatedAt=1727977637376",
      "https://ik.imagekit.io/m3g4ID/Category1/1back.png?updatedAt=1727977637577",
    ],
    title: "Título 4",
    description: "Descripción de la página 4",
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Category1/1front.png?updatedAt=1727977637376",
      "https://ik.imagekit.io/m3g4ID/Category1/1back.png?updatedAt=1727977637577",
    ],
    title: "Título 5",
    description: "Descripción de la página 5",
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Category1/1front.png?updatedAt=1727977637376",
      "https://ik.imagekit.io/m3g4ID/Category1/1back.png?updatedAt=1727977637577",
    ],
    title: "Título 6",
    description: "Descripción de la página 6",
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Category1/1front.png?updatedAt=1727977637376",
      "https://ik.imagekit.io/m3g4ID/Category1/1back.png?updatedAt=1727977637577",
    ],
    title: "Título 7",
    description: "Descripción de la página 7",
  },
];

const PhotoAlbumModal = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isCoverPage, setIsCoverPage] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1600 });

  const flipBook = useRef(null);
  const modalRef = useRef(null);

  const playPageSound = () => {
    const audio = new Audio(pageSound);
    audio.volume = 1;
    audio.play();
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 200);
  };

  const handleFlip = (e) => {
    playPageSound();
    setIsCoverPage(e.data === 0);
  };

  const updateSize = () => {
    if (modalRef.current) {
      const modalWidth = modalRef.current.clientWidth;
      const modalHeight = modalRef.current.clientHeight;
  
      const newWidth = isCoverPage ? modalWidth * 0.6 : modalWidth * 0.8;
      const newHeight = isCoverPage ? modalHeight * 1.2 : modalHeight * 1.2;
  
      setDimensions({ width: newWidth, height: newHeight });
  
      // 🛑 Verificar si flipBook está definido antes de actualizar
      if (flipBook.current && flipBook.current.pageFlip()) {
        setTimeout(() => {
          flipBook.current.pageFlip().update();
        }, 100);
      }
    }
  };

  // 📏 Ajustar tamaño cuando se monta el modal o cambia la página
  useEffect(() => {
    updateSize();
  }, [isCoverPage]);

  // 🖥 Escuchar cambios de tamaño de pantalla
  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const skipToFirstPage = () => {
    if (flipBook.current) {
      flipBook.current.pageFlip().flip(1);
      setIsCoverPage(false);
      updateSize();
    }
  };

  return (
    <div className={`photo-album-background ${isClosing ? "closing" : ""}`}>
      <div className="navigation">
        <button className="close-button" onClick={handleClose}>X</button>
        <div className="page-navigation">
          <button onClick={() => flipBook.current.pageFlip().flipPrev()}>
            Anterior
          </button>
          <button onClick={() => flipBook.current.pageFlip().flipNext()}>
            Siguiente
          </button>
        </div>
      </div>

      <div ref={modalRef} className="photo-album-modal">
        <div className="modal-content">
          <PageFlip
            className="page-flip"
            ref={flipBook}
            width={dimensions.width}
            height={dimensions.height}
            size="stretch"
            mobileScrollSupport={true}
            onFlip={handleFlip}
            showCover={true}
          >
            {pages.map((page, index) => (
              <div key={index} className={`page ${page.isCover ? "cover-page" : ""}`}>
                {page.isCover ? (
                  <>
                    <h2 className="img-title">{page.title}</h2>
                    <p className="img-description">{page.description}</p>
                  </>
                ) : (
                  <>
                    <img src={page.src[0]} alt={`Page ${index + 1} - Img 1`} />
                    <img src={page.src[1]} alt={`Page ${index + 1} - Img 2`} />
                    <h2 className="img-title">{page.title}</h2>
                    <p className="img-description">{page.description}</p>
                  </>
                )}
              </div>
            ))}
          </PageFlip>
        </div>

        {isCoverPage && (
          <div className="fake-cover" onClick={skipToFirstPage}>
            <img src={pages[0].src} alt="Portada del álbum" />
            <div className="click-to-open">📖 Haz clic para abrir</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoAlbumModal;
