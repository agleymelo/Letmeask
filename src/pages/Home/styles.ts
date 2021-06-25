import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Aside = styled.aside`
  flex: 6;
  background: ${({ theme }) => theme.text.pink.primary};
  color: ${({ theme }) =>
    theme.title === "light"
      ? theme.text.white.primary
      : theme.text.white.primary};

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 120px 80px;

  img {
    max-width: 320px;
  }

  strong {
    font: 700 36px "Poppins", sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: ${({ theme }) => theme.text.white.secondary};
  }

  /* Mobile */
  @media only screen and (min-width: 800px) and (max-width: 900px) {
    flex: 4;

    padding: 90px 60px;

    img {
      max-width: 300px;
    }

    strong {
      font-size: 32px;
      line-height: 40px;
    }

    p {
      font-size: 20px;
      line-height: 28px;
    }
  }

  @media only screen and (min-width: 700px) and (max-width: 800px) {
    flex: 4;

    padding: 80px 50px;

    img {
      max-width: 260px;
    }

    strong {
      font-size: 26px;
      line-height: 38px;
    }

    p {
      font-size: 18px;
      line-height: 26px;
    }
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const Main = styled.main`
  flex: 9;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 300px) and (max-width: 700px) {
    flex: 1;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }
`;

export const MobileContent = styled.div`
  display: none;

  strong {
    font: 700 16px "Poppins", sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 12px;
    line-height: 26px;
    margin-top: 8px;
    color: ${({ theme }) =>
      theme.title === "light"
        ? theme.text.gray.primary
        : theme.text.white.primary};
  }

  @media only screen and (min-width: 300px) and (max-width: 700px) {
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 400px) {
    strong {
      font: 700 16px "Poppins", sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 12px;
      line-height: 26px;
      margin-top: 8px;
      color: ${({ theme }) =>
        theme.title === "light"
          ? theme.text.gray.primary
          : theme.text.white.primary};
    }
  }
`;

export const ButtonCreateRoom = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${({ theme }) => theme.text.red.primary};
  color: ${({ theme }) => theme.text.white.primary};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.9);
  }

  @media only screen and (min-width: 300px) and (max-width: 700px) {
    margin-top: 24px;
  }

  @media only screen and (min-width: 300px) and (max-width: 500px) {
    font-size: 14px;
    height: 42px;
  }
`;

export const Separator = styled.div`
  font-size: 14px;
  color: ${({ theme }) =>
    theme.title === "light"
      ? theme.text.gray.secondary
      : theme.text.white.secondary};
  padding: 32px 0px;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({ theme }) =>
      theme.title === "light"
        ? theme.text.gray.secondary
        : theme.text.white.primary};
    margin-right: 16px;
  }

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({ theme }) =>
      theme.title === "light"
        ? theme.text.gray.secondary
        : theme.text.white.primary};
    margin-left: 16px;
  }
`;

export const Form = styled.form`
  input {
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    background: ${({ theme }) => theme.background.primary};
    border: 1px solid
      ${({ theme }) =>
        theme.title === "light"
          ? theme.text.gray.secondary
          : theme.text.white.primary};
  }

  button {
    margin-top: 16px;
  }

  button,
  input {
    width: 100%;
  }

  @media only screen and (min-width: 300px) and (max-width: 500px) {
    button {
      margin-top: 24px;
      height: 42px;
    }
  }
`;
