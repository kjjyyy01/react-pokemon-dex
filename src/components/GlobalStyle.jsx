import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
        background-color: #FFDFAD;
    }
`;

export default GlobalStyle;
