// answer-buttons

/*

const buttonAnswer1 = document.querySelector('#card__button1')
const Answer1 = document.querySelector('#card__answer1')

buttonAnswer1.addEventListener('click', () => {
  Answer1.classList.toggle('card__answer--hidden')
})

const buttonAnswer2 = document.querySelector('#card__button2')
const Answer2 = document.querySelector('#card__answer2')

buttonAnswer2.addEventListener('click', () => {
  Answer2.classList.toggle('card__answer--hidden')
})

const buttonAnswer3 = document.querySelector('#card__button3')
const Answer3 = document.querySelector('#card__answer3')

buttonAnswer3.addEventListener('click', () => {
  Answer3.classList.toggle('card__answer--hidden')
})

const buttonAnswer4 = document.querySelector('#card__button4')
const Answer4 = document.querySelector('#card__answer4')

buttonAnswer4.addEventListener('click', () => {
  Answer4.classList.toggle('card__answer--hidden')
})

// answer-buttons main-bookmarks

const buttonAnswer5 = document.querySelector('#card__button5')
const Answer5 = document.querySelector('#card__answer5')

buttonAnswer5.addEventListener('click', () => {
  Answer5.classList.toggle('card__answer--hidden')
})

const buttonAnswer6 = document.querySelector('#card__button6')
const Answer6 = document.querySelector('#card__answer6')

buttonAnswer6.addEventListener('click', () => {
  Answer6.classList.toggle('card__answer--hidden')
})

const buttonAnswer7 = document.querySelector('#card__button7')
const Answer7 = document.querySelector('#card__answer7')

buttonAnswer7.addEventListener('click', () => {
  Answer7.classList.toggle('card__answer--hidden')
})

const buttonAnswer8 = document.querySelector('#card__button8')
const Answer8 = document.querySelector('#card__answer4')

buttonAnswer8.addEventListener('click', () => {
  Answer8.classList.toggle('card__answer--hidden')
})

*/

/*

----------------- 8.9.

function getElAll(selector) {
  const el = document.querySelectorAll(selector)
  return el
}

const answerButtons = getElAll('.card__button')

for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener('click', () => {
    answerButtons[i].nextElementSibling.classList.toggle('card__answer--hidden')
    answerButtons[i].classList.toggle('card__button--hide')
    if (answerButtons[i].innerText === 'ausblenden') {
      answerButtons[i].innerText = 'Antwort zeigen'
    } else {
      answerButtons[i].innerText = 'ausblenden'
    }
  })
}

*/
