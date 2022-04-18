import Image from "next/image";

import useDeviceSize from "../useHook";

const Header = () => {
  const [width, height] = useDeviceSize();

  return (
    <div className="header">
      <div className="header__img">
        <Image
          width={width > 768 ? 100 : 200}
          height={100}
          src={`${
            width > 768
              ? "/assets/img/logo-main.png"
              : "/assets/img/logo-sec.png"
          }`}
          alt="logo imagen"
        />
      </div>

      <nav className={`${width > 768 ? "header__nav" : "header__nav-md"}`}>
        <button type="button" className="botton header__boton">
          Reserva aquí
        </button>
        <button className="botton">EN</button>
        <button className="botton">ES</button>
        <button className="botton">
          {width < 768 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>
      </nav>
    </div>
  );
};

export default Header;
