const strs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 올바른 문자열인지 확인하는 함수 구현
const isVPS = (ps) => {
  // 스택 생성 (자연수 0)
  let stack = [];

  for (let i = 0; i < ps.length; i++) {
    // 스택이 0 미만이면 break 후 false 리턴
    if (stack["("] < 0 || stack["["] < 0) return false;

    // (이면 스택 += 1 or )이면 스택 -= 1
    if (ps[i] === "(" || ps[i] === "[") stack.push(ps[i]);
    if (ps[i] === ")") {
      if (stack[stack.length - 1] !== "(") return false;
      stack.pop();
    }

    // [이면 스택 += 1 or ]이면 스택 -= 1
    if (ps[i] === "]") {
      if (stack[stack.length - 1] !== "[") return false;
      stack.pop();
    }
  }

  // 순회가 마무리된 후 스택이 0이면 true, 아니면 false 리턴
  return stack.length === 0;
};

// inputs을 함수를 통해 NO 또는 YES로 전환
const answer = strs.map((str) => (isVPS(str) ? "yes" : "no")).slice(0, -1);

// join하여 console로 출력
console.log(answer.join("\n"));
