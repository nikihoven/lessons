const buttonsContainerElement = document.getElementById('buttons')
const resultElement = document.getElementById('counter-result')

const buttonDecrease = document.createElement('button')
buttonDecrease.innerText = 'Уменьшить'
const buttonReset = document.createElement('button')
buttonReset.innerText = 'Сбросить'
const buttonIncrease = document.createElement('button')
buttonIncrease.innerText = 'Увеличить'

const buttonsArray = [buttonDecrease, buttonReset, buttonIncrease]

buttonsArray.forEach(el => {
    buttonsContainerElement.insertAdjacentElement('afterbegin', el)
})

buttonReset.addEventListener('click', () => {
    resultElement.innerText = '0'
})

buttonDecrease.addEventListener('click', () => {
    const currentNumber = +resultElement.innerText
    resultElement.innerText = currentNumber - 1 + ''
})

buttonIncrease.addEventListener('click', () => {
    const currentNumber = +resultElement.innerText
    resultElement.innerText = currentNumber + 1 + ''
})
