import styled from "styled-components"

const NightSkyContainer = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background: var(--color-night-gradient);
    backgorund-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding: 20px;
`

const StarsContainer = styled.div`
    width: 100%;
    height: 800px;
    position: relative;
    overflow: hidden;
`

const Star = styled.div`
    width: 5px;
    height: 5px;
    margin: 20px;
    position: absolute;
    border-radius: 50%;
    background-color: var(--color-white-glow);
    box-shadow: 0 0 10px var(--color-white-glow);
`

const Moon = styled.div`
    width: 200px;
    height: 200px;
    background-color: var(--color-white-glow);
    border-radius: 50%;
    margin: 20px;
    box-shadow: 0 0 10px var(--color-white-glow);
    position: fixed;
    top: 5%;
    right: 5%;
    animation: glowing infinite 6s linear;
`

export { NightSkyContainer, StarsContainer, Star, Moon }