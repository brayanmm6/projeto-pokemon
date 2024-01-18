import { WarningBoxContainer, WarningBox } from "../../styled-components/warning-box";
import { Button } from "../buttons/button";
import { useContext } from "react";
import { ErrorContext } from "../../contexts/error-context";
import { SearchContext } from "../../contexts/search-context";
import { LoadingContext } from "../../contexts/loading-context";
import { crossSymbol, alertSymbol } from "../../js/variables";
import { Link } from "react-router-dom";
import { handleErrorBtn } from "../../js/handle-actions";

const WarningMessage = () => {

    const { error, setError, errorMessage } = useContext(ErrorContext)
    const { setLoading } = useContext(LoadingContext)
    const { setSearch } = useContext(SearchContext)

    error.state && setLoading(false)

    return(
        <WarningBoxContainer>
            <WarningBox>
                {alertSymbol}
                <h1>{errorMessage.message}</h1>
                <Link to={"/"}>
                    <Button onClick={ () => handleErrorBtn({setError, setSearch})}> {crossSymbol} </Button>
                </Link>
            </WarningBox>
        </WarningBoxContainer>
    )
}

export { WarningMessage }