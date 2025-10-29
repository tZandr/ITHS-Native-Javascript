/* Validator uses a deck of its own but I used mine to test.

const deck = [];
let suits = ["HEARTS", "SPADES", "DIAMONDS", "CLUBS"];

for (const suit of suits) {
  for (let value = 1; value <= 13; value++) {
    deck.push({ suit, value });
  }
}

console.log(deck);
*/

// Assignment:
// Ace now gives 1 or 11 based on what the player needs to stay <= 21.
const score = function (deck) {
  let totalScore = 0;
  let aces = 0;

  for (const card of deck) {
    if (card.value >= 11 && card.value <= 13) {
      totalScore += 10; // 10 points for every J, Q and K
    } else if (card.value === 1) {
      aces += 1; // Points for aces are calculated in the next loop.
    } else {
      totalScore += card.value;
    }
  }

  // Adds 1 point per ace
  totalScore += aces;

  // Add 10 points per ace, as long as the score does not surpass 21
  while (aces > 0 && totalScore + 10 <= 21) {
    totalScore += 10;
    aces--;
  }

  return totalScore;
};

console.log(score([{ suit: "HEARTS", value: 1 }])); // returns 11
console.log(
  score([
    { suit: "HEARTS", value: 11 },
    { suit: "HEARTS", value: 1 },
  ])
); // returns 21
console.log(
  score([
    { suit: "HEARTS", value: 1 },
    { suit: "SPADES", value: 1 },
    { suit: "DIAMONDS", value: 1 },
  ])
); // returns 13
console.log(
  score([
    { suit: "HEARTS", value: 1 },
    { suit: "SPADES", value: 1 },
    { suit: "DIAMONDS", value: 1 },
    { suit: "CLUBS", value: 1 },
  ])
); // returns 14
