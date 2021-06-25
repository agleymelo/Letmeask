import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background?.primary};
    color: ${(props) => props.theme.colors.text}
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }

  @media only screen and (min-width: 300px) and (max-width: 450px) {
    .ReactModal__Content--after-open {
      top: 0% !important;
      left: 0% !important;
      bottom: 0 !important;
      right: 0 !important;

    }
  }
`;
