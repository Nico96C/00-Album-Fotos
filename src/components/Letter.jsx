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
              Parece como si el tiempo fuera a detenerse al estar con vos pero
              tambien a la vez es acelerado, que vivimos las cosas con tanto
              gusto en el momento que cada segundo se disfruta al mismo tiempo
              que parece un abrir y cerrar de ojos de todo eso, la sensacion de
              compartir algo hasta lo mas simple con vos se siente de todas las
              formas posibles{" "}
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
              Estan siendo ya 4 años de vivir las cosas de una forma tan feroz,
              de pasar por estados de todo tipo... Vivir las cosas sobretodo! El
              poder ver como alguien, solo vos podes llegar a hasta lo mas
              profundo de mi ser para entender como sacarme una sonrisa o
              hacerme sentir especial, darme una importancia que siento
              inmerecida pero que con el tiempo se ha sentido cada vez mas
              propia el poder sentirme orgulloso o feliz por ser quien soy y que
              todo eso lo veo la mujer que amo{" "}
            </p>
            <br />
          </div>

          <div className="subcontainer-letter">
            <p className="text-letter">
              {" "}
              Cada año que ha pasado, fueron tantas cosas que llevar y mejorar,
              hemos tenido nuestros altibajos y mejores... Como peores momentos
              en los que debiamos afrontar situaciones que nos eran ¿injustas?
              agotadoras capaz, pero que por suerte a la par podiamos aprender,
              mejorar, sentirnos mejor con nosotros mismos! hemos crecido mucho
              en este tiempo y creo que lo mas agradable es poder compartir con
              alguien, que nos ama de esta forma, nos entiende, nos arropa, cree
              en nosotros para alcanzar lo que queramos y mil cosas que tenemos
              en conjunto entre ambos.. Es todo un viaje y un reconocimiento a
              lo que es tener un vinculo con tu pajera{" "}
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
              Obvio, siento que esto no son mas que habladurias mias y
              pensamiento que van.. vienen.. A mi cabeza, una palabra tras otra,
              que en el mero espacio web este, donde el codigo se agolpa no
              logra terminar de reflejar lo importante que has sido para mi, lo
              que generas en los demas y lo bien que hace tu presencia en esta
              relacion con un chico normal de Argentina. Hasta el pensar y
              revivir lo que ha sido un año como el anterior donde nos hemos
              visto por primera vez, hemos tocado, sentido y logrado vivir este
              amor... Si, creo que puede quedar corto con haberlo vivido y
              pudiendo decirlo hasta con nuestros cuerpos{" "}
            </p>
            <br />
          </div>

          <div className="subcontainer-letter">
            <p className="text-letter">
              {" "}
              Pensaras ¿Este es del chico que me enamore? Pues puede ser, uno
              que solo va dejando caer como lo hacen los dedos en cada tecla
              estos pensamiento... Lo que me haces sentir, lo que vivo cada dia,
              es algo inexpresable.. Capaz indescriptible con unas pocas
              palabras, hasta capaz necesitaria una pequeña novela para llegar a
              explicar todo esto. Una forma donde siento que hemos redefinido el
              termino de amar entre nosotros y todo aquello que lo rodea, y te
              digo... Es pensar en vos o el verte para que en un simple instante
              se genere una cascada de piropos y una inminente sonrisa en mi
              rostro{" "}
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
              Es justo ya poder ir dejando la carta aqui, pero obvio... Lo
              ultimo que quiero dejarte en claro, es lo muy orgulloso que estoy
              de decir que sos mi Novia luego de 4 años, la persona que has
              querido ser, volver a ser vos pero con una lucha constante contra
              tantas cosas pero que se ve que vas avanzando. Lo que sos como
              Mujer, cada cosas que te propones a hacer, tu parte formativa,
              laboral, maternal, ese impetud... Constancia y el no bajar los
              brazos aunque estes cansada. Aparte, por sobre todas las cosas
              Rocio, estoy feliz de que seas quien queres ser y justamente es a
              esa persona a quien amo y respecto.{" "}
            </p>
            <img
              className="img-letter"
              src={PhotoSix}
              width={250}
              height={300}
            />
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
