import { useReducer, useState } from "react";
import Contexto from "./Contexto";
import types from "../types";
import miReducer from "../miReducer";
import miReducer2 from "../miReducer2";

const init=()=>{

  const user=localStorage.getItem("valor")
  return {

    logeado:!!user,
    usuario:user
  }
  
}

const valorInicial=[]

const Provider = ({ children }) => {
 
  const [autentificacion,dispatch]=useReducer(miReducer,{},init)
  const [contratacion,dispacth2]=useReducer(miReducer2,valorInicial)
  const [referencia,setReferencia]=useState("")
  const [totalApagar,setTotalApagar]=useState(0)

  const logearse=(user)=>{

    
    const action={
      type:types.login,
      payload:user
    }
    localStorage.setItem("valor",user)
    dispatch(action)
  }

  const deslogearse=()=>{
    const action={
      type:types.logout,
      payload:null
    }
    localStorage.removeItem("valor")
    dispatch(action)
  }
 console.log(autentificacion)
  return (<Contexto.Provider value={{contratacion,dispacth2,...autentificacion,logearse,deslogearse,referencia,setReferencia,totalApagar,setTotalApagar}}>{children}</Contexto.Provider>)
  
};

export default Provider;
