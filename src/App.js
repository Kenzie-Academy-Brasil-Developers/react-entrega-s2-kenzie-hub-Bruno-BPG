import {Switch, Route} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

// import "./modules/mobilefist.css"

import GerarHome from "./modules/pages/home/home";
import GerarPageLogin from "./modules/pages/login/login";
import GerarPageCadastro from "./modules/pages/cadastro/cadastro";

import { useState } from "react";

// import { useHistory } from "react-router-dom";


function App() {



  return (
    
    <div className="App">
      <Switch>

        <Route exact path="/">
        {/* {history.push("/login")} */}
          {/* fdsoifdsui */}
        {/* <span>fdfdsfds</span> */}
        </Route>

        <Route exact path="/home/:id">
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
