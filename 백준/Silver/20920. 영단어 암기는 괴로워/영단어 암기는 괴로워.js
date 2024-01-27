// 영단어를 입력 받는다
// 입력받은 영단어 중 길이가 M 이하인 단어는 제거한다.
// 영단어의 개수를 조사한다.
// 많이 나오는 영단어일수록 앞에 배치한다.
// 단어의 길이가 길수록 앞에 배치한다.
// 알파벳 사전순으로 앞에 배치한다.

let [num, ...words] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const M = num.split(" ")[1] * 1;
words = words.filter((v) => v.length >= M);

const counts = {};
words.forEach((word) =>
  counts[word] ? (counts[word] += 1) : (counts[word] = 1)
);
words = [...new Set(words)];
words.sort((a, b) => {
  let countA = counts[a];
  let countB = counts[b];
  if (countA !== countB) {
    return countA < countB ? 1 : -1;
  }

  if (a.length !== b.length) {
    return a.length < b.length ? 1 : -1;
  }
  return a < b ? -1 : a > b ? 1 : 0;
});

console.log(words.join("\n"));
