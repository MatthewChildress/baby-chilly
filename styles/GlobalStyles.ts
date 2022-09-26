import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        height: 100vh;
        margin: 0;
        padding: 0;
        line-height: 1.4rem;
        font-size: 1.2rem;
        letter-spacing:0.09em;
        background-color: hsl(33.3 100% 96.5%);
        font-family: 'PT Sans', sans-serif;
    }
    
    a {
        color: hsl(0 0% 25.1%);
    }
`

export default GlobalStyle;