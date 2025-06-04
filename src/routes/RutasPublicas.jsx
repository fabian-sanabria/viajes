import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import { Navigate } from "react-router-dom";

const RutasPublicas = ({ children }) => {
  const { logeado } = useContext(Contexto);
  return logeado ? <Navigate to="/"></Navigate> : children;
};

export default RutasPublicas;
