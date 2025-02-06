import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    html,body,#root {
        width: 100%;
        height: 100%;
    }

    body {
        background-color: #FFDFAD;
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

    #root {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default GlobalStyle;
