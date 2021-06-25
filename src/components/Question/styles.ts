import styled, { css } from "styled-components";

const answered = css`
  background: ${({ theme }) => theme.question.answered};
`;

const highlighted = css`
  background: ${({ theme }) => theme.question.highlighted};
  border: 1px solid ${({ theme }) => theme.question.border};

  footer div span {
    color: ${({ theme }) =>
      theme.title === "light"
        ? theme.text.black.primary
        : theme.text.white.primary};
  }
`;

type ContainerProps = {
  isAnswered: boolean;
  isHighlighted: boolean;
};

export const Container = styled.div<ContainerProps>`
  background: ${({ theme }) => theme.question.default};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  margin-right: 8px;
  margin-left: 8px;

  & + div {
    margin-top: 8px;
  }

  &:last-child {
    margin-bottom: 16px;
  }

  p {
    color: ${({ theme }) =>
      theme.title === "light"
        ? theme.text.black.primary
        : theme.text.white.primary};
  }

  ${({ isHighlighted }) => isHighlighted && highlighted}

  ${({ isAnswered }) => isAnswered && answered}

  @media only screen and (max-width: 768px) {
    /* padding: 8px 16px; */
    padding: 24px;
    margin-right: 8px;
    margin-left: 8px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 24px;
`;

export const UserInfo = styled.div`
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
        ? theme.text.gray.primary
        : theme.text.white.primary};
    font-size: 14px;
  }
`;

export const ContentIcon = styled.div`
  > div {
    display: flex;
    gap: 16px;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    transition: filter 0.2s;

    &.like-button {
      display: flex;
      align-items: flex-end;
      color: ${({ theme }) =>
        theme.title === "light"
          ? theme.text.gray.primary
          : theme.text.white.primary};
      gap: 8px;

      &.liked {
        color: ${({ theme }) => theme.text.pink.primary};

        svg path {
          stroke: ${({ theme }) => theme.text.pink.primary};
        }
      }
    }

    &:hover {
      filter: brightness(0.7);
    }

    &.delete-button {
      color: ${({ theme }) => theme.text.red.primary};

      svg path {
        stroke: ${({ theme }) => theme.text.red.primary};
      }
    }

    &:hover {
      filter: brightness(0.7);
    }

    &.question-highlight-button {
      color: ${({ theme }) =>
        theme.title === "light"
          ? theme.text.pink.primary
          : theme.text.pink.primary};

      svg path {
        stroke: ${({ theme }) => theme.text.pink.primary};
      }
    }

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
