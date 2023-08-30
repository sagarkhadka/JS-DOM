const cta = document.querySelector('.cta')
const details = document.querySelector('ul')
const back = document.querySelector('.back')
let showDetails = false

const detailPanel = () => {
  if (!showDetails) {
    cta.style.transform = 'translateX(110%)'
    details.style.transform = 'translateX(0)'
    showDetails = true
  } else {
    cta.style.transform = 'translateX(0)'
    details.style.transform = 'translateX(-110%)'
    showDetails = false
  }
}

cta.addEventListener('click', () => {
  detailPanel()
})

back.addEventListener('click', () => {
  detailPanel()
})
