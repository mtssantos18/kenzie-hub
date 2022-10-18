import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;

  padding-top: 1.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  nav {
    display: inline-flex;
    justify-content: space-between;

    padding: 0 1rem;

    button {
      background-color: var(--grey-3);

      border: none;
      border-radius: 4px;

      width: 55.49px;
      height: 32px;

      color: var(--grey-0);

      :hover {
        background-color: var(--grey-2);
      }
    }
  }

  @media (min-width: 600px) {
    max-width: 780px;
  }
`;

export const HrLine = styled.hr`
  border: 1px solid var(--grey-3);
`;

export const RegisterTechBox = styled.form`
  display: flex;
  flex-direction: column;

  padding: 1rem 2rem 1rem 2rem;
  margin: 0 auto;

  width: 100%;
  max-width: 500px;

  .title {
    height: 38px;

    padding-top: 0.75rem;

    background-color: var(--grey-2);
    color: var(--grey-0);

    font-size: 11.23px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    background-color: var(--grey-3);

    width: 100%;

    padding: 1rem;

    fieldset {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.3rem;

      border: none;

      label {
        font-size: 9.77px;

        width: 100%;

        display: inline-flex;
        justify-content: space-between;

        span {
          color: red;
        }
      }

      input {
        width: 100%;
        height: 38.5px;

        border: none;
        border-radius: 4px;

        color: var(--grey-0);
        background-color: var(--grey-2);

        padding-left: 1rem;

        font-size: 13.03px;
      }

      select {
        width: 100%;
        height: 38.5px;

        border: none;
        border-radius: 4px;

        color: var(--grey-0);

        padding-left: 1rem;

        background-color: var(--grey-2);

        font-size: 13.03px;
      }

      @media (min-width: 600px) {
        input,
        select {
          height: 48px;
          font-size: 16.24px;
        }

        label {
          font-size: 12.18px;
        }
      }
    }

    button {
      background-color: var(--color-primary);

      border: none;
      border-radius: 4px;

      color: var(--grey-0);

      font-size: 12.83px;

      height: 38.5px;

      :hover {
        background-color: var(--color-primary-50);
      }

      @media (min-width: 600px) {
        font-size: 16px;

        height: 48px;
      }
    }
  }

  @media (min-width: 600px) {
    .title {
      font-size: 14px;
      padding-top: 0.6rem;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;

  padding: 1rem;

  h2 {
    font-size: 18px;
    font-weight: 700;
  }

  p {
    font-size: 12px;
    font-weight: 400;

    color: var(--grey-1);
  }

  @media (min-width: 600px) {
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`;
