import logo from "../../assets/logo.svg";

import api from "../../services/api";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Redirect, useHistory } from "react-router-dom";

import { Container, Content, Header, HrLine, RegisterTechBox } from "./styles";
import TechList from "../../components/TechList";
import { toast } from "react-toastify";

function Dashboard({ authenticated, setAuthenticated }) {
  const history = useHistory();

  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

  const user = JSON.parse(localStorage.getItem("@KenzieHub:user"));

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => toast.success("Tecnologia adicionada!"))
      .catch((err) =>
        toast.error("Você já possui essa tecnologia adicionada!")
      );
  };

  const leaveAccount = (path) => {
    localStorage.clear();

    setAuthenticated(false);

    toast.success("Usuário deslogado, até a próxima!");

    return history.push(path);
  };

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Logo" />
          <button onClick={() => leaveAccount("/")}>Sair</button>
        </nav>
        <HrLine />
        <Header>
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </Header>
        <HrLine />
        <RegisterTechBox onSubmit={handleSubmit(onSubmit)}>
          <h3 className="title">Cadastrar Tecnologia</h3>
          <div>
            <fieldset>
              <label>
                Nome {!!errors.title && <span>{errors.title.message}</span>}
              </label>
              <input placeholder="Digite a tecnologia" {...register("title")} />
            </fieldset>
            <fieldset>
              <label>
                Selecionar status
                {!!errors.status && <span>{errors.status.message}</span>}
              </label>
              <select {...register("status")}>
                <option value="">Escolha um status</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </fieldset>
            <button type="submit">Cadastrar Tecnologia</button>
          </div>
        </RegisterTechBox>

        <TechList />
      </Content>
    </Container>
  );
}

export default Dashboard;
