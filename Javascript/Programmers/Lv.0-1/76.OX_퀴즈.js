const calculator = (arr) => {
  let answer = 0;
  let mark = "+";

  arr.forEach((v) => {
    if (v === "+") {
      mark = "+";
    } else if (v === "-") {
      mark = "-";
    } else {
      mark === "+" ? (answer += Number(v)) : (answer -= Number(v));
    }
  });

  return answer;
};

const solution = (n) => {
  const arr = n
    .map((v) => [v.split(" = ")[0].split(" "), v.split(" = ")[1]])
    .map(([a, b]) => (calculator(a) == b ? "O" : "X"));
  return arr;
};
