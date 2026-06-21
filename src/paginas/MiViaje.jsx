import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import types from "../types";
import { type } from "@testing-library/user-event/dist/type";
import { Link } from "react-router-dom";

const MiViaje = () => {
  const { contratacion, dispacth2, referencia, totalApagar, setTotalApagar } =
    useContext(Contexto);
  return (
    <>
      <section className="seccion-viaje">
        <h2>Lugares a visitarr</h2>
        {contratacion.length < 1 && (
          <div className="aviso">
            Todavia no has contratado ninguna actividad.<br></br>
            Haz click en <Link to={"/cp"}>Capital y patagonia</Link> o{" "}
            <Link to={"/no"}>Norte o este</Link> para ver nuestras ofertas
          </div>
        )}

        {contratacion.map((mapa) => (
          <div key={mapa.sitio}>
            <button
              className="boton anular-viaje"
              onClick={() => {
                setTotalApagar(totalApagar - mapa.precio);
                dispacth2({
                  type: types.anular,
                  payload: { nombre: mapa.sitio },
                });
              }}
            >
              Anular
            </button>
            {mapa.sitio} {mapa.precio}$
          </div>
        ))}
        <h3>Total a pagar: {totalApagar} $</h3>
        <h3>Referencia: {referencia}</h3>
      </section>
    </>
  );
};

export default MiViaje;
