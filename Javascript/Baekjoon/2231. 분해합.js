const input =
  require("fs").readFileSync("BaekjoonEx.txt").toString().trim() * 1;

for (let i = 1; i < input; i++) {
  const sum =
    i +
    i
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0);

  if (sum === input) return console.log(i);
}

return console.log(0);
