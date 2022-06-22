import Api from "../api";
import { toast } from "react-toastify";

// import CheckLogin from "./checkToken";
// import { useHistory } from "react-router-dom";



function AddTecnologia (titulo, status, funcaoAtualizarTechs){

    const dadoAddNewTecnologia = {
        "title": titulo,
        "status": status
      }
    
    const tokenHub = localStorage.getItem("hubToken")
  
    Api.post("/users/techs", dadoAddNewTecnologia, {
      headers: {"Content-Type": "application/json",
      Authorization: `Bearer ${tokenHub}`}
     
    })
    .then((response) => {
      toast.success("sucesso");
      funcaoAtualizarTechs()
      // CheckLogin()
      
    })
    .catch((err) => toast.error("não foi criada"))
  }

  export default AddTecnologia