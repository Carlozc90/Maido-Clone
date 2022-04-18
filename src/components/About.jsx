import Image from "next/image";
const About = () => {
  return (
    <section className="About">
      <div className="About__container">
        <div className="About__GridContainer">
          <p className="About__nombre">MITSUHARU</p>
          <p className="About__descripcion">
            Mitsuharu “Micha” Tsumura nació en Lima, pero su orígenes provienen
            de Osaka, Japón.
          </p>
          <p className="parrafo">
            Jefe de cocina y propietario de MAIDO. Estudió Artes Culinarias y
            Administración de Alimentos y Bebidas en Johnson & Wales University,
            Estados Unidos. Al graduarse viaja a Osaka- Japón, para
            especializarse en cocina japonesa, trabajó en restaurantes como
            ¨Seto Sushi¨: especializado en sushi e ¨Imo to Daikon¨ especializado
            en cocina estilo Izakaya (tapas japonesas). Regresó a Perú y trabajó
            en el Hotel Sheraton como jefe de partida, sous chef y asumió la
            Gerencia de Alimentos y Bebidas. Fue su pasión por la cocina peruana
            con técnicas e insumos japoneses, la gran cocina Nikkei que lo llevo
            a crear Maido (2009).
          </p>
          <Image
            width={60}
            height={60}
            src={"/assets/img/icon-Exp.svg"}
            alt="logo imagen"
          />
        </div>
        <Image
          src={"/assets/img/micha.jpg"}
          width={"1000"}
          height={"1000"}
          alt={"Img del premiado"}
        />
      </div>
    </section>
  );
};

export default About;
