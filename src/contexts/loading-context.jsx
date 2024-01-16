import { createContext, useState } from "react";

const LoadingContext = createContext({})

const LoadingProvider = (props) => {

    const [ loading, setLoading ] = useState(false)

    return(
        <LoadingContext.Provider value={{loading, setLoading}}>
            {props.children}
        </LoadingContext.Provider>
    )
}

export { LoadingContext, LoadingProvider }