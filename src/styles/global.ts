import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background.secondary};
    color: ${props => props.theme.colors.text};
  }

  * {
    font: 16px 'Montserrat', sans-serif
  }
`;
