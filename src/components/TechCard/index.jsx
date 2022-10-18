import { Card, InfoDiv } from "./styles";

import { RiDeleteBin6Line } from "react-icons/ri";

function TechCard({ id, title, status, removeTech }) {
  return (
    <Card>
      <p>{title}</p>
      <InfoDiv>
        <p>{status}</p>
        <button onClick={() => removeTech(id)}>
          <RiDeleteBin6Line />
        </button>
      </InfoDiv>
    </Card>
  );
}

export default TechCard;
