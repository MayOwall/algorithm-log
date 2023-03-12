const answer = require("fs").readFileSync("BaekjoonEx.txt").toString().trim();

if (answer === "") {
  console.log(0);
} else {
  console.log(answer.split(" ").length);
}
