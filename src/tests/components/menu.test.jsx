import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { Menu } from "../../components/menu";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme-context";

describe("Menu with theme button and logo.", () => {
    const theme = { state: "" }
    const setTheme = jest.fn()

    beforeEach(() => {
        render(
            <BrowserRouter>
                <ThemeContext.Provider value={{theme, setTheme}}>
                    <Menu />
                </ThemeContext.Provider>
            </BrowserRouter>  
        )
    })

    it("Should render Logo image currectly.", () => {
        const logo = screen.getByRole("img")
        expect(logo).toBeInTheDocument()
    })

    it("Should return to Home page when the logo is clicked.", () => {
        const logo = screen.getByRole("img")
        fireEvent.click(logo)
        const secoundPageText = screen.queryByText("Move List")
        expect(secoundPageText).not.toBeInTheDocument()  
    })

    it("Should render the theme toggler button currectly", () => {
        const themeToggler = screen.getByTestId("theme-toggler")
        expect(themeToggler).toBeInTheDocument()
    })

    it("Theme toggler button should call the setTheme function to change the theme.", () => {
        const themeToggler = screen.getByTestId("theme-toggler") 
        fireEvent.click(themeToggler) 
        expect(setTheme).toHaveBeenCalled()  
    }) 
}) 
