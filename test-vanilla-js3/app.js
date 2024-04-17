const sliderListElement = document.querySelector('.slider__list')
const sliderPrevButtonElement = document.querySelector('.slider__prev')
const sliderNextButtonElement = document.querySelector('.slider__next')

const ELEMENT_WIDTH = 600
const slidesCount = sliderListElement.children.length

sliderPrevButtonElement.addEventListener('click', (event) => {
    sliderNextButtonElement.style.display = 'block'
    const currentOffset = +sliderListElement.style.transform.split('translateX(').filter(Boolean).join('').split('px)').join('')

    const resultOffset = currentOffset + ELEMENT_WIDTH

    if (resultOffset <= 0) {
        sliderListElement.style.transform = `translateX(${resultOffset}px)`
    } else {
        sliderPrevButtonElement.style.display = 'none'
    }
})

sliderNextButtonElement.addEventListener('click', () => {
    sliderPrevButtonElement.style.display = 'block'
    const currentOffset = +sliderListElement.style.transform.split('translateX(').filter(Boolean).join('').split('px)').join('')

    const resultOffset = currentOffset - ELEMENT_WIDTH

    if (resultOffset >= ELEMENT_WIDTH * (slidesCount - 1) * -1) {
        sliderListElement.style.transform = `translateX(${resultOffset}px)`
    } else {
        sliderNextButtonElement.style.display = 'none'
    }
})
