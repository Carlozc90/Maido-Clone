import Image from "next/image";

const Premios = () => {
  return (
    <section className="Premio">
      <div className="Premio__container">
        <Image
          src={"/assets/img/premios.jpg"}
          width={"1000"}
          height={"1000"}
          alt={"Img del premiado"}
        />
        <div className="parrafo Premio__GridContainer">
          <Image
            src={"/assets/img/premios-awards.png"}
            width={170 / 1}
            height={100 / 1.3}
            alt={"Img awards"}
          />
          <p>
            En el fogón se conjuran las sangres. En el fogón cantan los pueblos.
            En el fogón se funden las historias individuales y colectivas. En el
            fogón se gesta la vida, se cohesionan los elementos. En el fogón se
            promueve el diálogo, se confrontan los elementos, se atraen los
            opuestos. Así nació la cocina Nikkei, de una compleja historia
            conocida como Perú y de otra de igual proporción, lejana y ajena,
            llamada Japón que se juntaron para vivir armoniosamente y crear una
            tercera realidad: La Cocina Nikkei.
          </p>
          <p className="bold">Bienvenido a nuestro mundo.</p>
          <div className="Premio__experiencia">
            <p>
              EXPERIENCIA NIKKEI <span className="Premio__span">S/499.00</span>{" "}
              por persona
            </p>
            <p>
              CON MARIDAJE <span className="Premio__span">S/844.00</span> por
              persona
            </p>
            <p>
              EXPERIENCIA VEGGIE <span className="Premio__span">S/350.00</span>{" "}
              por persona
            </p>
          </div>
          <div className="flex">
            <div>
              <p>
                De acuerdo a disponibilidad de lunes a sábado de 1:00 p.m. a
                9:00 p.m.
              </p>
              <p>*Precios incluyen impuesto y servicio.</p>
            </div>
            <Image
              width={90}
              height={90}
              src={"/assets/img/icon-Exp.svg"}
              alt="logo imagen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premios;
