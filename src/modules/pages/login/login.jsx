import "./login.css";

function GerarPageLogin() {
  return (
    <div className="conteiner-login">
      <form className="login-form">
        <span className="logo-login">Kenzie Hub</span>
        <span className="nomeForm-login">Login</span>
        <span className="alinhar-email-senha">E-mail</span>
        <div className="alinharCentro">
          <input className="imput-email-login"></input>
        </div>
        <span className="alinhar-email-senha">Senha</span>
        <div className="alinharCentro">
          <input className="imput-email-senha"></input>
          <span className="MostrarSenha">&#9673;</span>
        </div>
        <div className="alinharCentro">
        <button className="btn-login">Entrar</button>
        </div>
        <span className="span-semConta">Ainda não possui uma conta?</span>
        <div className="alinharCentro">
        <button className="btnIrpaginaCadastro">Cadastre-se</button>
        </div>


      </form>
    </div>
  );
}

export default GerarPageLogin;
