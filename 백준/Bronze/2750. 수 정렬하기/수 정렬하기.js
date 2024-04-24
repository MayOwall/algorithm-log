// Node 내장 정렬

const [_, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const answer = inputs.sort((a, b) => Number(a) - Number(b)).join('\n');
console.log(answer);