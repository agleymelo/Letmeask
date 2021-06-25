import styled from "styled-components";
import { Button } from "../Button";

export const Container = styled.header`
  padding: 24px;
  border-bottom: 1px solid #e2e2e2;
`;

export const HeaderContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  > img {
    max-height: 45px;
  }
`;

export const ContainerMobile = styled.div`
  display: none;

  @media only screen and (min-width: 300px) and (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 12px;

    > div {
      display: flex;
      height: 34px;
      width: 34px;
    }
  }
`;

type HeaderContentProps = {
  open: boolean;
};

export const HeaderContent = styled.div<HeaderContentProps>`
  display: flex;
  gap: 16px;

  button {
    height: 40px;
  }

  > div {
    cursor: pointer;
    display: flex;
    width: 36px;
  }

  @media only screen and (min-width: 300px) and (max-width: 768px) {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    .switch-theme {
      display: none;
    }

    display: flex;
    flex-flow: column nowrap;
    flex-direction: column;
    justify-content: center;

    background-color: ${({ theme }) =>
      theme.title === "light"
        ? theme.text.white.primary
        : theme.background.primary};

    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 94px;
    right: 0;
    height: calc(100vh - 94px);
    width: 100%;

    padding: 30px;

    transition: transform 0.3s ease-in-out;
  }
`;

type BurgerProps = {
  open: boolean;
};

export const Burger = styled.div<BurgerProps>`
  width: 2rem;
  height: 2rem;

  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) =>
      theme.title === "light"
        ? theme.text.black.primary
        : theme.text.white.primary};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const ButtonSignOut = styled(Button)`
  color: ${({ theme }) =>
    theme.title === "light"
      ? theme.text.white.primary
      : theme.text.white.primary};
  background: ${({ theme }) =>
    theme.title === "light" ? theme.text.red.primary : "transparent"};
  border: 1px solid
    ${({ theme }) =>
      theme.title === "light" ? "none" : theme.text.red.primary};
`;
