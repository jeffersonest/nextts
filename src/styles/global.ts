import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #__next, body, html {
    height: 100%;
    width: 100%;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text}
  }
`
