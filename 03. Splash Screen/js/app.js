const splash = document.querySelector('.splash')
const headline = document.querySelector('h1')
const DURATION = 2000

const removeSplash = () => {
  splash.classList.add('remove-splash')
  headline.classList.add('headline-intro')
}

setTimeout(() => {
  removeSplash()
}, 2000)
