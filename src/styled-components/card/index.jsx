import styled from "styled-components"
import { pokemonTypesColors, themeColors } from "../../js/objects"

const StyledCard = styled.div`
    
    
    width: ${props => props.size === "mini" ? "180px" : "300px"};
    height: ${props => props.size === "mini" ? "250px" : "400px"};
    gap: 100px;
    font-size: ${props => props.size === "mini" ? "12px" : "18px"};
    background-color:${props => props.theme === "dark" ? themeColors.light.background : themeColors.dark.background  };
    border-radius: 15px;
    border: solid 3px ${ props => props.theme === "dark" ? themeColors.dark.borderColor : themeColors.light.borderColor };
    padding: 20px;
    position: relative;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    box-shadow: 0 7px 10px ${ props => props.theme === "dark" ? themeColors.dark.boxShadow : themeColors.light.boxShadow };
    box-shadow-color: red;
    color: var(--color-white-glow);
    overflow: hidden;

    &:hover{
        box-shadow: 0 0 10px ${ props => props.theme === "dark" ? themeColors.dark.boxShadow : themeColors.light.boxShadow };
        animation: glowing infinite 1.3s linear;
    }

    @keyframes glowing{
        
        25%{
            box-shadow: 0 0 20px var(--color-white-glow);
            transition: 1s;
        }
        50%{
            box-shadow: 0 0 40px var(--color-white-glow);
            transition: 1s; 
        }
        75%{
            box-shadow: 0 0 20px var(--color-white-glow);
            transition: 1s; 
        }
        100%{
            box-shadow: 0 0 10px var(--color-white-glow);
            transition: 1s; 
        } 
     }

    .pokemon-infos{
        display: flex;
        flex-direction: column;
        padding: 0 10px 10px 10px;
        border-radius: 15px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${props => props.size === "mini" ? "60px" : "130px"};
        font-weight: 600;
        background-color: var(--transparent-black);
        backdrop-filter: blur(3px);
        transition: height 0.3s ease-in-out;
    }

    .pokemon-infos .infos{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .pokemon-infos .infos p{
        background-color: var(--transparent-white);
        border-radius: 15px;
        padding-inline: 10px;
        color: var(--color-blue-600);
        margin-top: 2px;
    }


    .pokemon-infos .infos h2{
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        transition: 0.3s ease-in-out;
        margin-top: 5px;
    }

    .pokemon-infos:hover.pokemon-infos .infos h2{
        backdrop-filter: blur(20px);
        padding: 10px;
        border-radius: 15px;
        overflow: visible;
        -webkit-line-clamp: inherit;
        margin: 10px 0;
    }

    .pokemon-infos:hover.pokemon-infos{
        height: 60%;
        justify-content: center;
    }

    .pokemon-type{
        display: flex;
        justify-content: space-around;
        overflow: hidden;
        margin-top: 10px;
    }

    img{
        width: 100%;
        height: 100%;
        size: cover;
        border-radius: 15px;
        padding: 15px; 
        position: absolute;
        top: 0;
        left: 0;
        transition: 0.3s ease-in-out;
    }

    img:hover{
        background-color: var(--transparent-white);
        backdrop-filter: blur(5px);
        scale: 1.10;
    }

    img:hover ~ .pokemon-infos{
        height: 10.5%;
    }
`

const SytyledPokemonType = styled.p`
    width: 100%;
    padding-block: 5px;
    margin-inline: 5px;
    text-align: center;
    border: solid 1px var(--color-white-glow);
    border-radius: 15px;
    background-color: ${ props => {
        let color = ""
        pokemonTypesColors.forEach( item => {
            if(item.name === props.type){
                color += item.color
            }
        } )
        return color
    }};
   
`

export { StyledCard, SytyledPokemonType }