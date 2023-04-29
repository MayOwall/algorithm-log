const n = require("fs").readFileSync("/dev/stdin").toString().trim() * 1;

n % 2 ? console.log(`${n} is odd`) : console.log(`${n} is even`);
