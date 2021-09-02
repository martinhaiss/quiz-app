// answer-buttons

const buttonAnswer1 = document.querySelector('#card__button1')
const Answer1 = document.querySelector('#card__answer1')

buttonAnswer1.addEventListener('click', () => {
  Answer1.classList.toggle('card__answer--show')
})

const buttonAnswer2 = document.querySelector('#card__button2')
const Answer2 = document.querySelector('#card__answer2')

buttonAnswer2.addEventListener('click', () => {
  Answer2.classList.toggle('card__answer--show')
})

const buttonAnswer3 = document.querySelector('#card__button3')
const Answer3 = document.querySelector('#card__answer3')

buttonAnswer3.addEventListener('click', () => {
  Answer3.classList.toggle('card__answer--show')
})

const buttonAnswer4 = document.querySelector('#card__button4')
const Answer4 = document.querySelector('#card__answer4')

buttonAnswer4.addEventListener('click', () => {
  Answer4.classList.toggle('card__answer--show')
})
