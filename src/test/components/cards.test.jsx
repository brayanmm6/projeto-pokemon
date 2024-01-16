import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom"
import CardsRender from "../../components/cards"
import { CardsContext } from "../../contexts/cards-context";
import { ListLimitContext } from "../../contexts/list-limit-context";
import { PokemonfilterContext } from "../../contexts/pokemon-filter";
import { SearchContext } from "../../contexts/search-context";
import { ThemeContext } from "../../contexts/theme-context";
import { LoadingContext } from "../../contexts/loading-context";
import { ErrorContext } from "../../contexts/error-context";
import { BrowserRouter } from "react-router-dom";
import * as pokemonList from "../../js/services/pokemon-list"
import { fakePokemonCardsInfos } from "../fakeInfos";

describe("My Cards component that render all Pokemon cards with the informations.", () => {
    const getPokemonInfos = jest.spyOn(pokemonList, "getPokemonInfos")
    const pokemonFilter = { filter: "default" }
    const search = { data: "default" }
    const setSearch = jest.fn() 
    const setLoading = jest.fn()
    const setInfos = jest.fn()
    const cardSize = "" 
    const listLimit = {value: 2}     
    const theme = ""
    const setTheme = jest.fn()
    const setError = jest.fn()
    const setErrorMessage = jest.fn()

    const renderCards = (newData) => {
        const cardInfos = { data: newData } 
        render(
            <BrowserRouter>
                <ListLimitContext.Provider value={{ listLimit }}>
                    <PokemonfilterContext.Provider value={{ pokemonFilter }}>
                        <SearchContext.Provider value={{ search, setSearch }}>
                            <ThemeContext.Provider value={{ theme, setTheme }}>
                                <LoadingContext.Provider value={{ setLoading }}>
                                    <ErrorContext.Provider value={{ setError, setErrorMessage }}>
                                        <CardsContext.Provider value={{ cardInfos, setInfos, cardSize }}>
                                            <CardsRender />
                                        </CardsContext.Provider>
                                    </ErrorContext.Provider>
                                </LoadingContext.Provider>
                            </ThemeContext.Provider>
                        </SearchContext.Provider>
                    </PokemonfilterContext.Provider>
                </ListLimitContext.Provider>
            </BrowserRouter>
        )
    }

    beforeEach( async () => {
        getPokemonInfos.mockReturnValue(new Promise(resolve => {
            resolve(fakePokemonCardsInfos)
        }))
        renderCards(await getPokemonInfos())
    })

    it("Shuold render cards container currectly.", () => {
        const cardsContainer = screen.getByTestId("cards-container")
        expect(cardsContainer).toBeInTheDocument()   
    })

    it("Should render Card component whith informations about pokemon.", () => {
        const pokemonName = screen.getByText("bulbasaur") 
        expect(pokemonName).toBeInTheDocument()    
    })

    it("Should not repeat pokemons with the same name.", () => {
        const pokemonName = screen.getAllByText("bulbasaur")
        expect(pokemonName.length).toEqual(1)
    })

    it("Should render img tag with primary url in the condition.", () => {
        const pokemonImage = screen.getByAltText("bulbasaur")
        expect(pokemonImage.src).toContain("sprites/pokemon/other/official-artwork")
    })

    it("Should render img tag with secoundary url in the condition when primary is not exist.", () => {
        const pokemonImage = screen.getByAltText("ivysaur")
        expect(pokemonImage.src).toContain("sprites/master/sprites/pokemon")
    })
})
 