const input =
  require("fs").readFileSync("BaekjoonEx.txt").toString().trim() * 1;

let answer = "";

for (let i = 1; i <= input; i++) {
  const temp = Array.from({ length: i }, () => "*")
    .join("")
    .padStart(input);
  answer += `${temp}\n`;
}

console.log(answer);
