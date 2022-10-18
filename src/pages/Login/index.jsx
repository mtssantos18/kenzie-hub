import { Container, Content, FormBox } from "./styles";
import logo from "../../assets/logo.svg";

import { Redirect, useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import api from "../../services/api";

import { toast } from "react-toastify";

function Register({ authenticated, setAuthenticated }) {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório!").email("Email inválido"),
    password: yup.string().required("Campo Obrigatório!"),
  });

  const handleNavigation = (path) => {
    return history.push(path);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        const token = res.data.token;
        const user = res.data.user;

        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));

        setAuthenticated(true);

        toast.success("Usuário logado com sucesso!");

        return history.push("/dashboard");
      })
      .catch((err) => toast.error("Email ou senha inválidos"));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
        <header>
          <img src={logo} alt="Logo" />
        </header>
        <FormBox>
          <h3>Login</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <label>
                Email {!!errors.email && <span>{errors.email.message}</span>}
              </label>
              <input placeholder="Digite seu email" {...register("email")} />
            </fieldset>

            <fieldset>
              <label>
                Senha{" "}
                {!!errors.password && <span>{errors.password.message}</span>}
              </label>
              <input
                type="password"
                autoComplete="off"
                placeholder="Digite sua senha"
                {...register("password")}
              />
            </fieldset>

            <button type="submit">Entrar</button>
          </form>

          <div>
            <small>Ainda não possui uma conta?</small>
            <button onClick={() => handleNavigation("/register")}>
              Cadastre-se
            </button>
          </div>
        </FormBox>
      </Content>
    </Container>
  );
}

export default Register;
