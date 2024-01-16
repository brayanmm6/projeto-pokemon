import styled from "styled-components"
import { themeColors } from "../../js/objects"

const StyledHeader = styled.header`
    padding: 20px;
    height: 80px;
    width: 100%;
    max-width: 1800px;
    background-color:${ props => props.theme === "dark" ? themeColors.dark.background : themeColors.light.background };
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    backdrop-filter: blur(5px);
    box-shadow: 0 5px 5px ${ props => props.theme === "dark" ? themeColors.dark.boxShadow : themeColors.light.boxShadow };
    border-radius: 15px;
    border: solid 1px ${ props => props.theme === "dark" ? themeColors.dark.borderColor : themeColors.light.borderColor };
    transition: 0.4s ease-in-out;

    & img{
        width: 170px;
    }
`

export { StyledHeader }
