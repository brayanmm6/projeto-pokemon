import { PokemonFilter, StyledBall, CurrentFilter, CurrentFilterContainer } from "../../styled-components/filter"
import { StyledToolbar } from "../../styled-components/toolbar"
import { StyledSearchBox, StyledSearchInput } from "../../styled-components/search-box"
import { pokemonTypesColors } from "../../js/objects"
import { Button } from "../buttons/button"
import { useContext, useEffect } from "react"
import { PokemonfilterContext } from "../../contexts/pokemon-filter"
import { CardsContext } from "../../contexts/cards-context"
import { ListLimitContext } from "../../contexts/list-limit-context"
import { listDefaultValue, crossSymbol } from "../../js/variables"
import { SearchContext } from "../../contexts/search-context"
import { searchByLabel } from "../../js/services/pokemon-search"

const Toolbar = (props) => {
    const { pokemonFilter, setFilter } = useContext(PokemonfilterContext) 
    const { setInfos, setCardSize } = useContext(CardsContext)
    const { setLimit } = useContext(ListLimitContext)
    const { setSearch } = useContext(SearchContext)

    useEffect( () => {
        setCardSize({size: "default"})
    }, [])

    return(
        <StyledToolbar theme={props.theme}>
            <PokemonFilter theme={props.theme} >
                <input type="checkbox" name="accordion" id="accordion" />
                <label className="accordion-label" htmlFor="accordion">Filter by type</label>
                
                {
                    pokemonFilter.filter != "default" && 
                        <CurrentFilterContainer>
                            <CurrentFilter filter={pokemonFilter.filter} theme={props.theme} data-testid={"current-filter"}>{pokemonFilter.filter}</CurrentFilter>
                            <Button onClick={() => setFilter({filter: "default"})} data-testid={"reset-filter"}>{crossSymbol}</Button>
                        </CurrentFilterContainer>
                }
                
                <ul className="filter-options">
                    <li><Button value="default" onClick={() => setFilter({filter: "default"}, setSearch({data: "default"}) )}>{"Default."} <StyledBall type={"default"} theme={props.theme} /> </Button></li>
                    { pokemonTypesColors.map( (pokemonType, index) => {
                        return(
                            <li key={index}>
                                <Button value={pokemonType.name} onClick={ () => setFilter({filter: pokemonType.name}, setInfos({data: []}), setLimit({value: listDefaultValue}), setSearch({data: "default"}) )}> {pokemonType.name} <StyledBall type={pokemonType.name}/> </Button> 
                            </li>
                        )
                    } ) }
                </ul>
            </PokemonFilter>
            <StyledSearchBox >
                <StyledSearchInput data-testid="search-input" type="search" name="pokemon-search" id="pokemon-search" placeholder="Type a Pokémon name." onKeyDown={ (enter) =>  enter.key === "Enter" && setSearch({data: enter.target.value})} onChange={ ( event ) => event.target.value.length === 0 && setSearch({data: "default"})}/>
                <label data-testid={"search-input-label"} htmlFor="pokemon-search" onClick={ () =>  searchByLabel("pokemon-search", setSearch) } ><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></label>
            </StyledSearchBox>
        </StyledToolbar>
    )
}

export { Toolbar }