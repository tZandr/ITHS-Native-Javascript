let value = document.querySelector('#value')
value.textContent = 1
let element = document.querySelector('#increase')

function increase(){
  value.textContent = Number(value.textContent) + 1
}

element.addEventListener('click', increase)