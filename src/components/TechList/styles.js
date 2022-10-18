import styled from "styled-components";

export const ListDiv = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem 2rem 1rem 2rem;

  width: 100%;
  max-width: 500px;

  margin: 0 auto;

  h3 {
    font-size: 16px;
    font-weight: 600;

    margin-bottom: 1rem;
  }
`;

export const DivBox = styled.div`
  background-color: var(--grey-3);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
`;
