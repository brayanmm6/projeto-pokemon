import styled from "styled-components";

const StyledSearchBox = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    & label{
        border-radius: 50%;
        background-color: var(--transparent-white);
        padding: 10px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    & label:hover{
        background-color: var(--transparent-pink);
    }
`

const StyledSearchInput = styled.input`
    width: 400px;
    background-color: var(--transparent-white);
    border: solid 2px var(--transparent-pink); 
    font-size: 16px;
    border-radius: 15px;
    padding: 10px; 
    transition: 0.4s ease-in-out;

    &:focus{
        outline: none;
        border: solid 2px var(--transparent-blue);
    }
`

export { StyledSearchBox, StyledSearchInput }