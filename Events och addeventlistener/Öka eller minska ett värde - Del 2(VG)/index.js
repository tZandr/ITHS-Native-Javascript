let value = document.querySelector('#value')
value.textContent = 1
let plus = document.querySelector('#increase')
let minus = document.querySelector('#decrease')
minus.disabled = true

function increase(){
  value.textContent = Number(value.textContent) + 1
  updateButton()
}

function decrease(){
  if (value.textContent > 1) {
    value.textContent = Number(value.textContent) - 1
  }
  updateButton()
}

function updateButton(){
  if (Number(value.textContent) <= 1) {
    minus.disabled = true
  } else {
    minus.disabled = false
  }
}

plus.addEventListener('click', increase)
minus.addEventListener('click', decrease)