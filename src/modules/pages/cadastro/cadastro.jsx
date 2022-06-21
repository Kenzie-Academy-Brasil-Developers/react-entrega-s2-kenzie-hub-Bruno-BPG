import "./cadastro.css";

import Api from "../api";

import { useHistory } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";

import { toast } from "react-toastify";

function GerarPageCadastro() {
  const history = useHistory();

  const [inputModule, setInputModule] = useState("Primeiro Modulo");

  function FazerCadastro(dado) {
    const terceiratentatica = {
      email: dado.email,
      password: dado.senha,
      name: dado.name,
      bio: dado.bio,
      contact: dado.contato,
      course_module: inputModule,
    };

    // const dadoChubado = {
    //   email: "fdfdfdfdfdeqwxdy@kenzie.com.br",
    //   password: "123456",
    //   name: "Filipe Gutierry",
    //   bio: "Lorem ipsum dolor emet",
    //   contact: "123456789",
    //   course_module: "2o Módulo (Frontend avançado)",
    // };

    console.log(terceiratentatica);

    Api.post("/users", terceiratentatica)
      .then((response) => {
        toast.success("Conta criada com sucesso!");
        return 0;
      })
      .catch((err) => toast.error("Ops! Algo deu errado"));
  }

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    senha: yup.string(),
    confirmaSenha: yup
      .string()
      .oneOf([yup.ref("senha")], "senha diferente")
      .required("mínimo 8 caracteres"),
    bio: yup.string().required("bio Obrigatoria"),
    contato: yup.string().required("contato Obrigatorio"),
    modulo: yup.string().required("Modulo Obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {

    FazerCadastro(data);

  };



  return (
    <div className="conteiner-cadastro">
      <form className="cadastro-form" onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="div-logo-cadastro">
          <span className="logo-cadastro">Kenzie Hub</span>
          <button
            onClick={() => {
              history.push("/login");
            }}
            className="btnVoltar-cadastro"
          >
            Voltar
          </button>
        </div>

        <span className="nomeForm-cadastro">Crie sua conta</span>
        <span className="subTitulo">Rapido e grátis, vamos nessa</span>

        <span className="alinharNome">Nome</span>
        <div className="alinharCentro">
          <input
            {...register("name")}
            className="alinarImput"
            placeholder="Digite aqui seu nome"
          ></input>
          <span>{errors.name?.message}</span>
        </div>

        <span className="alinharNome">E-mail</span>
        <div className="alinharCentro">
          <input
            {...register("email")}
            className="alinarImput"
            placeholder="Digite aqui seu email"
          ></input>
          <span>{errors.email?.message}</span>
        </div>

        <span className="alinharNome">Senha</span>
        <div className="alinharCentro">
          <input
            {...register("senha")}
            type="password"
            placeholder="Digite aqui sua senha"
            className="alinarImput"
          ></input>
        </div>

        <span className="alinharNome">Confirmar Senha</span>
        <div className="alinharCentro">
          <input
            {...register("confirmaSenha")}
            type="password"
            placeholder="Digite novamente sua senha"
            className="alinarImput"
          ></input>
        </div>

        <span className="alinharNome">Bio</span>
        <div className="alinharCentro">
          <input
            {...register("bio")}
            className="alinarImput"
            placeholder="Fale sobre você"
          ></input>
        </div>

        <span className="alinharNome">Contato</span>
        <div className="alinharCentro">
          <input
            {...register("contato")}
            className="alinarImput"
            placeholder="Opção de contato"
          ></input>
        </div>

        <span className="alinharNome">Selecionar Modulo</span>
        <div className="alinharCentro">
          <select {...register("modulo")} 
          onChange={(event) => setInputModule(event.target.value)}
          name="cargo" className="alinarImput">
            <option className="ajustarCorGrey" value="Primeiro Modulo">
              Primeiro Modulo
            </option>
            <option className="ajustarCorGrey" value="Segundo Modulo">
              Segundo Modulo
            </option>
            <option className="ajustarCorGrey" value="Terceiro Modulo">
              Terceiro Modulo
            </option>
            <option className="ajustarCorGrey" value="Quarto Modulo">
              Quarto Modulo
            </option>
            <option className="ajustarCorGrey" value="Quinto Modulo">
              Quinto Modulo
            </option>
          </select>
        </div>

        <div className="alinharCentro">
          <button type="submit" className="btn-cadastro">
            Cadastro
          </button>
        </div>
      </form>
    </div>
  );
}

export default GerarPageCadastro;
