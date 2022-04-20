import { Link } from "react-scroll";
const Overlay = ({ overlayBton, setOverlayBton }) => {
  const handleBotton = () => {
    setOverlayBton(!overlayBton);
  };
  return (
    <div className="overlay ">
      <button
        onClick={handleBotton}
        type="botton"
        className="botton overlay__boton--X"
      >
        X
      </button>
      <div className="overlay__container">
        <Link to={"inicio"} spy={true} smooth={true} duration={500}>
          <button onClick={handleBotton} className="botton overlay__boton">
            inicio
          </button>
        </Link>
        <Link to={"exp"} spy={true} smooth={true} duration={500}>
          <button onClick={handleBotton} className="botton overlay__boton">
            Experiencia
          </button>
        </Link>
        <Link to={"about"} spy={true} smooth={true} duration={500}>
          <button onClick={handleBotton} className="botton overlay__boton">
            mitsuharu
          </button>
        </Link>
        <Link to={"footer"} spy={true} smooth={true} duration={500}>
          <button onClick={handleBotton} className="botton overlay__boton">
            contacto
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Overlay;
