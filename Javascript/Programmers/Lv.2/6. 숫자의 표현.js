function solution(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    let temp = 0;
    let num = i;
    while (true) {
      temp += num;
      num += 1;
      if (temp === n) {
        count += 1;
        break;
      } else if (temp > n) {
        break;
      }
    }
  }

  return count;
}
