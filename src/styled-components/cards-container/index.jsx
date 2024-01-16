import styled, { css } from "styled-components"

const CardsContainer = styled.section`
    display: flex;
    width: 100%;
    max-height: 100%;
    flex-wrap: wrap;
    gap: 30px 25px;
    justify-content: center;
    ${props => props.size === "mini" && css `overflow: hidden scroll;` }
`

export { CardsContainer }