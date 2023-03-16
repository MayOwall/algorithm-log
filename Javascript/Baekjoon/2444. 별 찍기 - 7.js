const input =
  require("fs").readFileSync("BaekjoonEx.txt").toString().trim() * 1;
let answer = [];
const add = (n) => {
  for (let i = 1; i <= n; i++) {
    const arr =
      Array.from({ length: n - i }, () => " ").join("") +
      Array.from({ length: 1 + (i - 1) * 2 }, () => "*").join("");
    answer.push(arr);
  }
};

add(input);

answer = [...answer, ...answer.slice(0, -1).reverse()].join("\n");
console.log(answer);
