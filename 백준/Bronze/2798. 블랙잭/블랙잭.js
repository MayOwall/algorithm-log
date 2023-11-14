const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const sum = a.split(" ")[1] * 1;
const cards = b.split(" ").map((v) => v * 1);

const getMax = (cards, sum) => {
  let max = 0;
  for (let i = 0; i < cards.length; i++) {
    for (let j = 0; j < cards.length; j++) {
      if (j === i) continue;
      for (let k = 0; k < cards.length; k++) {
        if (k === i || k === j) continue;
        const curMax = cards[i] + cards[j] + cards[k];
        if (curMax <= sum && max < curMax) {
          max = curMax;
        }
      }
    }
  }

  return max;
};

const max = getMax(cards, sum);
console.log(max);
