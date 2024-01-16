import { createContext, useState } from "react";

const CardsContext = createContext({})

const CardsProvider = (props) => {
    const [ cardInfos, setInfos ] = useState({
        data: [],
    })

    const [ cardSize, setCardSize ] = useState({
        size: "default",
    })

    return(   
        <CardsContext.Provider value={{ cardInfos, setInfos, cardSize, setCardSize}}>
            {props.children}
        </CardsContext.Provider>
    )
    
}

export { CardsContext, CardsProvider }