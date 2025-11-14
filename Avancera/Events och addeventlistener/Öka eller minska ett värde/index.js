let value = document.querySelector('#value')
value.textContent = 1
let plus = document.querySelector('#increase')
let minus = document.querySelector('#decrease')

function increase(){
  value.textContent = Number(value.textContent) + 1
}

function decrease(){
  value.textContent = Number(value.textContent) - 1
}

plus.addEventListener('click', increase)
minus.addEventListener('click', decrease)