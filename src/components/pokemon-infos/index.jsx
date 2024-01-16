import { useState, useEffect } from "react"
import { listDefaultValue } from "../../js/variables"
import { MainSection, Infos, SectionPokemonInfos, SectionMainInfos, SectionMoreInfos, PokemonStats, Abilities, AsideCards, PokemonMovesContainer, TitleHeader } from "../../styled-components/pokemon-infos"
import { useParams } from "react-router-dom"
import { pokemonSearch } from "../../js/services/pokemon-search"
import { setPokemonAbilities, setPokemonMoves } from "../../js/services/set-pokemon-infos"
import { Main } from "../main"
import { SytyledPokemonType } from "../../styled-components/card"
import { useContext } from "react"
import { LoadingContext } from "../../contexts/loading-context"
import { SearchContext } from "../../contexts/search-context"
import { ListLimitContext } from "../../contexts/list-limit-context"
import { CardsContext } from "../../contexts/cards-context"
import { Button } from "../buttons/button"
import { ShowMoreButton } from "../buttons/show-more-button"
import { PokemonfilterContext } from "../../contexts/pokemon-filter"
import CardsRender from "../cards"
import { WarningMessage } from "../warning-box"
import { ErrorContext } from "../../contexts/error-context"
import { handleFilter } from "../../js/handle-actions"

const PokemonInfosRender = (props) => {

    const { setLoading } = useContext(LoadingContext)
    const { setFilter } = useContext(PokemonfilterContext)
    const { setInfos, cardSize, setCardSize } = useContext(CardsContext)
    const { setSearch } = useContext(SearchContext)
    const { setLimit } = useContext(ListLimitContext)
    const { error } = useContext(ErrorContext)

    const [currentPokemon, setCurrentPokemon] = useState({
        data: [],
    })

    const [abilities, setAbilities] = useState({
        data: [],
    })

    const [moves, setMoves] = useState({
        data: []
    })

    const { id } = useParams()

    async function fetchData() {
        const pokemon = await pokemonSearch(id)
        setCurrentPokemon({ data: await pokemon })
        setPokemonAbilities(await pokemon, setAbilities)
        setPokemonMoves(await pokemon, setMoves, setLoading)
    }

    useEffect(() => {
        fetchData()
        setCardSize({ size: "mini" })
        setSearch({ data: "default" })
    }, [id])

    return (
        <>
            {error.state && <WarningMessage />}
            <Main theme={props.theme} >
                <MainSection>
                    <SectionPokemonInfos >
                        <Infos >
                            {
                                currentPokemon.data.name &&
                                <SectionMainInfos theme={props.theme} data-testid={"main-infos"}>
                                    <h2 className="pokemon-name">{currentPokemon.data.name}</h2>
                                    <img className="pokemon-image" src={currentPokemon.data.sprites.other["official-artwork"].front_default ?? currentPokemon.data.sprites.front_default}   alt={currentPokemon.data.name} />
                                </SectionMainInfos>
                            }
                            <SectionMoreInfos theme={props.theme} data-testid={"more-infos"}>
                                <p className="pokemon-id">ID: #{currentPokemon.data.id}</p>
                                <div className="pokemon-type" data-testid={"pokemon-types"}>
                                    {
                                        currentPokemon.data.types && 
                                        currentPokemon.data.types.map((pokemonType, index) => {
                                            let type = pokemonType.type.name
                                            return (
                                                <Button key={index} value={type} onClick={() => handleFilter({setFilter, setInfos, setLimit, setSearch}, type, listDefaultValue) }>
                                                    <SytyledPokemonType type={type}>{type}</SytyledPokemonType>
                                                </Button>
                                            ) 
                                        }) 
                                    }
                                </div>
                                <PokemonStats data-testid={"pokemon-stats"}>
                                    {
                                        currentPokemon.data.stats &&
                                        currentPokemon.data.stats.map((stat, index) => {
                                            return (
                                                <li key={index}>
                                                    <label htmlFor={stat.base_stat}>{stat.stat.name}</label>
                                                    <div className="progress-container">
                                                        <progress id={stat.base_stat} max="150" value={stat.base_stat}></progress>
                                                        <span>{stat.base_stat}</span>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </PokemonStats>
                                <div className="basic-infos">
                                    <p className="base-xp">Base xp: {currentPokemon.data.base_experience}</p>
                                    <p className="height">Height: {currentPokemon.data.height}</p>
                                    <p className="weight">weight: {currentPokemon.data.weight}</p>
                                </div>
                            </SectionMoreInfos>
                        </Infos>

                        <AsideCards theme={props.theme}>
                            <CardsRender size={cardSize.size} />
                            <ShowMoreButton />
                        </AsideCards>
                    </SectionPokemonInfos>
                    <Abilities theme={props.theme} data-testid={"abilities"}>
                        <TitleHeader>
                            <h2>Habilities:</h2>
                        </TitleHeader>
                        {abilities.data.map((ability, index) => {
                            return (
                                <li key={index} >
                                    <h2> {ability.name} </h2>
                                    {ability.effect_entries.map(effect => {
                                        return (effect.language.name === "en" && <p key={index}>{effect.effect}</p>)
                                    })}
                                </li>
                            )
                        })}
                    </Abilities>
                </MainSection>

                <PokemonMovesContainer theme={props.theme} data-testid="moves">
                    <TitleHeader className="title">
                        <h2>Move List: </h2>
                    </TitleHeader>
                    <ul>
                        {moves.data.map((move, index) => {
                            return (
                                <li key={index}>
                                    <div className="infos">
                                        <h2 className="name">{move.name ?? "nada"}</h2>
                                        <span className="power">Power: {move.power ?? "No register."}</span>
                                    </div>
                                    {move.effect_entries.map(effect => {
                                        return (
                                            <p key={index} className="description">{effect.effect}</p>
                                        )
                                    })}
                                </li>
                            )
                        })}
                    </ul>
                </PokemonMovesContainer>
            </Main>
        </>
    )

}

export { PokemonInfosRender }