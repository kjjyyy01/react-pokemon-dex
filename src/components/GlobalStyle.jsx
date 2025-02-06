import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    button {
        cursor: pointer;
        background: none;
        border: 0;
    }

    ul, li {
        list-style: none;
    }
`;

export default GlobalStyle;
