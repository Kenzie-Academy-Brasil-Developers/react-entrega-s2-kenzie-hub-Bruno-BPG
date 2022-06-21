// import PegarDadosUser from './dadosUser';
// import { useEffect, useState } from "react";

import Api from "../api";
import { toast } from "react-toastify";


function GerarCards ({dadosUsuario}) {

// const dado = [{
//     id: "868de7c0-a891-48a2-a659-b16c5555c8f3",
//     title: "React",
//     status: "Iniciante",
// },{
//     id: "868de7c0-a891-48a2-a659-b16c5555c8f3",
//     title: "React",
//     status: "Iniciante",
// },{
//     id: "868de7c0-a891-48a2-a659-b16c5555c8f3",
//     title: "React",
//     status: "Iniciante",
// },{
//     id: "868de7c0-a891-48a2-a659-b16c5555c8f3",
//     title: "React",
//     status: "Iniciante",
// },{
//     id: "868de7c0-a891-48a2-a659-b16c5555c8f3",
//     title: "React",
//     status: "Iniciante",
// }]

// const dados = dadosUsuario.techs
// console.log(dados)
// console.log(dadosUsuario)
const tokenHub = localStorage.getItem("hubToken")


return dadosUsuario.map((produto, index) => (
    <div className="card" key={index}>
        <span>
        {produto.title} 
        </span>
        <span>
        {produto.status}
        <span onClick={()=>{console.log(produto.id)
        Api.delete(`/users/techs/${produto.id}`,{
            headers: {Authorization: `Bearer ${tokenHub}`}
           
          })
          .then((response) => {
            toast.success("sucesso");
          })
          .catch((err) => toast.error("não"))
        
        
        }} className="btnDeletar">
            &#128465;
            </span>
        </span>
    </div>
))

}


export default GerarCards
//   itens.map((produto) => 