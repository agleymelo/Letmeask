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
      ? theme.text.gray.primary
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
    flex: 5;

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

  h2 {
    font-size: 24px;
    margin: 64px 0 24px;
    font-family: "Poppins", sans-serif;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) =>
      theme.title === "light"
        ? theme.text.gray.primary
        : theme.text.white.primary};
    margin-top: 16px;

    a {
      color: ${({ theme }) => theme.text.pink.primary};
    }
  }

  @media only screen and (min-width: 300px) and (max-width: 700px) {
    h2 {
      margin: 32px 0 16px;
    }
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
`;
