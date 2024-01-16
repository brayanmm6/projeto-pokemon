import { createContext, useState } from "react";

const PokemonfilterContext = createContext({})

const PokemonFilterProvider = (props) => {
    const [ pokemonFilter, setFilter ] = useState({
        filter: "default",
    })

    return(
        <PokemonfilterContext.Provider value={{ pokemonFilter, setFilter }}>
            { props.children }
        </PokemonfilterContext.Provider>
    )
}


export { PokemonFilterProvider, PokemonfilterContext }