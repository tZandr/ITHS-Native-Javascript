let players = document.querySelector('ol')

for (let i = 0; i < players.children.length; i++ ) {
  players.children[i].innerHTML = players.children[i].textContent + ' <span class="credits">100 credits</span>'
  }

  // Add the span element to each list item using a loop and innerHTML.
  // The code must work regardless of how many list items there are.