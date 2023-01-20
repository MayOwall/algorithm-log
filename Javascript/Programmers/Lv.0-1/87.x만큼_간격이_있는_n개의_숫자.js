const solution = (x, n) =>
  new Array(n).fill(null).map((_, idx) => x * (idx + 1));

// 예전의 답
/*
function solution(x, n) {
    const arr = [];
    for(let i = 0; i < n; i++) {
       arr.push( arr.length > 0 ? arr[arr.length - 1] + x : x);
    };
    return arr;
}
*/
