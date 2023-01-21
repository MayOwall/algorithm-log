const calculator = (v) => v.toString(2).replace(/0/g, "").length;

const solution = (n) => {
  const num = calculator(n);
  while (true) {
    n++;
    if (calculator(n) === num) return n;
  }
};

// 예전 풀이
/*
function solution(n) {
    const num = n.toString(2).replace(/0/g, '').length;
    
    while(true) {
        n += 1;
        if(num === n.toString(2).replace(/0/g, '').length) return n;
    };
}
*/
