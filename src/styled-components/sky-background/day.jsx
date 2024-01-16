import styled from "styled-components";

const DaySkyContainer = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background: var(--color-day-gradient);
    backgorund-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding: 20px;
    overflow: hidden;
`

const Sun = styled.div`
    width: 200px;
    height: 200px;
    background-color: var(--color-yellow-300);
    border-radius: 50%;
    margin: 20px;
    box-shadow: 0 0 10px var(--color-white-glow);
    position: fixed;
    top: 5%;
    right: 5%;
    animation: glowing infinite 6s linear;   
`

const CloudContainer = styled.div`
    width: 100%;
    height: 900px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    overflow: visible;
    animation: moving 90s infinite linear;

    @keyframes moving {
        from{
            transform: translateX(-100%)
        }
        to{
            transform: translateX(100%)
        } 
    }
`

const Cloud = styled.div`
    width: 150px;
    height: 50px;
    background-color: white;
    border-radius: 50px;
    margin: 30px 10px;
    position: absolute;

    &:after{
        content: "";
        width: 70px;
        height: 50px;
        background-color: white;
        display: block;
        border-radius: 50px;
        position: absolute;
        top: -20px;
        left: 30px;
    }

    &:before{
        content: "";
        width: 70px;
        height: 50px;
        background-color: white;
        display: block;
        border-radius: 50px;
        position: absolute;
        top: -10px;
        right: 30px;
    }
`

export { DaySkyContainer, Sun, CloudContainer, Cloud }