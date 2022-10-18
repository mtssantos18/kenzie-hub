import styled from "styled-components";

export const Card = styled.div`
  background-color: var(--grey-4);

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0.4rem 0.5rem;

  font-size: 14.21px;
`;

export const InfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-width: 100px;

  font-size: 12px;
  color: var(--grey-1);

  button {
    background-color: var(--grey-4);

    border: none;

    color: var(--grey-1);

    :hover {
      color: var(--grey-0);
    }
  }

  @media (min-width: 600px) {
    width: 130px;
    font-size: 15px;
  } ;
`;
