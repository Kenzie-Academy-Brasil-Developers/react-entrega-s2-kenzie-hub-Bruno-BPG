// import Api from "../api";
// import { toast } from "react-toastify";
import { useState } from "react";


import AddTecnologia from "./addTecnologia";

function Modal ({setModal, gerrarTech }){

    const [titulo, setTitulo] = useState("")
    const [status, setStatus] = useState("Iniciante")

    return <div className="modal">
        <div className="parteSuperiorModal">
            <span className="tituloModal">Cadastrar Tecnologia</span> 
            <button className="btnModal" onClick={()=>{setModal(false)}}>X</button>
        </div>
        <div className="corpoModal">
            <span className="indentificadorModal">Nome</span>
            <input onChange={(event) => setTitulo(event.target.value)} className="inputNameModal"></input>
            <br></br>
            <span className="indentificadorModal">Selecionar status</span>
            <select onChange={(event) => setStatus(event.target.value)} className="inputNameModal">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
            </select>
            <button onClick={()=>{AddTecnologia(titulo, status, gerrarTech)}} className="BtnCadastrarModal">Cadastrar Tecnologia</button>
        </div>
    </div>
}

export default Modal