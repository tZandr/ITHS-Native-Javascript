/* --- Validator uses a deck of its own but I used mine to test. ---

const deck = [];
let suits = ["HEARTS", "SPADES", "DIAMONDS", "CLUBS"];

for (let i = 0; i < 4; i++) {
  deck.push({ suit: suits[i], value: 1 });
  for (let x = 0; x < 12; x++) {
    deck.push({ suit: suits[i], value: x + 2 });
  }
}

console.log(deck);

*/

let draw = function (deck) {
  return deck.pop();
};

const card = draw(deck);

console.log(card);
console.log(deck.length);
