const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');
let num = []; 
input.forEach((e)=>{
    num.push(Number(e));
})

let arr = []; 
for(let i = 1; i <= num[0]; i++){
    arr.push(i);
}
let result = "<";
for (let j = 0; j < num[0]; j++) {
    let i = num[1] - 1; 
    while (i-- > 0) { 
        let tmp = arr.shift(); 
        arr.push(tmp); 
    }
    result += arr.shift(); 
    if(arr.length == 0)
        result += ">";
    else
        result += ", ";
}
console.log(result);