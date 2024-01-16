
const randomValue = (multiply, max) => {
    let value = Math.floor(Math.random() * multiply)
    return (value > max ? value = max : value)
}

const randomPositions = (elementsClassName, multiply, maxPercentage) => {
    const elements = document.querySelectorAll(`.${elementsClassName}`)
    elements.forEach( element => {
        element.style.left = `${randomValue(multiply, maxPercentage)}%`;
        element.style.top = `${randomValue(multiply, maxPercentage)}%`;
    } )
}

export { randomPositions, randomValue }