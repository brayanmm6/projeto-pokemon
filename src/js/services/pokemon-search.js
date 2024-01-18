const pokemonSearch = async (pokemon, setError, setErrorMessage) => {
    if(pokemon > 1025){
        setError({state: true})
        setErrorMessage({message: `The id "${pokemon}" can not be find in the database!`})
    }
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const response = await fetch(url)
    return await response.json()
}

const searchByLabel = (element, setSearch) => {
    const getInput = document.getElementById(element)
    getInput.addEventListener("click", (event) => {
        setSearch({ data: event.target.value })
    })
}

const advancedSearch = async (pokemons, pokemonToFind, setError, setErrorMessage) => {

    const pokemonsNamesData = []
    pokemons.results.forEach(pokemon => {
        pokemonsNamesData.push(pokemon.name)
    })

    const byFirstLetter = []
    const possibilities = []
    let counter = 0

    for (let count = 0; count < pokemonsNamesData.length; count += 1) {
        const current = pokemonsNamesData[count]
        if (current[0] === pokemonToFind[0]) {
            byFirstLetter.push(current)
        }
    }

    if (byFirstLetter.length > 0) {
        byFirstLetter.forEach(pokemonName => {

            if (counter < pokemonName.length) {
                if (pokemonName[counter] === pokemonToFind[counter]) {
                    possibilities.unshift(pokemonName)
                    counter += 1
                }
            }
        })
    } else {
        let message = null
        pokemonToFind.length === 0 ? message = "Please, type something before submit!" : message = `Do not found a Pokemon called "${pokemonToFind}" !` 
        setErrorMessage({message: message})
        setError({state: true})
    }
    const tempData = []
    const searchData = new Promise(resolve => {
        possibilities.forEach(async (possibility) => {
            const search = await pokemonSearch(possibility)
            tempData.push(search)
            tempData.length === possibilities.length && resolve(tempData)
        })
    })
    return await searchData
}

export { pokemonSearch, searchByLabel, advancedSearch }