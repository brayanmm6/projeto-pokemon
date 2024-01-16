import { screen, render } from "@testing-library/react";
import { SkyBackground } from "../../components/sky-background/sky-background";
import "@testing-library/jest-dom"
import { ThemeContext } from "../../contexts/theme-context";

describe("Sky background component. That change when theme State also change.", () => {
    
    const renderSkyBackground = (themeState) => {

        const theme = {state: themeState}
        
        render(
            <ThemeContext.Provider value={{theme}}>
                <SkyBackground />
            </ThemeContext.Provider>
        )
    }

    it("Should render currectly light theme background component when theme state is light.", () => {
        renderSkyBackground("light")
        const lightMode = screen.getByTestId("light-mode")
        expect(lightMode).toBeInTheDocument() 
    }) 

    it("Should render currectly dark theme background component when theme state is dark.", () => {
        renderSkyBackground("dark")
        const darkMode = screen.getByTestId("dark-mode")
        expect(darkMode).toBeInTheDocument() 
    })  

}) 