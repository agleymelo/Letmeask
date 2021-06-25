import styled from "styled-components";

export const Container = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${({ theme }) =>
    theme.title === "light"
      ? theme.text.pink.primary
      : theme.text.pink.primary};
  color: ${({ theme }) =>
    theme.title === "light"
      ? theme.text.white.primary
      : theme.text.white.primary};
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &.outlined {
    background: ${({ theme }) =>
      theme.title === "light" ? theme.text.white.primary : "transparent"};
    border: 1px solid ${({ theme }) => theme.text.pink.primary};
    color: ${({ theme }) =>
      theme.title === "light"
        ? theme.text.pink.primary
        : theme.text.white.primary};
  }
`;
