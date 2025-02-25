import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

//* 전역 스타일링이 필요한 부분에 스타일을 적용했습니다.
const GlobalStyle = createGlobalStyle`
    ${reset}

    html {
        font-family: "Jua", serif;
    }

    * {
        box-sizing: border-box;
        font-family: "Jua", serif;
    }

    html,body {
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
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export default GlobalStyle;
