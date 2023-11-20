const fs = require('fs');
const [str, num] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(Array.from({length : num}, () => str).join(''));