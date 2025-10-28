const deck = [];
let suits = ["HEARTS", "SPADES", "DIAMONDS", "CLUBS"];

for (let i = 0; i < 4; i++) {
  deck.push({ suit: suits[i], value: 1 });
  for (let x = 0; x < 12; x++) {
    deck.push({ suit: suits[i], value: x + 2 });
  }
}

console.log(deck);

// Aware that better solutions(suit of suits) exist, but this is how i generated the correct result the first time. We were asked to not create a function.
