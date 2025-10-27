const deck = [];
let suits = ["HEARTS", "SPADES", "DIAMONDS", "CLUBS"];

for (let i = 0; i < 4; i++) {
  deck.push({ suit: suits[i], value: 1 });
  for (let x = 0; x < 12; x++) {
    deck.push({ suit: suits[i], value: x + 2 });
  }
}

console.log(deck);
