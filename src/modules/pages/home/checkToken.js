import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

function CheckLogin(){

    const [checkLogado, setCheckLogado] = useState(false)

    const history = useHistory();

    useEffect(()=>{
        const token = localStorage.getItem('hubToken')
        if(token){
          setCheckLogado(true)
        }
        else{
          console.log(checkLogado)
          
          history.push(`/login`)
    
        }
      },[checkLogado, history])

}

export default CheckLogin