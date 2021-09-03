// toggle status of bookmark

function getElAll(selector) {
  const el = document.querySelectorAll(selector)
  return el
}

const favBookmarks = getElAll('.card__bookmark')

for (let i = 0; i < favBookmarks.length; i++) {
  favBookmarks[i].addEventListener('click', () => {
    favBookmarks[i].classList.toggle('card__bookmark--active')
  })
  console.log('Hello Bookmark! Function check')
}
