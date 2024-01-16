import { Main } from "../components/main";
import CardsRender from "../components/cards";
import { ShowMoreButton } from "../components/buttons/show-more-button";
import { Menu } from "../components/menu";
import { Toolbar } from "../components/toolbar";
import { useContext } from "react";
import { SearchContext } from "../contexts/search-context";
import { ThemeContext } from "../contexts/theme-context";
import { LoadingContext } from "../contexts/loading-context";
import { Loading } from "../styled-components/loading";
import { WarningMessage } from "../components/warning-box";
import { ErrorContext } from "../contexts/error-context";

const Home = () => {

    const { search } = useContext(SearchContext)
    const { theme } = useContext(ThemeContext)
    const { loading } = useContext(LoadingContext)
    const { error } = useContext(ErrorContext)

    return (
        <>
            { error.state && <WarningMessage /> }
            <Menu theme={theme.state} /> 
            <Main theme={theme.state} >
                <Toolbar theme={theme.state} />
                <CardsRender theme={theme.state} />
                {loading && <Loading />}
                {search.data === "default" && <ShowMoreButton /> }
            </Main>
        </>
    )
}

export { Home } 