import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    text-align: center;

    margin-top: 16px;

    h2 {
      margin-top: 24px;

      font-family: "Poppins", sans-serif;
      font-size: 24px;
      line-height: 34px;
    }

    p {
      margin-top: 12px;

      font-family: "Roboto", sans-serif;
      font-size: 16px;
      line-height: 26px;
      color: #737380;
    }
  }
`;

export const Buttons = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 16px;

  margin-top: 40px;

  button {
    &:first-child {
      background: #dbdcdd;
      color: #737380;
    }

    &:nth-child(2) {
      background: #e73f5d;
      color: #fff;
    }
  }
`;
