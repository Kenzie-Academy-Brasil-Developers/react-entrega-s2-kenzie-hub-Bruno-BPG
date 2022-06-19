// import PegarDadosUser from './dadosUser';
// import { useEffect, useState } from "react";

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


return dadosUsuario.map((produto, index) => (
    <div className="card" key={index}>
        <span>
        {produto.title} 
        </span>
        <span>
        {produto.status}
        </span>
    </div>
))

}


export default GerarCards
//   itens.map((produto) => 