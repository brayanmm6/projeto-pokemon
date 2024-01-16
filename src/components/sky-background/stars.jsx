import { Star } from "../../styled-components/sky-background/night";
import { randomPositions } from "../../js/services/random-positions";
import { useEffect } from "react";

const Stars = () => {
    useEffect(() => {
        randomPositions("star", 100, 98)
    }, [])

    return(
        <>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
            <Star className="star"></Star>
        </>
    )
}

export { Stars }