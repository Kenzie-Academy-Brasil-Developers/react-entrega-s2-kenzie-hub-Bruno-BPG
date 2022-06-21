import "./home.css";
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";

import { useHistory } from "react-router-dom";

import Api from "../api";

import { toast } from "react-toastify";




import GerarCards from "./cads";

function GerarHome(){
    const [techs, setTechs] = useState([]);
    const [dadosUser, setDadosUser] = useState([]);

    const params = useParams()
    
    const history = useHistory();
  
    const [checkLogado, setCheckLogado] = useState(false)

  
    useEffect(()=>{
      const token = localStorage.getItem('hubToken')
      if(token){
        setCheckLogado(true)
      }
      else{
        console.log(checkLogado)
        
        history.push(`/login`)
  
      }
    },[checkLogado,history]
  
    )
    

    useEffect(() => {
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
    }, [params]);


    const dadoAddNewTecnologia = {
      "title": "hghf",
      "status": "Iniciante"
    }

function addTecnologia (event){
  event.preventDefault()

  const tokenHub = localStorage.getItem("hubToken")



  // console.log(tokenHub)
  // console.log(Api())
  Api.post("/users/techs", dadoAddNewTecnologia, {
    headers: {"Content-Type": "application/json",
    Authorization: `Bearer ${tokenHub}`}
   
  })
  .then((response) => {
    toast.success("sucesso");
  })
  .catch((err) => toast.error("não foi criada"))
}






    return (
        <div>
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
          <span>{dadosUser.course_module}</span>
        </div>
      </div>

      <div className="superiorConteinerExterno">
        <div className="superiorConteiner">
          <span className="tecnologia">tecnologia</span>
          <button onClick={(event) => {

                addTecnologia(event)

            }} className="BtnNovaTecnologia">+</button>
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