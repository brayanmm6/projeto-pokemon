import styled from "styled-components"
import { themeColors } from "../../js/objects"

const StyledMain = styled.main`
    padding: 40px 20px;
    width: 100%;
    max-width: 1800px;
    height: 100%;
    margin: 20px auto;
    background-color: ${ props => props.theme === "dark" ? themeColors.dark.background : themeColors.light.background };
    backdrop-filter: blur(5px); 
    box-shadow: 0 7px 10px ${ props => props.theme === "dark" ? themeColors.dark.boxShadow : themeColors.light.boxShadow };
    display: flex;
    justify-content: center;
    gap: 30px 25px;
    flex-wrap: wrap; 
    border-radius: 15px;
    border: solid 1px ${ props => props.theme === "dark" ? themeColors.dark.borderColor : themeColors.light.borderColor };
    transition: 0.4s ease-in-out;
    diplay: flex;
    flex-direction: column;
    align-items: center;
`

export { StyledMain }