const vic = (v) => (v % 2 ? (v + 1) / 2 : v / 2);
const solution = (N, A, B) => {
  let answer = 1;
  let [min, max] = [A, B].sort((a, b) => a - b);
  while (true) {
    if (max % 2 && max - min === 1) {
      break;
    }
    answer += 1;
    min = vic(min);
    max = vic(max);
  }

  return answer;
};

// 예전 풀이
/*
function solution(n,a,b) {
    let [left, right] = a < b ? [a, b] : [b, a];
    let count = 1;
    
    while(left % 2 === 0 || left + 1 !== right) {
        count += 1;
        left = Math.ceil(left / 2);
        right = Math.ceil(right / 2);
    };
    
    return count;
}


*/
