import { Navigate, useNavigate, useParams } from "react-router-dom";
import data from "../datos/data";
import types from "../types";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";

const Comprar = () => {
  const { nombre } = useParams();

  const valorEncontrado = data.find((dato) => dato.nombre === nombre);

  const navegacion = useNavigate();
  const volver = () => {
    navegacion(-1);
  };
const {dispacth2,contratacion,setTotalApagar,totalApagar}=useContext(Contexto);
  const contratar = () => {

    setTotalApagar(totalApagar + valorEncontrado.precio)
    const action = {
      type: types.contratar,
      payload: { nombre: nombre, precio: valorEncontrado.precio },
    };

    dispacth2(action);
  };

  const anular = () => {

    setTotalApagar(totalApagar-valorEncontrado.precio)
const action={
  type:types.anular,
  payload:{nombre:nombre}
}
dispacth2(action);

  };

  if (!valorEncontrado) {
    return <Navigate to="/no"></Navigate>;
  }

  const imagen = `/images/${valorEncontrado.imagen}`;
  const encontrado=contratacion.find(valor=>valor.sitio===nombre)

  return (
    <>
      <h1 className="nombreEncontrado">{valorEncontrado.nombre}</h1>
      <div>
        <div className="servicios">{valorEncontrado.servicio}</div>
      </div>

      <div className="imagenGrande">
        <div className="precio">{valorEncontrado.precio}$</div>
        <img src={imagen} alt="" />
       {(!encontrado) && <button className="contratar" onClick={contratar}>
          Contratar
        </button>} 

        {(encontrado) && <button className="anular" onClick={anular}>
          Anular
        </button>}
        

        <button onClick={volver} className="volver">
          Volver
        </button>
      </div>
    </>
  );
};

export default Comprar;
