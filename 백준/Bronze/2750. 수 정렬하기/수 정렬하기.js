let [_, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

inputs = inputs.map(v => v * 1);
const answer = inputs.sort((a, b) => Number(a) - Number(b)).join('\n');
console.log(answer);