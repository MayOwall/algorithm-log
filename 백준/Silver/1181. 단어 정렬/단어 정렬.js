// 단어들 입력받기
let [_, ...words] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 단어 중복을 제거한다.
words = [...new Set(words)];

// 사전순으로 정렬하는 메서드
const dictionarySort = (wordA, wordB) => {
  // 각 문자열의 인덱스를 순회한다.
  for (let i = 0; i < wordA.length; i++) {
    const charCodeA = wordA.charCodeAt(i);
    const charCodeB = wordB.charCodeAt(i);
    // 아스키 코드가 같다면 다음 문자열을 비교한다.
    if (charCodeA === charCodeB) continue;
    // 아스키코드가 다르다면 더 작은 문자열을 리턴한다.
    return charCodeA < charCodeB ? -1 : 1;
  }
  return 0;
};

// 정렬
words.sort((a, b) => {
  // 단어 길이가 같으면 사전 순으로
  if (a.length === b.length) return dictionarySort(a, b);
  // 단어 길이가 다르면 단어 길이순으로
  return a.length < b.length ? -1 : 1;
});

console.log(words.join("\n"));
