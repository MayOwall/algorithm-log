// 회원정보 입력받기
let [_, ...members] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 정렬
members.sort((a, b) => {
  let [ageA] = a.split(" ");
  let [ageB] = b.split(" ");
  ageA = Number(ageA);
  ageB = Number(ageB);
  // a의 나이가 b의 나이보다 적으면 -1을 리턴한다.
  // 두 나이가 같으면 0을 리턴한다.
  // a의 나이가 b의 나이보다 많으면 1을 리턴한다.
  return ageA < ageB ? -1 : ageA === ageB ? 0 : 1;
});

// 출력한다.
console.log(members.join("\n"));
