import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    li {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`

export { Reset }