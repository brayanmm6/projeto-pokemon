import { Card } from "../card";
import { useEffect, useContext, memo } from "react";
import { SytyledPokemonType } from "../../styled-components/card";
import { CardsContainer } from "../../styled-components/cards-container";
import { ListLimitContext } from "../../contexts/list-limit-context";
import { CardsContext } from "../../contexts/cards-context";
import { Link } from "react-router-dom"
import { setPokemons, setPokemonsByfilter, setPokemonsBySearch } from "../../js/services/set-pokemon-infos";
import { PokemonfilterContext } from "../../contexts/pokemon-filter";
import { SearchContext } from "../../contexts/search-context";
import { ThemeContext } from "../../contexts/theme-context";
import { LoadingContext } from "../../contexts/loading-context";
import { ErrorContext } from "../../contexts/error-context";

const CardsRender = (props) => {
    const { cardInfos, setInfos, cardSize } = useContext(CardsContext)
    const { listLimit } = useContext(ListLimitContext)
    const { pokemonFilter } = useContext(PokemonfilterContext)
    const { search, setSearch } = useContext(SearchContext)
    const { theme } = useContext(ThemeContext)
    const { setLoading } = useContext(LoadingContext)
    const { setError, setErrorMessage } = useContext(ErrorContext)

    useEffect(() => {
        if (search.data === "default") {
            pokemonFilter.filter === "default" ? setPokemons(cardInfos, setInfos, listLimit, setLoading) : setPokemonsByfilter(cardInfos, setInfos, pokemonFilter.filter, listLimit, setLoading)
        } else {
            setPokemonsBySearch(search.data, setInfos, setLoading, setError, setErrorMessage)
            search.data.length === 0 && setSearch({ data: "default" })
        }

    }, [listLimit, pokemonFilter, search.data])

    let count = 0
    return (
        <CardsContainer size={props.size} data-testid={"cards-container"}>
            {cardInfos.data.map(pokemonInfo => {

                count += 1
                let pokemon = pokemonInfo

                if (search.data === "default") {
                    if (pokemonFilter.filter === "default") {
                        pokemon = cardInfos.data.find(info => {
                            return info.id === count
                        })
                    }
                }

                if (pokemon) {
                    if (pokemon.id) {
                        return (
                            <Link to={`/pokemon/infos/id/${pokemon.id}`} key={pokemon.id} className="pokemon-card" >
                                <Card theme={theme.state} size={cardSize.size} >
                                    <img src={pokemon.sprites.other["official-artwork"].front_default ?? pokemon.sprites.front_default} alt={pokemon.name} />
                                    <div className="pokemon-infos" >
                                        <div className="infos" >
                                            <h2>{pokemon.name}</h2>
                                            <p>ID: #{pokemon.id}</p>
                                        </div>
                                        <div className="pokemon-type" >
                                            {pokemon.types.map((pokemonType, index) => {
                                                let type = pokemonType.type.name
                                                return (
                                                    <SytyledPokemonType key={index} type={type} >{type}</SytyledPokemonType>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        )
                    }
                }
            })}
        </CardsContainer>
    )
}

export default memo(CardsRender)