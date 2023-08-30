const switchBtn = document.getElementById('switch')
const handle = document.getElementById('handle')
let switchStatus = false

switchBtn.addEventListener('click', () => {
  if (!switchStatus) {
    document.documentElement.style.setProperty('--background-color', 'white')
    document.documentElement.style.setProperty('--text-color', 'black')
    handle.classList.add('move-right')
    switchStatus = 1
  } else {
    switchStatus = 0
    document.documentElement.style.setProperty('--background-color', '#232323')
    document.documentElement.style.setProperty('--text-color', '#fff')
    handle.classList.remove('move-right')
  }
})
