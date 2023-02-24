import { css } from "@emotion/react";
import { selectedTheme } from "./theme/ThemeProvider";

export const GlobalStyles = css`
  * {
    font-family: "Inter", sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    background-color: ${selectedTheme.colors.backgroundSecondary};
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }
`;
