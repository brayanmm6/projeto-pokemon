import styled from "styled-components";
import { themeColors } from "../../js/objects";

const MainSection = styled.section`
    display: flex; 
    flex-direction: column;
    gap: 30px;
    max-width: 1250px;
    justify-content: center;
`

const SectionPokemonInfos = styled.section`
    display: flex;
    gap: 10px;
    margin: 0 auto;
    width: 100%;
    height: 620px;
`

const Infos = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
`

const SectionMainInfos = styled.section`
    background-color: ${ props => props.theme === "dark" ? themeColors.light.background : themeColors.dark.background };
    backdrop-filter: blur(5px); 
    box-shadow: 0 7px 10px ${ props => props.theme === "dark" ? themeColors.dark.boxShadow : themeColors.light.boxShadow };
    border: solid 1px ${ props => props.theme === "dark" ? themeColors.dark.borderColor : themeColors.light.borderColor };
    padding: 20px;
    width: 100%;
    max-height: 620px;
    border-radius: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    gap: 10px;

    & .pokemon-name{
        width: 100%;
        background-color: var(--color-blue-100);
        font-size: 40px;
        color: var(--color-white-glow);
        box-shadow: 0 7px 10px ${ props => props.theme === "dark" ? themeColors.dark.boxShadow : themeColors.light.boxShadow };
        border: solid 1px ${ props => props.theme === "dark" ? themeColors.dark.borderColor : themeColors.light.borderColor };
        border-radius: 7px;
        padding: 10px 5px;
    }

    & .pokemon-image{
        width: 100%;
    }
` 

const SectionMoreInfos = styled.section`
    background-color: ${ props => props.theme === "dark" ? themeColors.light.background : themeColors.dark.background };
    backdrop-filter: blur(5px); 
    box-shadow: 0 7px 10px ${ props => props.theme === "dark" ? themeColors.dark.boxShadow : themeColors.light.boxShadow };
    border: solid 1px ${ props => props.theme === "dark" ? themeColors.dark.borderColor : themeColors.light.borderColor };
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column; 
    justify-content: space-around;

    button{
        background-color: transparent;
        border: none;
        box-shadow: none;
        padding: 0;
        animation: none;
        display: flex;
        justify-content: center;
        border-radius: inherit;
        width: auto;
    }

    button:hover{
        background-color: transparent;
        border: none;
    }

    button:active{
        background-color: inherit;
        border: none;
        box-shadow: none;
    }

    .pokemon-type{
        padding: 20px;
        background-color: var(--transparent-blue);
        border-radius: 7px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        border: solid 1px var(--color-white-glow);
    }

    .pokemon-type button p:hover{
        color: var(--color-blue-600);
        border: solid 1px var(--color-blue-600);
        box-shadow: 0 0 5px var(--color-blue-600) inset;
    }

    .pokemon-type p{
        border-radius: 5px;
        font-size: 22px;
        transition: 0.3s ease-in-out;
    }

    .pokemon-id{
        background-color: var(--transparent-pink);
        color: var(--color-white-glow);
        text-align: center;
        font-size: 25px;
        border-radius: 7px;
        border: solid 1px var(--color-white-glow);
        padding: 10px 20px;
    }

    .basic-infos{
        display: flex;
        justify-content: space-around;
        gap: 5px;   
    }

    .basic-infos p{
        border: solid 1px var(--color-white-glow);
        border-radius: 7px;
        padding: 15px 15px;   
        color: var(--color-white-glow);
        width: 100%;
        text-align: center;
    }

    .basic-infos .base-xp{
        background-color: var(--transparent-blue);
    }

    .basic-infos .height{
        background-color: var(--color-blue-300);
    }

    .basic-infos .weight{
        background-color: var(--color-blue-600);
    }

`

const PokemonStats = styled.ul` 
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: var(--color-blue-050);
    border-radius: 10px;
    border: solid 1px var(--color-white-glow);

    li{
        display: flex;
        justify-content: space-between;
        color: var(--color-blue-400);
        border-bottom: solid 1px;
        padding: 5px;
        flex-wrap: wrap;
        border-radius: 7px;
        align-items: center;
    }

    .progress-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 10px;
    }

    .progress-container span{
        color: var(--color-blue-400);
        min-width: 25px;
    }

    progress {
        border-radius: 7px; 
        height: 22px;
        box-shadow: 1px 1px 4px rgba( 0, 0, 0, 0.2 );
    }

    progress::-webkit-progress-value{
        background-color: var(--color-pink);
        border-radius: 5px;
    }

    progress::-webkit-progress-bar{
        padding: 2px;
        background-color: var(--transparent-pink);
        border-radius: 7px;
        border: solid 1px var(--color-white-glow);
    }
