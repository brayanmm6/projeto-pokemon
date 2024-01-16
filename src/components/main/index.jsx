import { StyledMain } from "../../styled-components/main"

const Main = (props) => {
    
    return (
        <StyledMain theme={props.theme} data-testid="main-container"> 
            {props.children} 
        </StyledMain>
    )
}

export { Main } 