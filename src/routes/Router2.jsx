import { Routes, Route, Navigate } from "react-router-dom";
import CP from "../paginas/CP";
import NO from "../paginas/NO";
import NavBar from "../navBar/NavBar";
import Comprar from "../paginas/Comprar";
import MiViaje from "../paginas/MiViaje";

const Router2 = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="cp" element={<CP></CP>}></Route>
        <Route path="no" element={<NO></NO>}></Route>
        <Route path="viaje" element={<MiViaje></MiViaje>}></Route>
        <Route path="destino/:nombre" element={<Comprar></Comprar>}></Route>
        <Route path="/" element={<Navigate to="cp"></Navigate>}></Route>
      </Routes>
    </>
  );
};

export default Router2;
