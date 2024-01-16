import styled from "styled-components";
import { pokemonTypesColors, themeColors } from "../../js/objects";

const PokemonFilter = styled.div`
    display: flex;
    gap: 10px;

    input{
        display: none;
    }

    .accordion-label{
        gap: 5px;
        cursor: pointer;
        max-height: 58px;
        background-color: var(--transparent-blue);
        padding: 5px 10px;
        border-radius: 15px;
        border: solid 1px ${props => props.theme === "dark" ? themeColors.dark.borderColor : themeColors.light.borderColor};
        box-shadow: 0 2px 5px ${props => props.theme === "dark" ? themeColors.dark.boxShadow : themeColors.light.boxShadow};
        transition: 0.2s ease-in-out;
        text-align: center;
    }

    .accordion-label:hover{
        background-color: var(--transparent-pink);
    }

    .accordion-label::after{
        content: "";
        display: inline-block;
        margin-inline: 5px;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-top: 0;
        border-bottom: 10px solid var(--color-white-glow);
        rotate: 180deg;
        transition: 0.3s ease-in-out;
    }

    .filter-options{
        position: absolute;
        z-index: 1;
        background-color:${ props => props.theme === "dark" ? themeColors.light.background : themeColors.dark.background };
        backdrop-filter: blur(8px);
        color: black;
        height: 0; 
        width: fit-content;
        border-radius: 15px;
        overflow: hidden;
        transition: height 0.3s ease-in-out;
        top: 89px;
        left: 0;
        box-shadow: 0 5px 5px ${props => props.theme === "dark" ? themeColors.dark.boxShadow : themeColors.light.boxShadow};
    }

    & ::-webkit-scrollbar-track{
        display: none;
        backdrop-filter: blur(8px);
    }

    & ::-webkit-scrollbar-thumb {
        border: solid 2px ${props => props.theme === "dark" ? themeColors.dark.borderColor : themeColors.light.borderColor};
        border-radius: 10px;
    }

    .filter-options li{
        padding: 5px 30px;
        border-radius: 15px;
    }

    .filter-options li button{
        animation: none;
        background-color: var(--transparent-blue);
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: 200px;
        box-shadow: 0 3px 5px ${props => props.theme === "dark" ? themeColors.dark.boxShadow : themeColors.light.boxShadow};
        border: solid 1px ${props => props.theme === "dark" ? themeColors.dark.borderColor : themeColors.light.borderColor};
    }

    .filter-options li button:hover{
        background-color: yellow;
        color: var(--color-blue-300);
    }

    #accordion:checked ~ ul.filter-options {
        height: 400px;
        overflow-y: scroll;
        border: solid 1px ${props => props.theme === "dark" ? themeColors.dark.borderColor : themeColors.light.borderColor};
    }

    #accordion:checked ~ .accordion-label::after{
        rotate: 360deg;
        
        
    }

`

const StyledBall = styled.span`
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-left: 10px;
    border: solid 2px var(--color-white-glow);
    border-radius: 50%;
    background-color: ${props => {
        let background = ""
        pokemonTypesColors.forEach(type => {
            if (type.name === props.type) background = type.color
            else if (props.type === "default") background = "black"
        })
        return background
    }};
`

const CurrentFilterContainer = styled.div`
    display: flex;
    gap: 2px;
    justify-content: center;
    flex-wrap: wrap;

    button{
        min-width: auto;
        padding: 3px;
        border-radius: 50%;
        background-color: red;
        max-height: auto;
        display: flex;
        align-items: center;    
        justify-content: center;
        animation: none;
        box-shadow: none;
        text-align: center;
    }

    svg{
        width: 25px;
        height: 25px;
    }
`

const CurrentFilter = styled.span`
    text-align: center;
    gap: 10px;
    position: relative;
    cursor: pointer;
    padding: 5px 20px;
    width: 100px;
    height: 35px;
    background-color:  ${props => {
        let background = ""
        pokemonTypesColors.forEach(type => {
            if (type.name === props.filter) background = type.color
            else if (props.filter === "default") background = "black"
        })
        return background
    }};
    color: var(--color-white-glow);
    border: solid 1px ${props => props.theme === "dark" ? themeColors.dark.borderColor : themeColors.light.borderColor};
    border-radius: 15px;

    svg{
        width: 20px;
        margin: 0;
        position: absolute;
        right: 5px;
    }
`

export { PokemonFilter, StyledBall, CurrentFilterContainer, CurrentFilter }