let suits = ["HEARTS", "SPADES", "DIAMONDS", "CLUBS"];

let createDeck = function () {
  const deck = [];

  for (const suit of suits) {
    for (let value = 1; value <= 13; value++) {
      deck.push({ suit, value });
    }
  }

  return deck;
};

console.log(createDeck());