` 

const Abilities = styled.ul`
    margin: 0 auto;
    width: 100%;
    background-color: ${ props => props.theme === "dark" ? themeColors.light.background : themeColors.dark.background };
    backdrop-filter: blur(5px); 
    box-shadow: 0 7px 10px ${ props => props.theme === "dark" ? themeColors.dark.boxShadow : themeColors.light.boxShadow };
    border: solid 1px ${ props => props.theme === "dark" ? themeColors.dark.borderColor : themeColors.light.borderColor };
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    li{
        padding: 10px;
        border-bottom: solid 1px var(--color-blue-600);
        border-radius: 7px;
        background-color: var(--color-blue-050);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 15px;
        color: var(--color-blue-600);
        margin-bottom: 10px;
    }

    li h2{
        border-right: solid 1px var(--color-white-glow);
        border-left: solid 1px var(--color-white-glow);
        border-radius: 7px;
        padding: 10px;
    }

    li p{
        font-size: 18px;    
    }
`

const AsideCards = styled.aside`
    background-color: ${ props => props.theme === "dark" ? themeColors.light.background : themeColors.dark.background };
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 7px 10px ${ props => props.theme === "dark" ? themeColors.dark.boxShadow : themeColors.light.boxShadow };
    border: solid 1px ${ props => props.theme === "dark" ? themeColors.dark.borderColor : themeColors.light.borderColor };
    padding: 10px;
    max-width: 280px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & ::-webkit-scrollbar-track{
        display: none;
        backdrop-filter: blur(8px);
    }

    & ::-webkit-scrollbar-thumb {
        border: solid 2px ${props => props.theme === "dark" ? themeColors.dark.borderColor : themeColors.light.borderColor};
        border-radius: 10px;
    }
`

const PokemonMovesContainer = styled.div`
    margin: 0 auto;
    max-width: 1230px;
    background-color: ${ props => props.theme === "dark" ? themeColors.light.background : themeColors.dark.background };
    border-radius: 10px;
    box-shadow: 0 7px 10px ${ props => props.theme === "dark" ? themeColors.dark.boxShadow : themeColors.light.boxShadow };
    border: solid 1px ${ props => props.theme === "dark" ? themeColors.dark.borderColor : themeColors.light.borderColor };
    padding: 20px;

    ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-height: 700px;
        overflow: hidden scroll;
        padding: 5px;

        &::-webkit-scrollbar-track{
            display: none;
            backdrop-filter: blur(8px);
        }
    
        &::-webkit-scrollbar-thumb {
            border: solid 2px ${props => props.theme === "dark" ? themeColors.dark.borderColor : themeColors.light.borderColor};
            border-radius: 10px;
        }
    }

    li{
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px;
        border-bottom: solid 1px var(--color-blue-600);
        border-radius: 15px;
        color: var(--color-white-glow);
        background-color: var(--color-blue-050);
    }

    li .name{
        color: var(--color-blue-600);
        text-align: center;
    }

    li .power{
        background-color: var(--transparent-pink);
        padding: 1px 5px;
        border-radius: 7px;
        text-align: center;
    }

    li .description{
        color: var(--color-blue-600);
        padding: 10px;
        border-radius: 7px;
        font-size: 18px;
    }

    li .infos{
        display: flex;
        gap: 5px;
        flex-direction: column;
        padding: 10px;
        border-radius: 7px;    
        border-right: solid 1px;
        border-left: solid 1px;
    }

    
`

const TitleHeader = styled.header`
    width: 100%;
    background-color: var(--transparent-pink);
    border: solid 1px var(--color-white-glow);
    border-radius: 7px;
    margin-bottom: 15px; 
    padding: 20px;
    text-align: center;
    color: var(--color-blue-600);
`

export { MainSection, SectionPokemonInfos, Infos, SectionMainInfos, SectionMoreInfos, PokemonStats, Abilities, AsideCards, PokemonMovesContainer, TitleHeader }