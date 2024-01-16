import { Moon, StarsContainer, NightSkyContainer } from "../../styled-components/sky-background/night"
import { Sun, DaySkyContainer } from "../../styled-components/sky-background/day"
import { Clouds } from "./clouds"
import { Stars } from "./stars"
import { ThemeContext } from "../../contexts/theme-context"
import { useContext } from "react"

const SkyBackground = () => {

    const { theme } = useContext(ThemeContext)

    switch (theme.state) {
        case "dark" : {
            return(
                <NightSkyContainer data-testid="dark-mode">
                    <StarsContainer>
                        <Stars/>
                        <Moon />
                    </StarsContainer>
                </NightSkyContainer>  
            )
            break
        }

        case "light" : {
            return(
                <DaySkyContainer data-testid="light-mode"> 
                    <Sun /> 
                    <Clouds />
                </DaySkyContainer>
            )
            break
        }   
    }    
}

export { SkyBackground }