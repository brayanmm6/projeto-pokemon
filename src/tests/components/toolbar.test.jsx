import { Toolbar } from "../../components/toolbar";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"
import { PokemonFilterProvider } from "../../contexts/pokemon-filter";
import { CardsProvider } from "../../contexts/cards-context";
import { LisLimitProvider } from "../../contexts/list-limit-context";
import { SearchContextProvider } from "../../contexts/search-context";
import { BrowserRouter } from "react-router-dom";

describe("Testing component Toolbar that contain the pokemon filter and search input.", () => {
    const setFilter = jest.fn()
    const setInfos = jest.fn()
    const setCardSize = jest.fn()
    const setLimit = jest.fn()
    const setSearch = jest.fn()

    const pokemonName = "bulbasaur"
    const filter = "fire"

    const filterSelection = (filterName) => {
        const filterOption = screen.getByText(filterName) 
        filterOption.addEventListener("click", () => {
            setFilter(filterName === "Default." ? "default" : filterName) 
            setInfos("default") 
            setLimit("default")
            setSearch("default")
        })
        fireEvent.click(filterOption) 
    }

    const searchEventByKey = (elementId, name) => {
        elementId.addEventListener("keydown", (event) => {
            if(event.key === "Enter") setSearch(name)
        })
    }

    const searchEventByClick = (elementId, name) => {
        elementId.addEventListener("click", () => {
            setSearch(name)
       })
    }

    const resetFilter = (elementId) => {
        elementId.addEventListener("click", () => {
            setFilter("default")
        })
    }

    beforeEach(() => {
        render(
            <BrowserRouter>
                <PokemonFilterProvider>
                    <CardsProvider>
                        <LisLimitProvider>
                            <SearchContextProvider>
                                <Toolbar />
                            </SearchContextProvider>
                        </LisLimitProvider>
                    </CardsProvider>
                </PokemonFilterProvider>
            </BrowserRouter>
        ) 
    })

    it("Should render PokemonFilter component currectly.", () => {
        const filterText = screen.getByText("Filter by type")
        expect(filterText).toBeInTheDocument()
    })

    it("Should render Pokemonfilter options currectly.", () => {
        const filterOption = screen.getByText(filter)
        expect(filterOption).toBeInTheDocument() 
    })

    it("Should change setFilter with the correct value.", () => {
        filterSelection(filter)
        expect(setFilter).toHaveBeenCalledWith(filter)
    })

    it("After the setFilter, should set the other values to default.", () => {
        filterSelection(filter)
        expect(setInfos).toHaveBeenCalledWith("default")
        expect(setLimit).toHaveBeenCalledWith("default")
        expect(setSearch).toHaveBeenCalledWith("default")
    })

    it("When filter isn't default, should render my current filter component, that show the current fiilter state.", () => {
        filterSelection(filter)
        const currentFilterComponent = screen.getByTestId("current-filter")
        expect(currentFilterComponent).toBeInTheDocument()
    })

    it("When reset filter button is hitted, the filter state should turn default.", () => {
        filterSelection(filter)
        const resetFilterButton = screen.getByTestId("reset-filter")
        resetFilter(resetFilterButton)
        fireEvent.click(resetFilterButton)
        expect(setFilter).toHaveBeenCalledWith("default")
    })

    it('When filter "Default." is clicked, setFilter should be default.', () => {
        filterSelection("Default.")
        expect(setFilter).toHaveBeenCalledWith("default") 
    })

    it("Search Input should be in the document.", () => {
        const searchInput = screen.getByTestId("search-input") 
        expect(searchInput).toBeInTheDocument()
    })

    it("When the Enter key is pressed, the setSearch process should be ocurre.", () => {
        const searchInput = screen.getByTestId("search-input") 
        searchEventByKey(searchInput, pokemonName)
        fireEvent.keyDown(searchInput, { key: "Enter" })    
        expect(setSearch).toHaveBeenCalledWith(pokemonName) 
    })  

    it("When the search label is clicked, the setSearch process should be ocurre.", () => {
        const searchInputLabel = screen.getByTestId("search-input-label")
        searchEventByClick(searchInputLabel, pokemonName)
        fireEvent.click(searchInputLabel)     
        expect(setSearch).toHaveBeenCalledWith(pokemonName)
    })
})