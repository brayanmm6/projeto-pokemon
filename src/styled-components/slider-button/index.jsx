import styled, { css } from "styled-components"
import { themeColors } from "../../js/objects"

const SliderButtonLabel = styled.label`
    width: 86px;
    height: 30px;
    background-color: ${props => props.theme === "dark" ? themeColors.dark.background : themeColors.light.background  };
    border-radius: 20px;
    border: solid 0.5px ${props => props.theme === "dark" ? themeColors.dark.borderColor : themeColors.light.borderColor  };
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 3px 5px  ${props => props.theme === "dark" ? themeColors.dark.boxShadow : themeColors.light.boxShadow  };
    transition: 0.4s ease-in-out;
    cursor: pointer;
`

const SliderButtonCircle = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: var(--transparent-blue);
    transition: 0.3s ease-in-out;
    margin: 3px;
    ${props => props.theme === "dark" && css `translate: 204%`};
    background-color: ${props => props.theme === "dark" ? "var(--color-blue-100)" : "var(--color-yellow-300)" } ; 
`

const HiddenInput = styled.input`
    display: none;
`

export { SliderButtonLabel, SliderButtonCircle, HiddenInput }