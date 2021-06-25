import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    text: {
      white: {
        primary: string;
        secondary: string | null;
      };
      gray: {
        primary: string;
        secondary: string | null;
        third: string | null;
        four: string | null;
      };
      red: {
        primary: string;
      };
      pink: {
        primary: string;
        secondary: string | null;
      };
      black: {
        primary: string | null;
      };
    };

    question: {
      default: string;
      highlighted: string;
      answered: string;
      border: string;
    };

    background: {
      primary: string | null;
    };
  }
}
