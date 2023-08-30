const quote = 'Because if yo do not, you will remain stagnant'
const title = document.querySelector('h1')
const button = document.querySelector('button')

// title.innerText = quote

const changeQuote = () => {
  title.innerText = quote
}

button.addEventListener('click', changeQuote)
