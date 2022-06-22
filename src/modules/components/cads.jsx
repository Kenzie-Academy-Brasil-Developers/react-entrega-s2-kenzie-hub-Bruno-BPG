// import BtnDeletar from "./btnDelete";
import { useState } from "react";

import ModalDeleteAndEdithTech from "./modalEditEdelete";


function GerarCards ({dadosUsuario,gerrarTech}) {

  const [modal, setModal] = useState(false)
  const [produto, setProduto] = useState("")


return <div>
    {modal && <ModalDeleteAndEdithTech gerrarTech={gerrarTech} produto= {produto} setModal = {setModal}></ModalDeleteAndEdithTech> }

{dadosUsuario.map((produto, index) => (
    <div onClick={()=>{setModal(true) 
        setProduto(produto.id)
    }} className="card" key={index}>


        <span>
        {produto.title} 
        </span>
        <span>
        {produto.status}
        {/* <BtnDeletar produto={produto}> </BtnDeletar> */}
        </span>
    </div>
))
}
</div>


}

export default GerarCards