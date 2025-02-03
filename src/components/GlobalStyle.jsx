import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
        background-color: #FFE4B8;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
`;

export default GlobalStyle;
