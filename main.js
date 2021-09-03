// navigation start

const mainHome = getEl('#main__home')
const mainBookmarks = getEl('#main__bookmarks')
const mainCreate = getEl('#main__create')
const mainProfile = getEl('#main__profile')

const buttonHome = getEl('#footer__home')
const buttonBookmarks = getEl('#footer__bookmarks')
const buttonCreate = getEl('#footer__create')
const buttonProfile = getEl('#footer__profile')

function getEl(selector) {
  const el = document.querySelector(selector)
  return el
}

// Events

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
