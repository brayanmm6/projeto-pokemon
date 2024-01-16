import styled from "styled-components"

const StyledButton = styled.button`
    min-width: 140px;
    padding: 10px 30px;
    background: var(--color-blue-500);
    border-radius: 15px;
    cursor: pointer;
    border: solid 2px var(--color-white-glow);
    color: var(--color-white-glow);
    transition: 0.3s ease-in-out;
    font-size: 18px;
    animation: glowing infinite linear 2s;
    box-shadow: 0 0 10px var(--color-white-glow); 
    text-decoration: underline;

    &:hover{
        background-color: var(--transparent-pink);
    }

    &:active{
        background-color: var(--color-pink);
        border: solid 2px var(--color-blue-100);
        box-shadow: none;
    }
`

export { StyledButton }