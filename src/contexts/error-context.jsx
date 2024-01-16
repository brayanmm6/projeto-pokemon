import { useState, createContext } from "react";

const ErrorContext = createContext({})

const ErrorProvider = (props) => {

    const [ error, setError ] = useState({
        state: false,
    })

    const [ errorMessage, setErrorMessage ] = useState({
       message: "Error Message" 
    })

    return(
        <ErrorContext.Provider value={{error, setError, errorMessage, setErrorMessage}}>
            {props.children}
        </ErrorContext.Provider>
    )
}

export { ErrorContext, ErrorProvider }