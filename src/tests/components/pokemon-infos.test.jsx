import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"
import { PokemonInfosRender } from "../../components/pokemon-infos";
import { BrowserRouter } from "react-router-dom";
import { LoadingContext } from "../../contexts/loading-context";
import { PokemonfilterContext } from "../../contexts/pokemon-filter";
import { CardsContext } from "../../contexts/cards-context";
import { SearchContext } from "../../contexts/search-context";
import { ListLimitContext } from "../../contexts/list-limit-context";
import { ErrorContext } from "../../contexts/error-context";
import { ThemeContext } from "../../contexts/theme-context";
import * as pokemonSearch from "../../js/services/pokemon-search"
import { act } from "react-dom/test-utils";
import { fakeBasicPokemonInfos, fakePokemonCardsInfos } from "../fakeInfos";
import * as pokemonList from "../../js/services/pokemon-list"

describe("Component that should be rendered in the secound page.", () => {
    const pokemon = jest.spyOn(pokemonSearch, "pokemonSearch")
    const getPokemonInfos = jest.spyOn(pokemonList, "getPokemonInfos")
    const setLoading = jest.fn()
    const setFilter = jest.fn()
    const pokemonFilter = {filter: "default"}
    const setInfos = jest.fn()
    const cardSize = ""
    const setCardSize = jest.fn()
    const search = {data: "default"}
    const setSearch = jest.fn()
    const listLimit = {value: ""}
    const setLimit = jest.fn()
    const error = ""
    const theme = {state: "light"}
    const setCurrentPokemon = jest.fn()
    const setAbilities = jest.fn()
    const setPokemonAbilities = jest.fn()
    const setPokemonMoves = jest.fn()
    const setMoves = jest.fn()

    const renderPokemonInfos = (newPokemonInfos) => {
        const cardInfos = {data: newPokemonInfos}
        render(
            <BrowserRouter>
                <ThemeContext.Provider value={{theme}}>
                    <LoadingContext.Provider value={{ setLoading }}>
                        <PokemonfilterContext.Provider value={{ pokemonFilter, setFilter }}>
                            <CardsContext.Provider value={{ cardInfos, setInfos, cardSize, setCardSize }}>
                                <SearchContext.Provider value={{ search, setSearch }}>
                                    <ListLimitContext.Provider value={{ listLimit, setLimit }}>
                                        <ErrorContext.Provider value={{ error }}>
                                            <PokemonInfosRender />
                                        </ErrorContext.Provider>
                                    </ListLimitContext.Provider>
                                </SearchContext.Provider>
                            </CardsContext.Provider>
                        </PokemonfilterContext.Provider>
                    </LoadingContext.Provider>
                </ThemeContext.Provider>
            </BrowserRouter>
        )
    }

    beforeEach(async () => {
        pokemon.mockReturnValue(new Promise(resolve => {
            resolve(fakeBasicPokemonInfos)
        }))

        getPokemonInfos.mockReturnValue(new Promise(resolve => {
            resolve(fakePokemonCardsInfos)
        }))
        renderPokemonInfos(await getPokemonInfos())
        await act(async () => {
            setCurrentPokemon(pokemon) 
            setPokemonAbilities(pokemon, setAbilities) 
            setPokemonMoves(pokemon, setMoves, setLoading)
            setCardSize({ size: "mini" })
            setSearch({ data: "default" })
        })
    })

    it("Should render Main Infos currectly.", async () => {
        await waitFor( () => {
            const mainInfos = screen.getByTestId("main-infos")
            expect(mainInfos).toContainHTML("bulbasaur")
        } )
    }) 

    it("Should render more Infos section currectly.", async () => {
        await waitFor( () => {
            const moreInfosSection = screen.getByTestId("more-infos")
            expect(moreInfosSection).toContainHTML("ID: #1")
        } )
    })

    it("Should render a type from the current pokemon currectly.", async () => {
        await waitFor( async () => {
            const pokemonTypes = screen.getByTestId("pokemon-types")
            expect(pokemonTypes).toContainHTML("poison")
        })
    })

    it("Should render pokemon stats section currectly.", async () => {
        await waitFor( () => {
            const pokemonStats = screen.getByTestId("pokemon-stats")
            expect(pokemonStats).toBeInTheDocument()
        })  
    })

    it("A progress bar should be the currect value.", async () => {
        await waitFor( () => {
            const pokemonStat = screen.getByLabelText("attack")
            const baseValue = fakeBasicPokemonInfos.stats.find( stat => stat.stat.name === "attack"  )
            expect(pokemonStat.value).toEqual(baseValue.base_stat)
        } )
    })

    it("Aside cards whith the Cards container, should render currectly.", async () => {
        await waitFor( () => {
            const cardsContainer = screen.getByTestId("cards-container")
            expect(cardsContainer).toContainHTML("ivysaur")
        } )
    })

    it("Should render Abilities section currectly with at least one ability.", async () => {
        await waitFor( () => {
            const abilitiesSection = screen.getByTestId("abilities")
            expect(abilitiesSection).toContainHTML("overgrow")
        } )
    })

    it("Should render Moves container with at least move name.", async () => {
        await waitFor( ()  => {
            const movesContainer = screen.getByTestId("moves")
            expect(movesContainer).toContainHTML("razor-wind")
        })
    })

    it("Should render description about the move.", async () => {
        await waitFor( () => {
            const movesContainer = screen.getByTestId("moves")
            expect(movesContainer).toContainHTML("Inflicts regular damage.")
        })
    })

    it("Should render power value of the move.", async () => {
        await waitFor( () => {
            const movesContainer = screen.getByTestId("moves")
            expect(movesContainer).toContainHTML("Power: 80")
        } )
    })

    it("Should render alternative text when power information isn't found.", async () => {
        await waitFor( () => {
            const movesContainer = screen.getByTestId("moves")
            expect(movesContainer).toContainHTML("No register.")
        } )
    })
}) 
