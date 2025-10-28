/*
* Validator uses a deck of its own but I used mine to test.

const deck = [];
let suits = ["HEARTS", "SPADES", "DIAMONDS", "CLUBS"];

for (const suit of suits) {
  for (let value = 1; value <= 13; value++) {
    deck.push({ suit, value });
  }
}

console.log(deck); // Original deck

--- */

let shuffle = function (deck) {
  for (let i = deck.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
};

console.log(shuffle(deck));
// Assignment asks for shuffle to return defined
