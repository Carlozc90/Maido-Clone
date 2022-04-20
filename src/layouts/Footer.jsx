import Image from "next/image";
import { useRouter } from "next/router";
import * as Scroll from "react-scroll";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();

  const haldleRouter = () => {
    router.pathname !== "/" && router.push("/");
  };

  return (
    <section id="footer" className="Footer">
      <div className="Footer__Grid">
        <p className="Footer__logo">
          <Image
            width={150}
            height={150}
            src={"/assets/img/logo-black.png"}
            alt="logo imagen"
          />
        </p>
        <div className="Footer__Hora">
          <h3>HORARIO DE ATENCIÓN</h3>
          <h4>Lunes a Sabado</h4>
          <p>1:00 p.m. a 9:30 p.m.</p>
          <h4>Domingo</h4>
          <p>Cerrado</p>
          <button
            type="button"
            className="botton header__boton Footer__reserva"
          >
            Reserva aquí
          </button>
          <div className="Footer__Contenedor-nav">
            <nav className="Footer__nav">
              <Scroll.Link
                onClick={haldleRouter}
                to={"inicio"}
                spy={true}
                smooth={true}
                duration={500}
              >
                <p className="Footer_link">Inicio</p>
              </Scroll.Link>
              <Scroll.Link
                onClick={haldleRouter}
                to={"exp"}
                spy={true}
                smooth={true}
                duration={500}
              >
                <p className="Footer_link">Experiencias</p>
              </Scroll.Link>
              <Scroll.Link
                onClick={haldleRouter}
                to={"about"}
                spy={true}
                smooth={true}
                duration={500}
              >
                <p className="Footer_link">Mitsuharu</p>
              </Scroll.Link>
              <Scroll.Link
                onClick={haldleRouter}
                to={"contacto"}
                spy={true}
                smooth={true}
                duration={500}
              >
                <p className="Footer_link">Contacto</p>
              </Scroll.Link>

              <Link passHref href={"/libro-reclamaciones"}>
                <p className="Footer_link">Libro de Reclamaciones</p>
              </Link>

              <Link passHref href={"/politica-de-privacidad"}>
                <p className="Footer_link">Politica de Privacidad</p>
              </Link>
            </nav>
            <Image
              width={60}
              height={60}
              src={"/assets/img/icon-Exp.svg"}
              alt="logo imagen"
            />
          </div>
        </div>
        <div className="Footer__Contacto">
          <h3>CONTACTO</h3>
          <h4>Telefono</h4>
          <p>+00 (00) 000-0000</p>
          <h4>Email</h4>
          <p>correo@correo.com</p>
          <h4>Ubicacion</h4>
          <p>Calle San Martín 399</p>
          <p>(Esquina con Calle Colón)</p>
          <p>Miraflores - Lima, Perú</p>

          <Link href={"https://g.page/mitsuharu_maido"}>
            <a target="_blank">
              <h5>Ver en Google Maps</h5>
            </a>
          </Link>

          <div>
            <button className="botton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-facebook"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#597e8d"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </button>
            <button className="botton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#597e8d"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
