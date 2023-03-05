const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString() * 1;

!(input % 400) || (!(input % 4) && input % 100)
  ? console.log(1)
  : console.log(0);
