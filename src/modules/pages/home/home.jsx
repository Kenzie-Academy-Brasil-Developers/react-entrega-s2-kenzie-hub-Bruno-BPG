import "./home.css";
import { useEffect, useState } from "react";

import GerarCards from "./cads";

function GerarHome(){
    const [techs, setTechs] = useState([]);
    const [dadosUser, setDadosUser] = useState([]);
  
    useEffect(() => {
      fetch(
        "https://kenziehub.herokuapp.com/users/eac4db53-9ebd-4849-bb6e-274968158563"
      )
        .then((response) => response.json())
        .then((response) => {
          setTechs(response.techs);
          setDadosUser(response);
          console.log(response);
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <div>
             <div className="headerExterno">
        <header>
          <span className="logo">Kenzie Hub</span>
          <button className="BtnSaida">saida</button>
        </header>
      </div>
      <div className="caixaDoNomeExterna">
        <div className="caixaDoNome">
          <span>Olá, {dadosUser.name}</span>
          <span>{dadosUser.course_module}</span>
        </div>
      </div>

      <div className="superiorConteinerExterno">
        <div className="superiorConteiner">
          <span>tecnologia</span>
          <button className="BtnNovaTecnologia">+</button>
        </div>
      </div>
      <div className="MainExterno">
        <main>
          <GerarCards dadosUsuario={techs}></GerarCards>
        </main>
      </div>
        </div>
    )
}

export default GerarHome