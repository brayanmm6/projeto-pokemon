import { createContext, useState } from "react";

const ListLimitContext = createContext({})

const LisLimitProvider = (props) => {
    const [ listLimit, setLimit ] = useState({
        value: 0,
    })

    return(
        <ListLimitContext.Provider value={{listLimit, setLimit}}>
            { props.children }
        </ListLimitContext.Provider>
    )
}

export { ListLimitContext, LisLimitProvider }