import { Cloud, CloudContainer } from "../../styled-components/sky-background/day"
import { randomPositions } from "../../js/services/random-positions"
import { useEffect } from "react"

const Clouds = () => {

    useEffect( () => {
        randomPositions("cloud", 100, 98)
    } )

    return(
        <CloudContainer>
                <Cloud className="cloud"></Cloud>
                <Cloud className="cloud"></Cloud>
                <Cloud className="cloud"></Cloud>
                <Cloud className="cloud"></Cloud>
                <Cloud className="cloud"></Cloud>
                <Cloud className="cloud"></Cloud>
                <Cloud className="cloud"></Cloud>
                <Cloud className="cloud"></Cloud>
                <Cloud className="cloud"></Cloud>
                <Cloud className="cloud"></Cloud>
                <Cloud className="cloud"></Cloud>
                <Cloud className="cloud"></Cloud>
                <Cloud className="cloud"></Cloud>
                <Cloud className="cloud"></Cloud>
            </CloudContainer>
    )
}

export { Clouds }