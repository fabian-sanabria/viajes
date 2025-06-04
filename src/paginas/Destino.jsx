import { useContext } from "react";
import { Link } from "react-router-dom";
import Contexto from "../contexto/Contexto";

const Destino = ({nombre,imagen,situacion}) => {
const {contratacion}=useContext(Contexto);
const encontrado=contratacion.find(dato=>dato.sitio===nombre);
  const ruta=`/images/${imagen}`;
  return (
    <>

    <div className="destino">
      <div className="nombre">{nombre}</div>
      <div className="situacion">{situacion}</div>
      <img src={ruta} alt=""></img>
      <div className="flex">
      <Link to={`/destino/${nombre}`}>Mas info</Link>
      {(encontrado) && <div className="circulo"></div>}
      </div>
      </div>
    </>
  )
}

export default Destino
