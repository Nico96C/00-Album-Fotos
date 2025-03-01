/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "./PhotoAlbumModal.css";
import pageSound from "../music/page.wav";
import PageFlip from "react-pageflip";
import ffxSound from "../music/FFXOut.mp3";

const pages = [
  {
    src: "https://ik.imagekit.io/m3g4ID/cover2.jpg?updatedAt=1739281224346",
    title: " '..Las fotos nos permiten revivir cosas pasadas y atesorar los momentos, logrando volver sobre nuestros pasos..' ",
    description: "Este álbum de fotos representa que cada imagen es una ventana al pasado, permitiéndonos recapitular y ver lo que fuimos. Haz clic para abrir y déjate llevar a conocer, ver desde tu propia vista con quien estas a dia de hoy ",
    isCover: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/2.jpg?updatedAt=1740580431165",
    ],
    title: "Título 1",
    description: "Descripción de la página 1",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/14.jpg?updatedAt=1740580432956",
      "https://ik.imagekit.io/m3g4ID/Photos-Album/41.jpg?updatedAt=1740580438058",
    ],
    title: "Título 2",
    description: "Descripción de la página 2",
    onlyOnePage: false,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/1.jpg?updatedAt=1740580431206",
      "https://ik.imagekit.io/m3g4ID/Photos-Album/16.jpg?updatedAt=1740580433008",
    ],
    title: "Título 3",
    description: "Descripción de la página 3",
    onlyOnePage: false,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/35.jpg?updatedAt=1740580437067",
      "https://ik.imagekit.io/m3g4ID/Photos-Album/4.jpg?updatedAt=1740580431193",
    ],
    title: "Título 4",
    description: "Descripción de la página 4",
    onlyOnePage: false,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/40.jpg?updatedAt=1740580438004",
    ],
    title: "Título 5",
    description: "Descripción de la página 5",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/8.jpg?updatedAt=1740580431235",
      "https://ik.imagekit.io/m3g4ID/Photos-Album/6.jpg?updatedAt=1740580431277",
    ],
    title: "Título 6",
    description: "Descripción de la página 6",
    onlyOnePage: false,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/39.jpg?updatedAt=1740580438049",
    ],
    title: "Título 7",
    description: "Descripción de la página 7",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/7.jpg?updatedAt=1740580431250",
      "https://ik.imagekit.io/m3g4ID/Photos-Album/5.jpg?updatedAt=1740580431268",
    ],
    title: "Título 8",
    description: "Descripción de la página 1",
    onlyOnePage: false,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/38.jpg?updatedAt=1740580438797",
      "https://ik.imagekit.io/m3g4ID/Photos-Album/34.jpg?updatedAt=1740580436850",
    ],
    title: "Título 9",
    description: "Descripción de la página 2",
    onlyOnePage: false,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/36.jpg?updatedAt=1740580437997",
      "https://ik.imagekit.io/m3g4ID/Photos-Album/37.jpg?updatedAt=1740580438167",
    ],
    title: "Título 10",
    description: "Descripción de la página 3",
    onlyOnePage: false,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/24.jpg?updatedAt=1740580435407",
      "https://ik.imagekit.io/m3g4ID/Photos-Album/18.jpg?updatedAt=1740580433455",
    ],
    title: "Título 11",
    description: "Descripción de la página 4",
    onlyOnePage: false,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/13.jpg?updatedAt=1740580433011",
    ],
    title: "Título 12",
    description: "Descripción de la página 5",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/17.jpg?updatedAt=1740580433469",
    ],
    title: "Título 13",
    description: "Descripción de la página 6",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/26.jpg?updatedAt=1740580435565",
    ],
    title: "Título 14",
    description: "Descripción de la página 7",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/25.jpg?updatedAt=1740580435517",
    ],
    title: "Título 15",
    description: "Descripción de la página 1",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/33.jpg?updatedAt=1740580436608",
    ],
    title: "Título 15",
    description: "Descripción de la página 1",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/23.jpg?updatedAt=1740580435599",
    ],
    title: "Título 16",
    description: "Descripción de la página 2",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/32.jpg?updatedAt=1740580435555",
      "https://ik.imagekit.io/m3g4ID/Photos-Album/9.jpg?updatedAt=1740580431041",
    ],
    title: "Título 17",
    description: "Descripción de la página 3",
    onlyOnePage: false,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/19.jpg?updatedAt=1740580433376",
    ],
    title: "Título 18",
    description: "Descripción de la página 4",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/42.jpg?updatedAt=1740580438198",
    ],
    title: "Título 19",
    description: "Descripción de la página 5",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/20.jpg?updatedAt=1740580433535",
    ],
    title: "Título 20",
    description: "Descripción de la página 6",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/21.jpg?updatedAt=1740580433184",
      "https://ik.imagekit.io/m3g4ID/Photos-Album/28.jpg?updatedAt=1740580435585",
    ],
    title: "Título 21",
    description: "Descripción de la página 7",
    onlyOnePage: false,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/27.jpg?updatedAt=1740580435508",
    ],
    title: "Título 22",
    description: "Descripción de la página 7",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/29.jpg?updatedAt=1740580435513",
    ],
    title: "Título 23",
    description: "Descripción de la página 7",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/30.jpg?updatedAt=1740580435570",
    ],
    title: "Título 23",
    description: "Descripción de la página 7",
    onlyOnePage: true,
  },
];

