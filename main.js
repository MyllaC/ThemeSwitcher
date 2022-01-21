const themeValue = localStorage.getItem('selectedTheme')
const defaultTheme = 'light'

document.querySelector('#switchContainer').classList.value = themeValue

const saveTheme = function () {
  const theme = document.querySelector('#switchContainer').classList.value
  localStorage.setItem('selectedTheme', theme)
  return
}

function darkTheme() {
  document.querySelector('#switchContainer').classList.toggle(defaultTheme)
  saveTheme()
  return
}
