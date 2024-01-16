import { WarningBoxContainer, WarningBox } from "../../styled-components/warning-box";
import { Button } from "../buttons/button";
import { useContext } from "react";
import { ErrorContext } from "../../contexts/error-context";
import { LoadingContext } from "../../contexts/loading-context";
import { crossSymbol, alertSymbol } from "../../js/variables";

const WarningMessage = () => {

    const { error, setError, errorMessage } = useContext(ErrorContext)
    const { setLoading } = useContext(LoadingContext)

    error.state && setLoading(false)

    return(
        <WarningBoxContainer>
            <WarningBox>
                {alertSymbol}
                <h1>{errorMessage.message}</h1>
                <Button onClick={ ()=> setError({state: false}) }>{crossSymbol}</Button>
            </WarningBox>
        </WarningBoxContainer>
    )
}

export { WarningMessage }