document.addEventListener('DOMContentLoaded', () => {
  function log() {
    console.log('Hi hello');
  }

  let element = document.querySelector('#button');
  element.addEventListener('click', log);
});
