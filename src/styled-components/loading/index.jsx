import styled from "styled-components";

const Loading = styled.span`
    width: 50px;
    height: 50px;
    color: var(--color-pink);
    background-color: transparent;
    border: solid 4px;
    border-right: solid transparent;
    border-radius: 50%;
    animation: spinning infinite 0.4s linear;
    align-self: center;
    margin: 20px;

    @keyframes spinning {
        100%{
            transform: rotate(1turn);
        }  
    }
`

export { Loading }