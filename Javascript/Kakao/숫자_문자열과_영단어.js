const nums = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const solution = (s) => {
  let result = s;
  nums.forEach((v) => {
    const regex = new RegExp(v, "g");
    result = result.replace(regex, nums.indexOf(v));
  });
  return Number(result);
};

// 원래 풀이
/*
function solution(s) {
    let stack = [];
    const stringArr = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const arr = [...s];
    const answer = [];

    arr.forEach((v) => {
        if (!isNaN(Number(v))) {
            answer.push(v);
        } else {
            stack.push(v);
            if (stringArr.includes(stack.join(""))) {
                answer.push(stringArr.indexOf(stack.join("")));
                stack = [];
            }
        }
    });

    return Number(answer.join(""));
}
*/
