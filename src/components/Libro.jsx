const Libro = () => {
  return (
    <div className="Libro">
      <h1 className="Libro__h1">Libro de Reclamaciones</h1>
      <form className="Libro__form">
        <input className="Libro__Input" placeholder="Nombre Completo*"></input>
        <input type="text" className="Libro__Input" placeholder="DNI"></input>
        <input
          type="text"
          className="Libro__Input"
          placeholder="Domicilio*"
        ></input>
        <input
          type="email"
          className="Libro__Input"
          placeholder="E-mail*"
        ></input>
        <input
          type="text"
          className="Libro__Input"
          placeholder="Teléfono*"
        ></input>
        <label>Producto o Servicio *</label>
        <div>
          <input type="radio" name="plan" value={"radio"} />
          Producto
          <input type="radio" name="plan" value={"radio"} />
          Servicio
        </div>
        <input
          type="text"
          className="Libro__Input"
          placeholder="Asunto*"
        ></input>
        <textarea
          rows="10"
          className="Libro__Input"
          placeholder="Detalle de la reclamación*"
        ></textarea>

        <button type="submit" className="Libro__boton">
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default Libro;
