import {Switch, Route} from "react-router-dom";

import GerarHome from "./modules/pages/home/home";
import GerarPageLogin from "./modules/pages/login/login";
import GerarPageCadastro from "./modules/pages/cadastro/cadastro";




function App() {

  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
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
