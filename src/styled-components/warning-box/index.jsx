import styled from "styled-components";

const WarningBoxContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    background-color: var(--transparent-grey);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: 10px;
`

const WarningBox = styled.div`
    max-width: 400px;
    max-heght: 350px;
    position: relative;
    background-color: var(--color-blue-050);
    border-radius: 10px;
    color: var(--color-red-100);
    border: solid 3px var(--color-red-100);
    margin-top: 10%;
    padding: 60px;
    text-align: center;

    & button{
        background-color: red;
        position: absolute;
        min-width: 0;
        display: flex;
        padding: 0;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        width: auto;
        height: auto;
        border-radius: 50%;
        top: -45px;
        right: -55px;
    }
`

export { WarningBoxContainer, WarningBox }