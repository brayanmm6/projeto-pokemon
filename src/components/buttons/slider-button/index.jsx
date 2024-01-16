import { SliderButtonLabel, SliderButtonCircle } from "../../../styled-components/slider-button"
import { HiddenInput } from "../../../styled-components/slider-button"
import { useContext, useEffect } from "react"
import { ThemeContext } from "../../../contexts/theme-context"

const SliderButton = (props) => {

    const { theme, setTheme } = useContext(ThemeContext)

    localStorage.setItem("theme", theme.state)

    return (
        <>
            <HiddenInput type="checkBox" id={props.inputId} onChange={() => theme.state === "light" ? setTheme({state: "dark"}) : setTheme({state: "light"})} />
            <SliderButtonLabel htmlFor={props.inputId} theme={theme.state} data-testid="theme-toggler">
                <SliderButtonCircle theme={theme.state} />
            </SliderButtonLabel>
        </>
    )
}

SliderButton.defaultProps = {
    inputId: "slider-button-input" 
} 

export { SliderButton }