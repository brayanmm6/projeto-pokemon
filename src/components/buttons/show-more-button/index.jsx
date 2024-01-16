import { Button } from "../button";
import { useContext } from "react";
import { ListLimitContext } from "../../../contexts/list-limit-context";
import { moreToshow } from "../../../js/variables";
import { LoadingContext } from "../../../contexts/loading-context";
import { handleShowMoreBtn } from "../../../js/handle-actions";

const ShowMoreButton = () => {

    const { listLimit, setLimit } = useContext( ListLimitContext )
    const { setLoading } = useContext(LoadingContext)

    return(
        <Button onClick={ () => { handleShowMoreBtn({setLimit, setLoading}, listLimit, moreToshow) } }>
            Show More...
        </Button>
    )
}

export { ShowMoreButton }