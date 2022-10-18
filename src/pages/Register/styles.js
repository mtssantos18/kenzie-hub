import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;

  padding-top: 3rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 80%;
  max-width: 370px;

  header {
    display: inline-flex;
    justify-content: space-between;
  }

  .back {
    background-color: var(--grey-3);
    color: var(--grey-0);

    border: none;

    width: 79.54px;
    height: 31.95px;

    font-size: 9.59px;
    font-weight: 600;

    &:hover {
      background-color: var(--grey-2);
    }
  }

  @media (min-width: 600px) {
    .back {
      width: 67.49px;
      height: 40.11px;

      font-size: 12px;
    }
  }
`;

const appearFromLeft = keyframes`
from {
    opacity: 0;
    transform: translateX(-50px);
}

to{
    opacity: 1;
    transform: translateX(0px);
}
`;

export const FormBox = styled.div`
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.6rem;

  padding: 1rem;

  border-radius: 4px;

  animation: ${appearFromLeft} 1s;

  h3 {
    font-size: 14.39px;
    font-weight: 700;
  }

  small {
    font-size: 9.59px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    fieldset {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      border: none;
      gap: 0.4rem;
    }

    label {
      display: inline-flex;
      justify-content: space-between;

      width: 100%;

      font-size: 9.74px;

      span {
        color: red;
      }
    }

    input {
      width: 100%;
      height: 38.38px;

      background-color: var(--grey-2);

      border: none;
      border-radius: 4px;

      ::placeholder {
        color: var(--grey-1);
        font-size: 12.99px;

        padding-left: 1rem;
      }
    }
    select {
      width: 100%;
      height: 38.38px;

      background-color: var(--grey-2);

      border: none;
      border-radius: 4px;

      font-size: 12.99px;
      color: var(--grey-1);

      padding-left: 1rem;
    }
    button {
      background-color: var(--color-primary);

      border: none;
      border-radius: 4px;

      font-size: 12.79px;
      color: var(--grey-0);

      width: 100%;
      height: 38.38px;

      &:hover {
        background-color: var(--color-primary-50);
      }
    }
  }

  @media (min-width: 600px) {
    h3 {
      font-size: 18px;
    }

    small {
      font-size: 12px;
    }

    button {
      font-size: 16px;
    }

    form {
      label {
        font-size: 12.18px;
      }
      input {
        height: 40px;

        ::placeholder {
          font-size: 16.24px;
        }
      }

      select {
        font-size: 16.24px;
      }

      button {
        font-size: 16.24px;
        height: 48px;
      }
    }
  }
`;
