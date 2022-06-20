import "./login.css";
import Api from "../api";
import React from "react";

import { useHistory } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";

function GerarPageLogin() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputSenha, setInputSenha] = useState("");

  const history = useHistory();

  localStorage.clear();

  // const dadoUser = {
  //   email: "hhjhjh@kenzie.com.br",
  //   password: "123456",
  // };

  function fazerLogin(event) {
    event.preventDefault();

    const dadoUser = {
      email: inputEmail,
      password: inputSenha,
    };

    // const dato = localStorage.getItem('hubToken')
    // console.log(dato)

    Api.post("/sessions", dadoUser).then((response) => {
      localStorage.setItem("hubToken", JSON.stringify(response.data.token));
      history.push(`/home${response.data.user.id}`);
    });



    











  }

  return (
    <div className="conteiner-login">
      <form className="login-form">
        <span className="logo-login">Kenzie Hub</span>
        <span className="nomeForm-login">Login</span>
        <span className="alinhar-email-senha">E-mail</span>
        <div className="alinharCentro">
          <input
            onChange={(event) => setInputEmail(event.target.value)}
            className="imput-email-login"
          ></input>
        </div>
        <span className="alinhar-email-senha">Senha</span>
        <div className="alinharCentro">
          <input
            onChange={(event) => {
              setInputSenha(event.target.value);
            }}
            className="imput-email-senha" type={"password"}
          ></input>
          <span className="MostrarSenha">&#9673;</span>
        </div>
        <div className="alinharCentro">
          <button
            onClick={(event) => {
              fazerLogin(event);
            }}
            className="btn-login"
          >
            Entrar
          </button>
        </div>
        <span className="span-semConta">Ainda não possui uma conta?</span>
        <div className="alinharCentro">
          <button
            onClick={() => {
              history.push("/cadastro")
            }}
            className="btnIrpaginaCadastro"
          >
            Cadastre-se
          </button>
        </div>
      </form>
    </div>
  );
}

export default GerarPageLogin;
