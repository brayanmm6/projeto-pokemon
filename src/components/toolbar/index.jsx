import { PokemonFilter, StyledBall, CurrentFilter, CurrentFilterContainer } from "../../styled-components/filter"
import { StyledToolbar } from "../../styled-components/toolbar"
import { StyledSearchBox, StyledSearchInput } from "../../styled-components/search-box"
import { pokemonTypesColors } from "../../js/objects"
import { Button } from "../buttons/button"
import { useContext, useEffect } from "react"
import { PokemonfilterContext } from "../../contexts/pokemon-filter"
import { CardsContext } from "../../contexts/cards-context"
import { ListLimitContext } from "../../contexts/list-limit-context"
import { pokeLimit, crossSymbol, searchSymbol } from "../../js/variables"
import { SearchContext } from "../../contexts/search-context"
import { searchByLabel } from "../../js/services/pokemon-search"
import { handleSearchInputByKey, handleSearchInputByChange, handleFilter, handlefilterDefault } from "../../js/handle-actions"

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
                            <Button onClick={() => handlefilterDefault({setFilter, setLimit, setInfos, setSearch})} data-testid={"reset-filter"}>{crossSymbol}</Button>
                        </CurrentFilterContainer>
                }
                
                <ul className="filter-options">
                    <li><Button value="default" onClick={() => handlefilterDefault({setFilter, setLimit, setInfos, setSearch})}>{"Default."} <StyledBall type={"default"} theme={props.theme} /> </Button></li>
                    { pokemonTypesColors.map( (pokemonType, index) => {
                        return(
                            <li key={index}>
                                <Button value={pokemonType.name} onClick={ () => handleFilter({setFilter, setInfos, setLimit, setSearch}, pokemonType.name, pokeLimit)}> {pokemonType.name} <StyledBall type={pokemonType.name}/> </Button> 
                            </li>
                        )
                    } ) }
                </ul>
            </PokemonFilter>
            <StyledSearchBox >
                <StyledSearchInput data-testid="search-input" type="search" name="pokemon-search" id="pokemon-search" placeholder="Type a Pokémon name." onKeyDown={ (enter) =>  handleSearchInputByKey({setSearch, setFilter}, enter)} onChange={ ( event ) => handleSearchInputByChange({setSearch} ,event)}/>
                <label data-testid={"search-input-label"} htmlFor="pokemon-search" onClick={ () =>  searchByLabel("pokemon-search", setSearch) } >{searchSymbol}</label>
            </StyledSearchBox>
        </StyledToolbar>
    )
}

export { Toolbar }