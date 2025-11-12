let send = document.querySelector('#send')

function greeting() {
  let n = document.querySelector('input').value
  document.querySelector('#greeting').textContent = 'Hej ' + n + '!'
}

send.addEventListener('click', greeting)
