import { mainUrl, pokeInfoUrl } from "../variables"

const getPokemonNames = async (limit, offset) => {
    const url = `${mainUrl}/pokemon?limit=${limit}&offset=${offset}` 
    const response = await fetch(url)
    return await response.json()
}

const getPokemonInfos = async (pokemon) => {
    const url = `${pokeInfoUrl}/${pokemon}`
    const response = await fetch(url)
    return await response.json()
}

const getPokemonMoves = async (moveName) => {
    const url = `https://pokeapi.co/api/v2/move/${moveName}/`
    const response = await fetch(url)
    return await response.json()
}

const getPokemonAbilities = async (ability) => {
    const url = `https://pokeapi.co/api/v2/ability/${ability}/`
    const response = await fetch(url)
    return await response.json()
}

export { getPokemonNames, getPokemonInfos, getPokemonMoves, getPokemonAbilities }