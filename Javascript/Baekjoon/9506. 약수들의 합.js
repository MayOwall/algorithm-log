const inputs = require("fs")
  .readFileSync("BaekjoonEx.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1)
  .map((num) => {
    const sum = [];
    for (let i = 1; i <= num / 2; i++) {
      if (!(Number(num) % i)) sum.push(i);
    }
    if (sum.reduce((acc, cur) => acc + Number(cur), 0) === Number(num)) {
      console.log(`${num} = ${sum.join(" + ")}`);
    } else {
      console.log(`${num} is NOT perfect.`);
    }
  });
