import {Switch, Route} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


import GerarHome from "./modules/pages/home/home";
import GerarPageLogin from "./modules/pages/login/login";
import GerarPageCadastro from "./modules/pages/cadastro/cadastro";

// import { useState, useEffect} from "react";

// import { useHistory } from "react-router-dom";


function App() {

  // const [checkLogado, setCheckLogado] = useState(false)
  
  // const history = useHistory()


  // useEffect(()=>{
  //   const token = localStorage.getItem('hubToken')
  //   if(token){
  //     setCheckLogado(true)
  //   }
  //   else{
  //     console.log(checkLogado)
      
  //     history.push(`/login`)

  //   }
  // },[checkLogado,history]

  // )

  return (
    
    <div className="App">
      <Switch>

        <Route exact path="/">
        {/* {history.push("/login")} */}
          {/* fdsoifdsui */}
        </Route>

        <Route exact path="/home:id">
          <GerarHome></GerarHome>
        </Route>

        <Route exact path="/login">
          <GerarPageLogin></GerarPageLogin>
        </Route>

        <Route exact path="/cadastro">
        <GerarPageCadastro></GerarPageCadastro>
        </Route>
        
      </Switch>

     

    </div>
  );
}

export default App;
