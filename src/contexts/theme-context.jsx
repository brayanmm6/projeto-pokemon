import { createContext, useState } from "react";

const ThemeContext = createContext({})

const ThemeProvider = (props) => {

    const savedThemeState = localStorage.getItem("theme")

    const [ theme, setTheme ] = useState({
        state: savedThemeState ? savedThemeState : "light",
    })

    return(
        <ThemeContext.Provider value={{theme, setTheme}} >
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }