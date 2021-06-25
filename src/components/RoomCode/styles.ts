import styled from "styled-components";

export const Container = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background: ${({ theme }) => theme.background.primary};
  border: 1px solid ${({ theme }) => theme.text.pink.primary};
  cursor: pointer;

  display: flex;

  > div {
    height: 100%;
    background: ${({ theme }) => theme.text.pink.primary};
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    width: 230px;
    font-size: 14px;
    font-weight: 500;

    color: ${({ theme }) =>
      theme.title === "light"
        ? theme.text.black.primary
        : theme.text.white.primary};
  }
`;
