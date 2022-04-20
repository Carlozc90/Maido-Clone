import Image from "next/image";

const Homecomp = () => {
  return (
    <section id="inicio" className="homecomp">
      <Image
        layout="fill"
        src={"/assets/img/bg-home.jpg"}
        alt="logo imagen"
        className="homecomp__img"
      />
      <div className="homecomp__container-text">
        <p className="homecomp__text">Bienvenido a nuetro mundo.</p>
      </div>
    </section>
  );
};

export default Homecomp;
