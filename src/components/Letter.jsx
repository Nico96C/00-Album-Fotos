import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import win98Sound from "../music/FFXOut.mp3";
import PhotoOne from "../img/img1.png";
import PhotoTwo from "../img/img2.png";
import PhotoThree from "../img/img3.png";
import PhotoFour from "../img/img4.png";
import PhotoFive from "../img/img5.png";
import PhotoSix from "../img/img6.png";
import "./Letter.css";

const Letter = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let interval;

    // Simula progreso en la barra de carga
    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 150);
  }, []);

  if (loading) {
    return (
      <div className="win95-loader">
        <div className="loader-titlebar">
          <span>Loading Progress</span>
          <button className="win95-close-btn">✕</button>
        </div>
        <div className="loader-body">
          <p>Loading {progress}%</p>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>
          <button className="win95-btn">Cancel</button>
        </div>
      </div>
    );
  }

  const handleClose = () => {
    const audio = new Audio(win98Sound);
    audio.play();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <Draggable handle=".win95-header">
      <div className="win95-window">
        <div className="win95-header">
          <span className="title">Carta 💌</span>
          <button className="win95-close" onClick={handleClose}>
            X{" "}
          </button>
        </div>

        <div className="win95-content">
          <h1> Rocio, mi amor... </h1>

          <div className="subcontainer-letter">
            <p className="text-letter">
              {" "}
              Parece como si el tiempo estando acá juntos fuera tan poco siendo
              ya años de compartir cosas, que vivimos las cosas con tanto gusto
              en el momento que cada segundo se disfruta con lentitud al mismo
              tiempo que parece un abrir y cerrar de ojos de lo que vivimos, la
              Sensación de compartir algo hasta lo más simple con vos se siente
              de todas las formas inimaginables{" "}
            </p>
            <img
              className="img-letter"
              src={PhotoOne}
              width={250}
              height={200}
            />
            <br />
          </div>

          <div className="subcontainer-letter">
            <img
              className="img-letter"
              src={PhotoTwo}
              width={200}
              height={250}
            />
            <p className="text-letter">
              {" "}
              Están siendo ya 4 años de vivir las cosas de una forma tan
              Especial, de pasar por estados de todo tipo... Vivir las cosas
              sobre todo! El poder ver como una persona puede llegar modificar
              Tantas cosas en uno mismo. Solo vos podés llegar a hasta lo más
              profundo de mi ser para entender como sacarme una sonrisa o
              hacerme sentir lo más valioso de este mundo, darme una importancia
              que siento inmerecida, pero que con el tiempo se ha sentido cada
              vez más propia y real el poder sentirme orgulloso o feliz por ser
              quien soy además que todo eso lo logre percibir, lo haga resaltar
              la mujer que amo{" "}
            </p>
            <br />
          </div>

          <div className="subcontainer-letter">
            <p className="text-letter">
              {" "}
              Cada año que ha pasado, fueron tantas cosas que llevar y mejorar,
              hemos tenido nuestros altibajos y mejores... Como peores momentos
              en los que debíamos afrontar situaciones que nos eran ¿injustas?
              agotadoras capaz, pero que por suerte a la par podíamos aprender,
              mejorar, sentirnos mejor con nosotros mismos! Hemos crecido mucho
              en este tiempo y creo que lo más agradable es poder compartir con
              alguien, que nos ama de esta forma, nos entiende, nos arropa, cree
              en nosotros para alcanzar lo que queramos y mil cosas que tenemos
              en conjunto entre ambos. Es todo un viaje y un reconocimiento a lo
              que es tener un vínculo con tu pajera{" "}
            </p>
            <img
              className="img-letter"
              src={PhotoThree}
              width={250}
              height={200}
            />
            <br />
          </div>

          <div className="subcontainer-letter">
            <img
              className="img-letter"
              src={PhotoFour}
              width={250}
              height={200}
            />
            <p className="text-letter">
              {" "}
              Obvio, siento que esto no son más que habladurías mías y
              pensamiento que van.. Vienen.. A mi cabeza, una palabra tras otra,
              que en el mero espacio web este, donde el código se agolpa no
              logra terminar de reflejar lo importante que has sido para mí, lo
              que generas en los demás y lo bien que hace tu presencia en esta
              Relación con un chico normal de Argentina. Hasta el pensar y
              revivir lo que ha sido un año como el anterior donde nos hemos
              visto por primera vez, hemos tocado, sentido y logrado vivir este
              amor... Sí, creo que puede quedar corto con haberlo vivido y
              pudiendo decirlo hasta con nuestros cuerpos{" "}
            </p>
            <br />
          </div>

          <div className="subcontainer-letter">
            <p className="text-letter">
              {" "}
              Pensarás ¿Este es del chico que me enamore? Pues puede ser, uno
              que solo va dejando caer como lo hacen los dedos en cada tecla
              estos pensamientos... Lo que me haces sentir, lo que vivo cada
              día, es algo inexpresable.. Capaz indescriptible con unas pocas
              palabras, hasta capaz necesitaría escribir esto cientos de veces
              para poder llegar a expresar todo lo que siento. Una forma donde
              pienso que hemos redefinido él termino de querer entre nosotros, y
              te digo... Es pensar en vos o el verte para que en un simple
              instante se genere una cascada de piropos y una inminente sonrisa
              en mi rostro{" "}
            </p>
            <img
              className="img-letter"
              src={PhotoFive}
              width={250}
              height={200}
            />
            <br />
          </div>

          <p className="text-letter">
            {" "}
            Es justo ya poder ir dejando la carta aquí, pero obvio... Lo último
            que quiero dejarte en claro, es lo muy orgulloso que estoy de decir
            con quien comparto mi dia diario desde hace ya 4 bonitos años, la
            persona que sos, lo que fuiste y seras amor, lo que has transitado
            tanto conmigo como sin mi. Lo que sos como Mujer, cada cosa que te
            propones a hacer, tu parte formativa, laboral, maternal, ese
            Ímpetu... Constancia y el no bajar los brazos aunque estés cansada.
            Aparte, contento por algo importante Rocío, estoy feliz de ser esa
            persona que quieres a tu lado y justamente yo de tener a quien amo y
            respeto esta junto a mi cada dia.{" "}
          </p>
          <img className="img-letter" src={PhotoSix} width={250} height={300} />
          <br />

          <p className="text-letter">
            {" "}
            Vamos por mas años juntos mi Vida, Angel bello 💗
          </p>
          <p className="text-letter">
            Tu novio, el pastelito que te endulza desde hace mas de 4 años, TE
            AMO 🥰
          </p>
        </div>
      </div>
    </Draggable>
  );
};

export default Letter;
