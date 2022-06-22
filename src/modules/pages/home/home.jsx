import "./home.css";
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";

import { useHistory } from "react-router-dom";

import "./mobileFistHome.css"

// import Api from "../api";

// import { toast } from "react-toastify";

import Modal from "./modalAddTech";
import CheckLogin from "./checkToken";



import GerarCards from "./cads";

function GerarHome(){

  const [modal, setModal] = useState(false)

    const [techs, setTechs] = useState([]);
    const [dadosUser, setDadosUser] = useState([]);

    const params = useParams()
    const history = useHistory();
  
    CheckLogin()

    function gerrarTech(){
      fetch(
        `https://kenziehub.herokuapp.com/users/${params.id}`
      )
        .then((response) => response.json())
        .then((response) => {
          setTechs(response.techs);
          setDadosUser(response);
          // console.log(response);
        })
        .catch((err) => console.log(err));
    }
    

    useEffect(() => {
      gerrarTech()
    }, [params]);


    return (
        <div>

          {modal && <Modal gerrarTech={gerrarTech} setModal = {setModal}></Modal> }
             <div className="headerExterno">
        <header>
          <span className="logo">Kenzie Hub</span>
          <button onClick={(event) => {
              localStorage.clear();
              history.push("/login")
            }} className="BtnSaida">saida</button>
        </header>
      </div>
      <div className="caixaDoNomeExterna">
        <div className="caixaDoNome">
          <span>Olá, {dadosUser.name}</span>
          <span className="module">{dadosUser.course_module}</span>
        </div>
      </div>

      <div className="superiorConteinerExterno">
        <div className="superiorConteiner">
          <span className="tecnologia">tecnologia</span>
          <button onClick={(event) => {
            setModal(true)


            }} className="BtnNovaTecnologia">+</button>
        </div>
      </div>
      <div className="MainExterno">
        <main>
          <GerarCards gerrarTech={gerrarTech} dadosUsuario={techs}></GerarCards>
        </main>
      </div>
        </div>
    )
}

export default GerarHome