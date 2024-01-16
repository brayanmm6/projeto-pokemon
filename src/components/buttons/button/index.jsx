import { StyledButton } from "../../../styled-components/button"

const Button = (props) => {

    return( 
        <StyledButton { ...props }>
            {props.children}
        </StyledButton>
    )
}

export { Button }