import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Aside = styled.aside`
  flex: 7;
  background: #835afd;
  color: #fff;

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
    color: #f8f8f8;
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
  flex: 8;

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

  .mobile-text {
    display: none;

    @media only screen and (min-width: 300px) and (max-width: 700px) {
      display: flex;

      flex-direction: column;
      align-items: center;
      justify-content: center;

      strong {
        font: 700 18px "Poppins", sans-serif;
        line-height: 42px;
        margin-top: 16px;
      }

      p {
        font-size: 14px;
        line-height: 26px;
        margin-top: 8px;
        color: #a8a8b3;
      }
    }
  }

  form {
    input {
      height: 50px;
      border-radius: 8px;
      padding: 0 16px;
      background: #fff;
      border: 1px solid #a8a8b3;
    }

    button {
      margin-top: 16px;
    }

    button,
    input {
      width: 100%;
    }
  }

  .create-room {
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: #ea4335;
    color: #fff;

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
      margin-top: 32px;
    }
  }

  .separator {
    font-size: 14px;
    color: #a8a8b3;
    padding: 32px 0px;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-right: 16px;
    }

    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-left: 16px;
    }
  }
`;
