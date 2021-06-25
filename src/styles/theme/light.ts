import { DefaultTheme } from "styled-components";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "light",

  text: {
    white: {
      primary: "#fff",
      secondary: "#f8f8f8",
    },
    gray: {
      primary: "#737380",
      secondary: "#a8a8b3",
      third: "#29292e",
      four: "#dbdcdd",
    },
    red: {
      primary: "#E73F5D",
    },
    pink: {
      primary: "#835afd",
      secondary: "#E559F9",
    },
    black: {
      primary: "#000",
    },
  },

  question: {
    default: "#fefefe",
    highlighted: "#F4F0FF",
    answered: "#dbdcdd",
    border: "#835afd",
  },

  background: {
    primary: "#f8f8f8",
  },
} as DefaultTheme;
