import Image from "next/image";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import useDeviceSize from "../hooks/useMediaK";
import useScrolls from "../hooks/useScroll";

const Header = ({ setOverlayBton, overlayBton }) => {
  const router = useRouter();
  const [width, height] = useDeviceSize();
  const [scrollY] = useScrolls();

  const [scrool, setScrool] = useState();

  useEffect(() => {
    setScrool(scrollY);
  }, [scrollY]);

  const hanleInicio = () => {
    if (router.pathname !== "/") router.push("/");
  };

  const handleSansh = () => {
    setOverlayBton(!overlayBton);
  };

  return (
    <div className="header">
      <Link
        onClick={hanleInicio}
        to={"inicio"}
        spy={true}
        smooth={true}
        offset={-40}
        duration={500}
      >
        <div className="header__img">
          <Image
            width={router.pathname !== "/" ? 100 : 250}
            height={100}
            src={`${
              router.pathname !== "/"
                ? "/assets/img/logo-black.png"
                : "/assets/img/logo-sec.png"
            }`}
            alt="logo imagen"
          />
        </div>
      </Link>

      <nav className={`${width > 768 ? "header__nav" : "header__nav-md"}`}>
        <button
          type="button"
          className={`${
            scrollY > 200 || router.pathname !== "/"
              ? "header__boton-color"
              : ""
          } botton header__boton`}
        >
          Reserva aquí
        </button>
        <button
          className={`botton ${
            scrollY > 200 || router.pathname !== "/" ? "header__boton-leng" : ""
          }`}
        >
          EN
        </button>
        <button
          className={`botton ${
            scrollY > 200 || router.pathname !== "/" ? "header__boton-leng" : ""
          }`}
        >
          ES
        </button>
        <button className="botton" type="button" onClick={handleSansh}>
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
              stroke={`${
                scrollY > 200 || router.pathname !== "/" ? "#000000" : "#ffffff"
              }`}
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
