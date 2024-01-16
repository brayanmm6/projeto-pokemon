import { createContext, useState } from "react";
import { listDefaultValue } from "../js/variables";

const ListLimitContext = createContext({})

const LisLimitProvider = (props) => {
    const [ listLimit, setLimit ] = useState({
        value: listDefaultValue,
    })

    return(
        <ListLimitContext.Provider value={{listLimit, setLimit}}>
            { props.children }
        </ListLimitContext.Provider>
    )
}

export { ListLimitContext, LisLimitProvider }