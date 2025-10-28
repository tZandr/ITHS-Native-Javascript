// Validator uses a deck of its own but I used mine to test.

const deck = [];
let suits = ["HEARTS", "SPADES", "DIAMONDS", "CLUBS"];

for (const suit of suits) {
  for (let value = 1; value <= 13; value++) {
    deck.push({ suit, value });
  }
}

console.log(deck);

const score = function (deck) {
  let totalScore = 0;

  for (const card of deck) {
    if (card.value === 1) {
      totalScore += 11;
    } else if (card.value >= 11 && card.value <= 13) {
      totalScore += 10;
    } else {
      totalScore += card.value;
    }
  }
  return totalScore;
};

console.log(
  score([
    { suit: "HEARTS", value: 1 },
    { suit: "HEARTS", value: 10 },
  ])
); // Returns 11
console.log(score([{ suit: "SPADES", value: 2 }])); // Returns 2
console.log(score([{ suit: "SPADES", value: 11 }])); // Returns 10
console.log(
  score([
    { suit: "HEARTS", value: 2 },
    { suit: "HEARTS", value: 3 },
    { suit: "HEARTS", value: 4 },
  ])
); // Returns 9
