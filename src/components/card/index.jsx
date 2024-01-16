import { StyledCard } from "../../styled-components/card"

const Card = (props) => {
    return(
        <StyledCard theme={props.theme} size={props.size} data-testid="card">
            {props.children}
        </StyledCard>
    )
    
}

export { Card }