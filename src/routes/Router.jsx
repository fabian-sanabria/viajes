import { Routes,Route, Navigate } from "react-router-dom"
import Login from "../paginas/Login"
import Router2 from "./Router2"
import NavBar from "../navBar/NavBar"
import RutasPrivadas from "./RutasPrivadas"
import RutasPublicas from "./RutasPublicas"


const Router = () => {
  return (
    <>
    
      <Routes>
        <Route path="login" element={<RutasPublicas><Login></Login></RutasPublicas>}></Route>
        <Route path="/*" element={<RutasPrivadas><Router2></Router2></RutasPrivadas>}></Route>
      </Routes>
    </>
  )
}

export default Router
