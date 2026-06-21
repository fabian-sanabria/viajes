import data from "./data";
import Destino from "../paginas/Destino";

const CrearListado = ({ zona }) => {
  const listado = data.filter((destino) => destino.zona === zona);
  console.log(listado);
  const contraseña = "1234";

  return (
    <div>
      <section className="lista">
        {listado.map((dato) => (
          <Destino key={dato.nombre} {...dato}></Destino>
        ))}
      </section>
    </div>
  );
};

export default CrearListado;
