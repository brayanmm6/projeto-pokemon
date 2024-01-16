import { PokemonInfosRender } from "../components/pokemon-infos"
import { Menu } from "../components/menu"
import { useContext } from "react"
import { ThemeContext} from "../contexts/theme-context"
import { Loading } from "../styled-components/loading"
import { LoadingContext } from "../contexts/loading-context"

const PokemonInfosPage = () => {

    const { theme } = useContext(ThemeContext)
    const { loading } = useContext(LoadingContext)

    return(
        <>
            <Menu theme={theme.state}>
                { loading && <Loading /> }
            </Menu>
            <PokemonInfosRender theme={theme.state} />  
        </>   
    )
}

export { PokemonInfosPage }