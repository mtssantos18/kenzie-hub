import { useState, useEffect } from "react";

import api from "../../services/api";

import TechCard from "../TechCard";

import { DivBox, ListDiv } from "./styles";
import { toast } from "react-toastify";

function TechList() {
  const user = JSON.parse(localStorage.getItem("@KenzieHub:user"));

  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

  const [userTechsList, setUserTechsList] = useState([]);

  const removeTech = (id) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => toast.success("Tecnologia removida"));
  };

  useEffect(() => {
    api
      .get(`/users/${user.id}`)
      .then((res) => setUserTechsList(res.data.techs));
  }, [user.id, user.techs]);

  return (
    <ListDiv>
      <h3>Tecnologias</h3>
      <DivBox>
        {userTechsList.map(({ id, title, status }) => (
          <TechCard
            key={id}
            id={id}
            title={title}
            status={status}
            removeTech={removeTech}
          />
        ))}
      </DivBox>
    </ListDiv>
  );
}

export default TechList;
