const burgerButton = document.getElementById('burger-button')
const burgerContainer = document.getElementById('burger-container')

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active-burger')
  burgerContainer.classList.toggle('active')
})
