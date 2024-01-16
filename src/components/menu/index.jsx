import { SliderButton } from "../buttons/slider-button"
import { StyledHeader } from "../../styled-components/header"
import  logo  from "../../assets/images/pokemon-logo.png"
import { Link } from "react-router-dom"

const Menu = (props) => {

    return(
        <StyledHeader theme={props.theme}>
            <Link to={"/"}>
                <img src={logo} alt="pokemon-logo" />
            </Link>
            {props.children}
            <SliderButton inputId={"slider-button-input"}/>
        </StyledHeader>
    )
}

export { Menu }