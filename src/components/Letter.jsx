import "./Letter.css";

const Letter = () => {
  return (
    <div className="letter-scroll-container romantic-fade">
      <div className="letter">
        <h1>Componente Carta</h1>
        <p>
          Este es el contenido especial detrás del acceso secreto ❤️
          <br />
          <br />
          Puedes escribir aquí todo lo que quieras, incluso si el texto es muy
          largo, el contenedor hará scroll sin romper el diseño.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sit amet eros eu purus luctus tincidunt. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sit amet eros eu purus luctus tincidunt. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sit amet eros eu purus luctus tincidunt. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          <br />
          <br />
          (Agrega más contenido si querés probar el scroll)
        </p>
      </div>
    </div>
  );
};

export default Letter;
