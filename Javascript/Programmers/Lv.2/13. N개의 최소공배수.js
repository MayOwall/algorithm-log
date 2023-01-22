const solution = (arr) =>
  arr.reduce((acc, cur, idx) => {
    let num1 = acc;
    let num2 = cur;
    const stack = [1];
    console.log(num1, num2);

    outer: while (true) {
      for (let i = 2; i <= Math.min(num1, num2); i++) {
        if (!(num1 % i) && !(num2 % i)) {
          stack.push(i);
          num1 = num1 / i;
          num2 = num2 / i;
          continue outer;
        }
      }

      const answer = stack.reduce((acc, cur) => acc * cur) * num1 * num2;
      console.log("answer :", stack, num1, num2, answer);
      return answer;
    }
  });

// 예전 풀이
/*
function solution(arr) {
    const answer = arr.reduce((i, j) => {
        const gcd = (a, b) => {
            let r;
            while (b !== 0) {
                r = a % b;
                a = b;
                b = r;
            }
            return a;
        };

        return (i * j) / gcd(i, j);
    }, 1);

    return answer;
}

*/
