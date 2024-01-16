import { mainUrl } from "../variables"

const getPokemonsByFilter = async (pokemonType) => {
    const url = `${mainUrl}/type/${pokemonType}`
    const response = await fetch(url)
    return await response.json()
}

export { getPokemonsByFilter }