const [_, ...coordinates] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// sort
const answer = [...coordinates].sort((coorA, coorB) => {
  // a, b 좌표 문자열을 공백으로 split하여 두 원소로 이루어진 배열로 만든다.
  // 배열의 첫번째 원소를 x, 두번째 원소를 y로 명명한다.
  const [coorAX, coorAY] = coorA.split(" ");
  const [coorBX, coorBY] = coorB.split(" ");

  // x끼리 비교하여 두 x가 같으면 y를 비교하여 더 작은 y의 좌표가 앞으로 오도록 정렬한다.
  if (coorAY === coorBY) {
    return Number(coorAX) < Number(coorBX) ? -1 : 1;
  }

  // x끼리 비교하여 두 x가 다르면 작은 x가 앞으로 오도록 정렬한다.
  return Number(coorAY) < Number(coorBY) ? -1 : 1;
});

console.log(answer.join("\n"));
