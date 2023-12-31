// N, 숫자 카드들, M, 상근이가 가지고 있는지 확인해야할 숫자 카드 목록을 입력받는다.

let [N, cards, M, targetCards] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

N = N * 1;
M = M * 1;
cards = cards.split(" ");
targetCards = targetCards.split(" ");

// 빈 객체 A를 만든다.

const A = {};

// 숫자 카드들을 순회하며 A의 해당 숫자 인덱스에 +1 해 준다.

for (let i = 0; i < N; i++) {
  const card = cards[i] * 1;
  A[card] ? A[card]++ : (A[card] = 1);
}

// 확인해야할 숫자 카드 목록을 map하여 각 카드별 해당 카드의 숫자를 인덱스로 가지는 A배열 요소의 값이 얼마인지 변환한 배열 B를 구한다.
// B를 공백으로 합친 다음 콘솔로 찍는다.

const answer = targetCards
  .map((targetCard) => A[targetCard * 1] || 0)
  .join(" ");

console.log(answer);
