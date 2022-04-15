import Image from "next/image";

const Header = () => {
  return (
    <div className="header">
      <div className="header__img">
        <Image
          width={100}
          height={100}
          src={"/assets/img/main-logo.png"}
          alt="logo imagen"
        />
      </div>

      <nav className="header__nav">
        <button type="button" className="botton header__boton">
          Reserva aquí
        </button>
        <button className="botton">EN</button>
        <button className="botton">ES</button>
        <button className="botton">MENU</button>
      </nav>
    </div>
  );
};

export default Header;
