const n = require('fs').readFileSync('/dev/stdin').toString().trim() * 1;
const answer = Array.from({length : n}, (_, i) => n - i);
console.log(answer.join('\n'));