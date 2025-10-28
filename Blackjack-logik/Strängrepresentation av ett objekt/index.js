const prettyCard = function (card) {
  let suit, value;

  switch (card.suit) {
    case "HEARTS":
      suit = "♥";
      break;
    case "SPADES":
      suit = "♠";
      break;
    case "DIAMONDS":
      suit = "♦";
      break;
    case "CLUBS":
      suit = "♣";
      break;
  }

  switch (card.value) {
    case 1:
      value = "A";
      break;
    case 10:
      value = "T";
      break;
    case 11:
      value = "J";
      break;
    case 12:
      value = "Q";
      break;
    case 13:
      value = "K";
      break;
    default:
      value = String(card.value);
  }

  return value + suit;
};

console.log(prettyCard({ suit: "HEARTS", value: 1 }), "A♥");
console.log(prettyCard({ suit: "SPADES", value: 2 }), "2♠");
console.log(prettyCard({ suit: "DIAMONDS", value: 10 }), "T♦");
console.log(prettyCard({ suit: "CLUBS", value: 11 }), "J♣");
