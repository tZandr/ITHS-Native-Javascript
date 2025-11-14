let send = document.querySelector('#send');
let input = document.querySelector('#name');
let errors = document.querySelector('#errors');

send.disabled = true;
errors.style.display = "block";

input.addEventListener('input', () => {
  if (input.value.trim() !== '') {
    send.disabled = false;
    errors.style.display = "none";
  } else {
    send.disabled = true;
    errors.style.display = "block";
  }
});

function greeting() {
  let n = input.value;
  document.querySelector('#greeting').textContent = 'Hej ' + n + '!';
}

send.addEventListener('click', greeting);
