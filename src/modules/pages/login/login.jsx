import "./login.css";
import Api from "../../components/api.js";
import React from "react";

import { useHistory } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";

import { toast } from "react-toastify";

// hhjhjh@kenzie.com.br

function GerarPageLogin() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputSenha, setInputSenha] = useState("");

  const history = useHistory();
  // toast.error("vc ja tem um desses no carrinho");

  localStorage.clear();

  function FazerLogin() {
    const dadoUser = {
      email: inputEmail,
      password: inputSenha,
    };


    Api.post("/sessions", dadoUser)
    .then((response) => {
      localStorage.setItem("hubToken",response.data.token)
      // localStorage.setItem("hubToken", JSON.stringify(response.data.token))
      toast.success("login feito com sucesso");
      return history.push(`/home/${response.data.user.id}`)
    })
    .catch((err) => toast.error("Erro no email ou na senha tente novamente"))
  }

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    senha: yup.string().required("senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);

    FazerLogin();

  };

  return (
    <div className="conteiner-login">
      <form className="login-form" onSubmit={handleSubmit(onSubmitFunction)}>
        <span className="logo-login">Kenzie Hub</span>
        <span className="nomeForm-login">Login</span>
        <span className="alinhar-email-senha">E-mail</span>
        <div className="alinharCentro">
          <input
            {...register("email")}
            onChange={(event) => setInputEmail(event.target.value)}
            className="imput-email-login"
          ></input>
          <span>{errors.email?.message}</span>
        </div>
        <span className="alinhar-email-senha">Senha</span>
        <div className="alinharCentro">
          <input
            {...register("senha")}
            onChange={(event) => {
              setInputSenha(event.target.value);
            }}
            className="imput-email-senha"
            type={"password"}
          ></input>
          <span>{errors.senha?.message}</span>
        </div>
        <div className="alinharCentro">
          <button
            type="submit"
            // onClick={(event) => {
            //   FazerLogin(event);
            // }}
            className="btn-login"
          >
            Entrar
          </button>
        </div>
        <span className="span-semConta">Ainda não possui uma conta?</span>
        <div className="alinharCentro">
          <button
            onClick={() => {
              history.push("/cadastro");
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
