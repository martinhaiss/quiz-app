// main

const mainHome = getEl('#main__home')
const mainBookmarks = getEl('#main__bookmarks')
const mainCreate = getEl('#main__create')
const mainProfile = getEl('#main__profile')

//footer

const buttonHome = getEl('#footer__home')
const buttonBookmarks = getEl('#footer__bookmarks')
const buttonCreate = getEl('#footer__create')
const buttonProfile = getEl('#footer__profile')

function getEl(selector) {
  const el = document.querySelector(selector)
  return el
}

// ---------------------  Array with data of quiz-cards ----------------------

const cardData = [
  {
    question: 'In welchem Jahr wurde das erste Emoji gepostet?',
    answer:
      'Das erste Emoticon wurde 1982 von dem Amerikaner Scott E. Fahlmann in einem elektronischen Forum gepostet.',
    isBookmarked: false,
    showAnswer: false,
    tags: ['Digital', 'Technik', 'Internet', 'Emoji'],
  },
  {
    question: 'Wofür ist die Inselgruppe Tuvalu im Südpazifik berühmt?',
    answer:
      'Die aus neun Korallen-Atollen bestehende Inselgruppe mit ihren 11.000 Einwohnern ist durch ihre Internet-Domain ".tv" berühmt.',
    isBookmarked: false,
    showAnswer: false,
    tags: ['Internet', 'Geografie', 'Pazifik', 'Insel'],
  },
  {
    question: 'Wie schwer war das erste in Serie produzierte Handy?',
    answer:
      'Das erste Serienhandy der Welt, das Motorola Dynatac wog 800 Gramm. So viel wie acht Tafeln Schokolade.',
    isBookmarked: false,
    showAnswer: false,
    tags: ['Digital', 'Technik', 'Handy'],
  },
  {
    question: 'Woher kommt der Name "Frisbee"?',
    answer:
      'Der Name geht auf die Bäckerei "Frisbie" in Conneticut zurück. Deren kreisrunde Backformen aus Zinn waren die Vorläufer der fliegenden Plastikscheiben.',
    isBookmarked: false,
    showAnswer: false,
    tags: ['Sport', 'Freizeit', 'Geschichte'],
  },
]

// --------- Rewrite of the HTML to use createElement() and appendChild() -----------

function renderCard(cardData, targetElement) {
  const cardSection = document.createElement('section')
  cardSection.classList.add('card')
  targetElement.appendChild(cardSection)

  const cardBookmark = document.createElement('button')
  cardBookmark.classList.add('card__bookmark')
  cardBookmark.setAttribute('aria-label', 'Bookmark')
  cardSection.appendChild(cardBookmark)

  const cardQuestion = document.createElement('h2')
  cardQuestion.classList.add('card__question')
  cardQuestion.textContent = cardData.question
  cardSection.appendChild(cardQuestion)

  const cardButton = document.createElement('button')
  cardButton.classList.add('card__button')
  cardButton.classList.add('card__button--hide')
  cardButton.textContent = 'Antwort zeigen'
  cardSection.appendChild(cardButton)

  const cardAnswer = document.createElement('p')
  cardAnswer.classList.add('card__answer')
  cardAnswer.classList.add('card__answer--hide')
  cardAnswer.textContent = cardData.answer
  cardSection.appendChild(cardAnswer)

  const cardTags = document.createElement('ul')
  cardTags.classList.add('tags')
  cardSection.appendChild(cardTags)

  cardData.tags.forEach(tag => {
    const cardTag = document.createElement('li')
    cardTag.classList.add('tags__item')
    cardTag.textContent = tag
    cardTags.appendChild(cardTag)
  })
}

cardData.forEach(getEl => {
  renderCard(getEl, mainHome)
})
cardData.forEach(getEl => {
  renderCard(getEl, mainBookmarks)
})

// --------------- show & hide answers ------------------

function getElAll(selector) {
  const el = document.querySelectorAll(selector)
  return el
}

const answerButtons = getElAll('.card__button')

for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener('click', () => {
    answerButtons[i].nextElementSibling.classList.toggle('card__answer--show')
    answerButtons[i].classList.toggle('card__button--hide')
    if (answerButtons[i].innerText === 'ausblenden') {
      answerButtons[i].innerText = 'Antwort zeigen'
    } else {
      answerButtons[i].innerText = 'ausblenden'
    }
  })
}

// ------------  Events -----------------------

buttonHome.addEventListener('click', () => {
  mainHome.classList.add('main--show')
  mainBookmarks.classList.remove('main--show')
  mainCreate.classList.remove('main--show')
  mainProfile.classList.remove('main--show')

  buttonHome.classList.add('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
})

buttonBookmarks.addEventListener('click', () => {
  mainHome.classList.remove('main--show')
  mainBookmarks.classList.add('main--show')
  mainCreate.classList.remove('main--show')
  mainProfile.classList.remove('main--show')

  buttonHome.classList.remove('active')
  buttonBookmarks.classList.add('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
})

buttonCreate.addEventListener('click', () => {
  mainHome.classList.remove('main--show')
  mainBookmarks.classList.remove('main--show')
  mainCreate.classList.add('main--show')
  mainProfile.classList.remove('main--show')

  buttonHome.classList.remove('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.add('active')
  buttonProfile.classList.remove('active')
})

buttonProfile.addEventListener('click', () => {
  mainHome.classList.remove('main--show')
  mainBookmarks.classList.remove('main--show')
  mainCreate.classList.remove('main--show')
  mainProfile.classList.add('main--show')

  buttonHome.classList.remove('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.add('active')
})
