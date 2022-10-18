import { Container, Content, FormBox } from "./styles";
import logo from "../../assets/logo.svg";

import { Redirect, useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import api from "../../services/api";
import { toast } from "react-toastify";

function Register({ authenticated }) {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().required("Campo obrigatório!").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{6,})/,
        "Deve conter pelo menos uma letra maiúscula, uma minúscula, um número, um caractere especial e 6 caracteres"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes"),
    bio: yup.string().required("Campo obrigatório!"),
    contact: yup.string().required("Campo obrigatório!"),
    course_module: yup.string().required("Selecione um módulo!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = ({ name, email, password, bio, contact, course_module }) => {
    const account = { name, email, password, bio, contact, course_module };

    api
      .post("/users", account)
      .then((res) => {
        history.push("/");
        toast.success("Usuário cadastrado com sucesso!");
      })
      .catch((err) => toast.error("Email já existente!"));
  };

  const handleNavigation = (path) => {
    return history.push(path);
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
        <header>
          <img src={logo} alt="Logo" />
          <button onClick={() => handleNavigation("/")} className="back">
            Voltar
          </button>
        </header>
        <FormBox>
          <h3>Crie sua conta</h3>
          <small>Rápido e grátis, vamos nessa</small>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <label>
                Nome {!!errors.name && <span>{errors.name.message}</span>}
              </label>
              <input placeholder="Digite seu nome" {...register("name")} />
            </fieldset>

            <fieldset>
              <label>
                Email {!!errors.email && <span>{errors.email.message}</span>}
              </label>
              <input placeholder="Digite seu email" {...register("email")} />
            </fieldset>

            <fieldset>
              <label>
                Senha
                {!!errors.password && <span>{errors.password.message}</span>}
              </label>
              <input placeholder="Digite sua senha" {...register("password")} />
            </fieldset>

            <fieldset>
              <label>
                Confirmar Senha
                {!!errors.confirmPassword && (
                  <span>{errors.confirmPassword.message}</span>
                )}
              </label>
              <input
                placeholder="Confirme sua senha"
                {...register("confirmPassword")}
              />
            </fieldset>

            <fieldset>
              <label>
                Bio {!!errors.bio && <span>{errors.bio.message}</span>}
              </label>
              <input placeholder="Fale sobre você" {...register("bio")} />
            </fieldset>

            <fieldset>
              <label>
                Contato
                {!!errors.contact && <span>{errors.contact.message}</span>}
              </label>
              <input
                placeholder="Digite seu contato"
                {...register("contact")}
              />
            </fieldset>

            <fieldset>
              <label>
                Selecionar módulo
                {!!errors.course_module && (
                  <span>{errors.course_module.message}</span>
                )}
              </label>
              <select {...register("course_module")}>
                <option value="">--Selecione o módulo --</option>
                <option value="Primeiro módulo (Introdução ao Frontend)">
                  Primeiro Módulo
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                  Segundo Módulo
                </option>
                <option value="Terceiro módulo (Introdução ao Backend)">
                  Terceiro Módulo
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                  Quarto Módulo
                </option>
              </select>
            </fieldset>

            <button type="submit">Cadastrar</button>
          </form>
        </FormBox>
      </Content>
    </Container>
  );
}

export default Register;
