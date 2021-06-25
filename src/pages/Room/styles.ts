import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.main`
  max-width: 880px;
  margin: 0 auto;

  @media only screen and (min-width: 300px) and (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const RoomTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    color: ${({ theme }) =>
      theme.title === "light"
        ? theme.text.white.primary
        : theme.text.white.primary};
    margin-left: 16px;
  }

  span {
    margin-left: 16px;
    background: ${({ theme }) =>
      theme.title === "light"
        ? theme.text.pink.secondary
        : theme.text.pink.primary};
    border-radius: 9999px;
    padding: 8px 16px;
    color: ${({ theme }) => theme.text.white.primary};
    font-weight: 500;
    font-size: 14px;
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;

    h1 {
      font-size: 16px;
    }

    span {
      font-size: 12px;
    }
  }

  @media only screen and (min-width: 300px) and (max-width: 450px) {
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 16px;

    h1 {
      font-size: 14px;
    }

    span {
      font-size: 12px;
    }
  }
`;

export const Form = styled.form`
  margin-right: 16px;
  margin-left: 16px;
  textarea {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 8px;
    background: ${({ theme }) => theme.question.default};
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 130px;

    @media only screen and (min-width: 300px) and (max-width: 768px) {
      resize: none;
    }
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  > div {
    display: flex;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    span {
      margin-left: 8px;
      color: ${({ theme }) =>
        theme.title === "light"
          ? theme.text.gray.third
          : theme.text.white.primary};
      font-weight: 500;
      font-size: 14px;
    }
  }

  > span {
    font-size: 14px;
    color: ${({ theme }) =>
      theme.title === "light"
        ? theme.text.gray.primary
        : theme.text.white.primary};
    font-weight: 500;

    button {
      background: transparent;
      border: 0;
      color: ${({ theme }) => theme.text.pink.primary};
      text-decoration: underline;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

export const QuestionList = styled.div`
  margin-top: 32px;
`;
