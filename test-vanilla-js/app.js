const backgroundElement = document.querySelector('#background')
const currentColorTextElement = document.getElementById('current-color')
const changeColorButtonElement = document.querySelectorAll('#change-btn')[0]


const hexDictionary = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

const generateColor = () => {
    let result = '#'

    for (let i = 0; i < 6; i++) {
        const symbolToAdd = hexDictionary[getRandomInt(0, hexDictionary.length)]
        result += symbolToAdd
    }

    return result
}

changeColorButtonElement.addEventListener('click', () => {
    // 1. Зарандомить значение цвета

    const resultColor = generateColor()
    // 2. Поменять значение background у элемента background

    backgroundElement.style.backgroundColor = resultColor

    // 3. Поменять текст с HEX цвета у элемента current-color

    currentColorTextElement.innerText = resultColor
})
