import styled from "styled-components"
import { themeColors } from "../../js/objects"

const StyledToolbar = styled.header`
    width: 86%;
    background-color:${ props => props.theme === "dark" ? themeColors.light.background : themeColors.dark.background };
    color: #fff;
    padding: 20px;
    border-radius: 15px;
    position: relative; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 5px 5px ${ props => props.theme === "dark" ? themeColors.dark.boxShadow : themeColors.light.boxShadow };
    border: solid 1px ${ props => props.theme === "dark" ? themeColors.dark.borderColor : themeColors.light.borderColor };
    transition: 0.4s ease-in-out;
` 

export { StyledToolbar }