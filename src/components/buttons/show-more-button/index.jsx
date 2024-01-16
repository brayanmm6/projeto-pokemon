import { Button } from "../button";
import { useContext } from "react";
import { ListLimitContext } from "../../../contexts/list-limit-context";
import { moreToshow } from "../../../js/variables";
import { LoadingContext } from "../../../contexts/loading-context";

const ShowMoreButton = () => {

    const { listLimit, setLimit } = useContext( ListLimitContext )
    const { setLoading } = useContext(LoadingContext)

    return(
        <Button onClick={ () => {
            setLimit({value: listLimit.value + moreToshow })
            setLoading(true)
        } }>
            Show More...
        </Button>
    )
}

export { ShowMoreButton }