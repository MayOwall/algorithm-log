let input = require("fs").readFileSync("BaekjoonEx.txt").toString().trim();

const cro = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let answer = 0;

for (let i = 0; i < input.length; i++) {
  const de = input.slice(i, i + 2);
  const tri = input.slice(i, i + 3);
  if (cro.includes(de)) {
    i += 1;
  } else if (cro.includes(tri)) {
    i += 2;
  }
  answer += 1;
}

console.log(answer);
