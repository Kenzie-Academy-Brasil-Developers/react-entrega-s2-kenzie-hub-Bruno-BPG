// import Api from "../api";
// import { toast } from "react-toastify";
import { useState } from "react";

import BtnEditar from "./editarTech";

import BtnDeletar from "./btnDelete";
// import AddTecnologia from "./addTecnologia";

function ModalDeleteAndEdithTech ({setModal , produto, gerrarTech}){

    // console.log(produto)

    const [status, setStatus] = useState("Iniciante")

    console.log(status)
    return <div className="modal">
        <div className="parteSuperiorModal">
            <span className="tituloModal">Cadastrar Tecnologia</span> 
            <button className="btnModal" onClick={()=>{setModal(false)}}>X</button>
        </div>
        <div className="corpoModal">
            <span className="indentificadorModal">Nome</span>
            <input className="inputNameModal"></input>
            <br></br>
            <span className="indentificadorModal">Selecionar status</span>
            <select onChange={(event) => setStatus(event.target.value)} className="inputNameModal">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
            </select>
            <div className="divBtnsDelete-editar">
            <BtnEditar status={status} gerrarTech={gerrarTech} produto={produto}></BtnEditar>
            <BtnDeletar gerrarTech={gerrarTech} produto={produto}> </BtnDeletar>
            </div>

        </div>
    </div>
}

export default ModalDeleteAndEdithTech