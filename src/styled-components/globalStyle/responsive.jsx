import { createGlobalStyle } from "styled-components"
import { AsideCards, SectionPokemonInfos, SectionMainInfos, SectionMoreInfos, PokemonStats, Abilities, Infos, PokemonMovesContainer } from "../pokemon-infos"
import { StyledHeader } from "../header"
import { StyledMain } from "../main"
import { StyledToolbar } from "../toolbar"
import { StyledSearchInput, StyledSearchBox } from "../search-box"

const Responsive = createGlobalStyle`
    @media(max-width: 1300px){
        ${Infos}{
            flex-wrap: wrap;
            width: 100%;
        }
        ${SectionMainInfos}{
            max-width: 400px;
            margin: 0 auto;
        }
        ${SectionMoreInfos}{
            max-width: 400px;
            margin: 0 auto;
        }
        ${SectionPokemonInfos}{
            height: auto;
            flex-direction: column;
            gap: 10px;
        }
        ${AsideCards}{
            max-width: 100%;
            max-height: 500px;
        }
    }

    @media(max-width: 1215px){
        ${StyledToolbar}{
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
            padding: 20px 5px;
        }
        ${StyledSearchBox}{
            justify-content: space-between;
            width: 100%;
        }
        ${StyledSearchInput}{
            width: 100%;
        }
    }

    @media(max-width: 900px){
        ${Abilities}{
            li{
                flex-direction: column;
            }
        }
        ${PokemonMovesContainer}{
            li{
                flex-direction: column;
            }
        }
    }

    @media(max-width: 600px){
        ${PokemonStats}{
            li{
                flex-direction: column;
                align-items: flex-start;
                
            }
            
            .progress-container{
                justify-content: space-between;
                width: 100%;
            }

            padding: 5px;
        }
        ${SectionMoreInfos}{
            .basic-infos{
                flex-direction: column;
                gap: 10px;
            }
        }
        
    }

    @media(max-width: 450px){
        ${StyledHeader}{
            flex-direction: column;
            height: auto;
            margin-bottom: 10px;
        }
        body{
            padding: 10px;;
        }
        ${StyledMain}{
            padding: 10px; 
            width: 100%;
            margin: 0;
        }
    }
      
`

export { Responsive }