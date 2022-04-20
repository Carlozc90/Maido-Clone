import Image from "next/image";

const Exp = () => {
  return (
    <section id="exp" className="Exp">
      <Image
        layout="fill"
        src={"/assets/img/bg-experiencia.jpg"}
        alt="logo imagen"
        className="Exp_img"
      />
      <div className="Exp__contenedor">
        <p className="Exp__titulo">la experiencia</p>
        <Image
          width={60}
          height={60}
          src={"/assets/img/icon-Exp.svg"}
          alt="logo imagen"
        />
        <p className="Exp__parrafo">
          La vida es movimiento. Nada es estático ni absoluto. Nadie lo es.
          Estamos en flujo constante, como lo están la Tierra, las mareas, las
          bacterias, la luz, la sangre de nuestros cuerpos, el color y la
          semilla. Las cocinas, como los árboles genealógicos, se ven
          constantemente redefinidas, enriquecidas sus identidades en una
          intensa interculturalidad que es la base de la historia de toda
          civilización, desde que los hombres intercambiaron los primeros
          sonidos, productos, ideas, costumbres.
        </p>
        <button className="botton Exp__titulo">
          conoce nuetra experiencias
        </button>
      </div>
    </section>
  );
};

export default Exp;