const PhotoAlbumModal = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isCoverPage, setIsCoverPage] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1600 });
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const flipBook = useRef(null);
  const modalRef = useRef(null);
  const lastFlipPage = useRef(null);

  const playPageSound = () => {
    const audio = new Audio(pageSound);
    audio.volume = 1;
    audio.play();
  };
  const playFFXSound = () => {
    const audio = new Audio(ffxSound);
    audio.volume = 1;
    audio.play();
  };

  const handleClose = () => {
    setIsClosing(true);
    playFFXSound();
    setTimeout(onClose, 50);
  };

  const handleFlip = (e) => {
    if (lastFlipPage.current !== e.data) {
      playPageSound();
      lastFlipPage.current = e.data;
      setIsCoverPage(e.data === 0);
    }
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

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={`photo-album-background ${isClosing ? "closing" : ""}`}>
      <div className="navigation">
        <button className="close-button" onClick={handleClose}>
          X
        </button>
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
              <div
                key={index}
                className={`page ${page.isCover ? "cover-page" : ""}`}
              >
                {page.isCover ? (
                  <>
                    <div className="cover-content">
                      <h2 className="img-title-2">{page.title}</h2>
                      <p className="img-description">{page.description}</p>
                      <p className="img-description">By tu novio</p>
                    </div>
                  </>
                ) : (
                  <>
                    {page.src[0] && (
                      <button className="check-img" onClick={() => openImageModal(page.src[0])}>
                        <img
                          src={page.src[0]}
                          alt={`Page ${index + 1} - Img 1`}
                          className={`page-img${
                            page.onlyOnePage ? "-one" : ""
                          }`}
                        />
                      </button>
                    )}
                    {page.src[1] && (
                      <button className="check-img" onClick={() => openImageModal(page.src[1])}>
                        <img
                          src={page.src[1]}
                          alt={`Page ${index + 1} - Img 2`}
                          className="page-img"
                        />
                      </button>
                    )}
                    <h2 className="img-title">{page.title}</h2>
                    {/* <p className="img-description">{page.description}</p> */}
                  </>
                )}
              </div>
            ))}
          </PageFlip>
        </div>

        {isCoverPage && (
          <div className="fake-cover" onClick={skipToFirstPage}>
            <img src={pages[0].src} alt="Portada del álbum" />
            <div className="click-to-open">
              ALBUM DE FOTOS: Recorrido años atras.
            </div>
          </div>
        )}
      </div>

      {isImageModalOpen && (
        <div className="image-modal">
          <div className="image-modal-content">
            <span className="close" onClick={closeImageModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Imagen completa" className="modal-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoAlbumModal;
