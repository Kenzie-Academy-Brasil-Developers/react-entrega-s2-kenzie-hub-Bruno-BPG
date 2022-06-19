import "./cadastro.css";

function GerarPageCadastro() {
  return (
    <div className="conteiner-cadastro">
      <form className="cadastro-form">
        <div className="div-logo-cadastro">
          <span className="logo-cadastro">Kenzie Hub</span>
          <button className="btnVoltar-cadastro">Voltar</button>
        </div>

        <span className="nomeForm-cadastro">Crie sua conta</span>
        <span className="subTitulo">Rapido e grátis, vamos nessa</span>

        <span className="alinharNome">Nome</span>
        <div className="alinharCentro">
          <input className="alinarImput" placeholder="Digite aqui seu nome"></input>
        </div>

        <span className="alinharNome">E-mail</span>
        <div className="alinharCentro">
          <input className="alinarImput" placeholder="Digite aqui seu email"></input>
        </div>

        <span className="alinharNome">Senha</span>
        <div className="alinharCentro">
          <input type="password" placeholder="Digite aqui sua senha" className="alinarImput"></input>
        </div>
        
        <span className="alinharNome">Confirmar Senha</span>
        <div className="alinharCentro">
          <input type="password" placeholder="Digite novamente sua senha"  className="alinarImput"></input>
        </div>

        <span className="alinharNome">Bio</span>
        <div className="alinharCentro">
          <input className="alinarImput" placeholder="Fale sobre você"></input>
        </div>

        <span className="alinharNome">Contato</span>
        <div className="alinharCentro">
          <input className="alinarImput" placeholder="Opção de contato"></input>
        </div>

        <span className="alinharNome">Selecionar Modulo</span>
        <div className="alinharCentro">
        <select name="cargo" class="alinarImput">
          <option className="ajustarCorGrey" value="Primeiro">Primeiro Modulo</option>
          <option className="ajustarCorGrey" value="Segundo">Segundo Modulo</option>
          <option className="ajustarCorGrey" value="Terceiro">Terceiro Modulo</option>
          <option className="ajustarCorGrey" value="Quarto">Quarto Modulo</option>
          <option className="ajustarCorGrey" value="Quinto">Quinto Modulo</option>
        </select>
        </div>
        
        <div className="alinharCentro">
          <button className="btn-cadastro">Cadastro</button>
        </div>
      </form>
    </div>
  );
}

export default GerarPageCadastro;
