import { getPokemonInfos, getPokemonNames } from "./pokemon-list"
import { pokeLimit } from "../variables"
import { getPokemonsByFilter } from "./pokemon-filter"
import { advancedSearch } from "./pokemon-search"
import { getPokemonAbilities, getPokemonMoves } from "./pokemon-list"

const pokemonDataVerify = (pokemonData, setPokemonData, listLimit, newPokemonData, tempData, setLoading) => { 
    if (listLimit.value > pokeLimit) {
        const checkPosition = pokemonData.data.findIndex(item => item.id === newPokemonData.id)
        if (checkPosition < 0) {
            tempData.push(newPokemonData)
            setPokemonData({
                data: [...pokemonData.data, ...tempData]
            })
        }
    } else {
        tempData.push(newPokemonData)
        setPokemonData({
            data: tempData
        })
    }
    setLoading(false)
}

const setPokemons = async (pokemonData, setPokemonData, listLimit, setLoading) => {
    setLoading(true)
    const tempData = []
    const pokemonNames = await getPokemonNames(pokeLimit, listLimit.value)
    const newData = new Promise ((resolve) => {
        pokemonNames.results.forEach(async pokemon => {
            const pokemons = await getPokemonInfos(pokemon.name)
            tempData.push(await pokemons)
            tempData.length === pokemonNames.results.length && resolve(tempData)
        })
    })
    
    pokemonData.data.length > 0 ? setPokemonData({data: [...pokemonData.data, ...await newData]}) : setPokemonData({data: await newData})
    setLoading(false)
}

const setPokemonsByfilter = async (pokemonData, setPokemonData, filter, listLimit, setLoading) => {
    setLoading(true)
    let count = 0
    const tempData = []
    const pokemons = await getPokemonsByFilter(filter)
    pokemons.pokemon.map(async pokemon => {
        count += 1
        if (count <= listLimit.value) {
            const pokemonInfo = await getPokemonInfos(pokemon.pokemon.name)
            pokemonDataVerify(pokemonData, setPokemonData, listLimit, pokemonInfo, tempData, setLoading)
        }
    })
}

const setPokemonsBySearch = async (searchByName, setPokemonData, setLoading, setError, setErrorMessage) => {
    setLoading(true)
    const pokemonsNamesData = await getPokemonNames(2000)
    const searchResult = await advancedSearch(pokemonsNamesData, searchByName, setError, setErrorMessage)
    setPokemonData({ data: searchResult })
    setLoading(false)
}

const setPokemonMoves = async (pokemonData, setPokemonData, setLoading) => {
    setLoading(true)
    const tempData = []
    pokemonData.moves.map( async move => {
        const pokemonMoves = await getPokemonMoves(move.move.name)
        const data = new Promise (async resolve => {
            tempData.push(await pokemonMoves)
            if(tempData.length === pokemonData.moves.length) resolve(tempData)
        })
        setPokemonData({data: await data})
        setLoading(false)
    } )
}

const setPokemonAbilities = async ( pokemonData, setPokemonData) => {
    const tempData = []
    pokemonData.abilities.map( async ability => {
        const abilities = await getPokemonAbilities(ability.ability.name)
        tempData.push(abilities)
        setPokemonData({data: tempData})
    } )
}

export { setPokemons, setPokemonsByfilter, setPokemonsBySearch, setPokemonMoves, setPokemonAbilities }    