/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "./PhotoAlbumModal.css";
import pageSound from "../music/page.wav";
import PageFlip from "react-pageflip";
import ffxSound from "../music/FFXOut.mp3";

const pages = [
  {
    src: "https://ik.imagekit.io/m3g4ID/cover2.jpg?updatedAt=1739281224346",
    title:
      " '..Las fotos nos permiten revivir cosas pasadas y atesorar los momentos, logrando volver sobre nuestros pasos..' ",
    description:
      `Este álbum de fotos representa en cada imagen es una ventana mi pasado, dejandonos recapitular y pudiendo ver lo que he sido años atras. Haz clic para abrir y déjate llevar a conocer, ver desde tu propia vista con quien estas a dia de hoy `,
    isCover: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/2.jpg?updatedAt=1740580431165",
    ],
    title: " ' Me presento, soy Nico de unos 4 años..' ",
    description: "Descripción de la página 1",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/14.jpg?updatedAt=1740580432956",
      "https://ik.imagekit.io/m3g4ID/Photos-Album/41.jpg?updatedAt=1740580438058",
    ],
    title: " ' Esto fue donde estaba teniendo mi primer año y bautizo ' ",
    description: "Descripción de la página 2",
    onlyOnePage: false,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/1.jpg?updatedAt=1740580431206",
      "https://ik.imagekit.io/m3g4ID/Photos-Album/16.jpg?updatedAt=1740580433008",
    ],
    title: " ' Mis ropajes predilectos y lo que pasaba al tener bañera ' ",
    description: "Descripción de la página 3",
    onlyOnePage: false,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/35.jpg?updatedAt=1740580437067",
      "https://ik.imagekit.io/m3g4ID/Photos-Album/4.jpg?updatedAt=1740580431193",
    ],
    title: " 'En la casa antigua de mis abuelos, hasta tenia un caballito' ",
    description: "Descripción de la página 4",
    onlyOnePage: false,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/40.jpg?updatedAt=1740580438004",
    ],
    title: " ' Una de mis primeras vacaciones, Mar del Plata con frio ' ",
    description: "Descripción de la página 5",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/8.jpg?updatedAt=1740580431235",
      "https://ik.imagekit.io/m3g4ID/Photos-Album/6.jpg?updatedAt=1740580431277",
    ],
    title: " ' Lo que era la casa cuando estabamos recien llegados ' ",
    description: "Descripción de la página 6",
    onlyOnePage: false,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/38.jpg?updatedAt=1740580438797",
      "https://ik.imagekit.io/m3g4ID/Photos-Album/39.jpg?updatedAt=1740580438049",
    ],
    title: " ' Esta vez vacaciones, En San Nicolás ' ",
    description: "Descripción de la página 7",
    onlyOnePage: false,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/27.jpg?updatedAt=1740580435508",
    ],
    title: " ' Solo siendo un boludito en la casa de mi abuela ' ",
    description: "Descripción de la página 7",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/7.jpg?updatedAt=1740580431250",
      "https://ik.imagekit.io/m3g4ID/Photos-Album/5.jpg?updatedAt=1740580431268",
    ],
    title: " ' Foto michi, con Pamela primer mascota ' ",
    description: "Descripción de la página 1",
    onlyOnePage: false,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/34.jpg?updatedAt=1740580436850",
    ],
    title: " ' Mas mascotas, Felix y Luna siendo amigos '",
    description: "Descripción de la página 2",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/36.jpg?updatedAt=1740580437997",
      "https://ik.imagekit.io/m3g4ID/Photos-Album/37.jpg?updatedAt=1740580438167",
    ],
    title: " 'En la Playa, teniendo miedo del agua y en los arcades' ",
    description: "Descripción de la página 3",
    onlyOnePage: false,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/24.jpg?updatedAt=1740580435407",
      "https://ik.imagekit.io/m3g4ID/Photos-Album/18.jpg?updatedAt=1740580433455",
    ],
    title: " 'Siempre igual en mi casa... ",
    description: "Descripción de la página 4",
    onlyOnePage: false,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/13.jpg?updatedAt=1740580433011",
    ],
    title: " Y tambien momento cole de bailar chacarera! ' ",
    description: "Descripción de la página 5",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/17.jpg?updatedAt=1740580433469",
    ],
    title: " ' Momento disfraces, cuando era pequeño...' ",
    description: "Descripción de la página 6",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/26.jpg?updatedAt=1740580435565",
    ],
    title: " ' Me toco hasta estando en casa '",
    description: "Descripción de la página 7",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/25.jpg?updatedAt=1740580435517",
    ],
    title: " ' Mismo traje, pero queda un poco chico para mi edad ' ",
    description: "Descripción de la página 1",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/33.jpg?updatedAt=1740580436608",
    ],
    title: " 'Seguimos haciendo cosas en el cole, esta vez de extra ' ",
    description: "Descripción de la página 1",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/23.jpg?updatedAt=1740580435599",
    ],
    title: " 'Mas fotos de mascostas, Michi panzon ' ",
    description: "Descripción de la página 2",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/32.jpg?updatedAt=1740580435555",
      "https://ik.imagekit.io/m3g4ID/Photos-Album/9.jpg?updatedAt=1740580431041",
    ],
    title: " ' Michi en caja, y Loba! Esta vez de mi tia ' ",
    description: "Descripción de la página 3",
    onlyOnePage: false,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/19.jpg?updatedAt=1740580433376",
    ],
    title: " ' Bien presentado, para tomar mi comunión ' ",
    description: "Descripción de la página 4",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/42.jpg?updatedAt=1740580438198",
    ],
    title: " 'No le vayas a contar a Ruben 🤣' ",
    description: "Descripción de la página 5",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/20.jpg?updatedAt=1740580433535",
    ],
    title: " ' Aun asi.. No soltaba el vicio con mi amigo ' ",
    description: "Descripción de la página 6",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/21.jpg?updatedAt=1740580433184",
      "https://ik.imagekit.io/m3g4ID/Photos-Album/28.jpg?updatedAt=1740580435585",
    ],
    title: " ' Ya de mas grande, con mi abuela y a los 18 años ' ",
    description: "Descripción de la página 7",
    onlyOnePage: false,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/29.jpg?updatedAt=1740580435513",
    ],
    title: " ' Con mis padres en la fiesta del ultimo año ' ",
    description: "Descripción de la página 7",
    onlyOnePage: true,
  },
  {
    src: [
      "https://ik.imagekit.io/m3g4ID/Photos-Album/30.jpg?updatedAt=1740580435570",
    ],
    title: " ' Y bueno, yo estando recibido! ' ",
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
                      <p className="img-description">De parte de tu novio</p>
                    </div>
                  </>
                ) : (
                  <>
                    {page.src[0] && (
                      <button
                        className={`check-img${page.onlyOnePage ? "-one" : ""}`}
                        onClick={() => openImageModal(page.src[0])}
                        style={{ backgroundColor: "#f5ebe8" }}
                      >
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
                      <button
                        className="check-img"
                        onClick={() => openImageModal(page.src[1])}
                        style={{ backgroundColor: "#f5ebe8" }}
                      >
                        <img
                          src={page.src[1]}
                          alt={`Page ${index + 1} - Img 2`}
                          className="page-img"
                        />
                      </button>
                    )}
                    <h2 className="img-title">{page.title}</h2>
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
            <img
              src={selectedImage}
              alt="Imagen completa"
              className="modal-img"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoAlbumModal;
